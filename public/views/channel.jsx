var React = require('react');
var Router = require('react-router');
var Helmet = require('react-helmet');
var request = require('superagent');

var util = require('util');

module.exports = React.createClass({
  mixins: [ Router.State ],
  getInitialState: function(){
    return {params: {}, title: '', view_description: true};
  },

  getContent: function(){
    var self = this;
    request
      .get('/api/channel/'+self.getParams().channel)
      .end(function(err, res){
        if (res) {
          self.setState({content: res.body, title: res.body.name, view_description: true });
        }
      });
  },

  // componentWillMount: function() {
  //   var self = this;
  // },

  componentWillMount: function() {
    var self = this;
    self.setState({ params: self.getParams() });
    if (self.props.content){
      self.setState({content: self.props.content, title: self.props.content.name});
    }
    else if (self.getParams().channel){
      self.getContent();
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var self = this;
    self.getContent();
  },

  consoleLog: function(){
    console.log("this.state: " + util.inspect(this.state));
    console.log("this.props: " + util.inspect(this.props));
  },

  toggleDescription: function(){
    this.setState({view_description: !this.state.view_description});
  },

  render: function render() {
    var self = this;
    var title = self.state.title;
    if  (self.state.content) {
      var name = self.state.content.name;
      var description = self.state.content.description;
      var icon = self.state.content.icon;
      var projects = self.state.content.case_studies.map(function(project, index){
        var tmp_styles = {
          backgroundImage: 'url('+project.featured_image+')'
        }
        var tmp_number = index+1;
        return (
           <div className={"project project_"+tmp_number} style={tmp_styles}>
             <div className="project_content">
               <h1 className="project_name">{project.name}</h1>
             </div>
           </div>
         )
      });
    }

    if (self.state.view_description){
      var project_view = "featured_projects show";
    } else {
      var project_view = "featured_projects hide";
    }

    return (
      <div className="channel">
        <Helmet
              title={title}
              meta={[
                  {"name": "description", "content": title },
                  {"property": "og:type", "content": "article"}
              ]}
              link={[
                  {"rel": "canonical", "href": "http://mysite.com/example"},
                  {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
                  {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
              ]}
          />
        { self.state.content ?
          <div className="content">
            <div className={project_view}>
              {projects.reverse()}
              <div className="channel_info">
                <h1 className="channel_name">{name}</h1>
                <div className="channel_description">{description}</div>
                <span className="view_channel" onClick={self.toggleDescription}>View {name} projects</span>
                <img className="channel_icon" onClick={self.toggleDescription} src={icon} />
              </div>
            </div>
          </div>
          : "Loading..."
        }
      </div>
    );
  }
});
