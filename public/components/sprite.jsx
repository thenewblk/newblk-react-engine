var React = require('react');
var util = require('util');
var Isvg = require('react-inlinesvg');

function getFilePathExtension(path) {
	var filename = path.split('\\').pop().split('/').pop();
	return filename.substr(( Math.max(0, filename.lastIndexOf(".")) || Infinity) + 1);
}

module.exports = React.createClass({
  getInitialState: function() {
		var timer = {
		    running: false,
		    iv: 5000,
		    timeout: false,
		    cb : function(){},
		    start : function(cb,iv){
		        var elm = this;
		        clearInterval(this.timeout);
		        this.running = true;
		        if(cb) this.cb = cb;
		        if(iv) this.iv = iv;
		        this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
		    },
		    execute : function(e){
		        if(!e.running) return false;
		        e.cb();
		        e.start();
		    },
		    stop : function(){
		        this.running = false;
		    },
		    set_interval : function(iv){
		        clearInterval(this.timeout);
		        this.start(false, iv);
		    }
		};
    return { animation: "start", current_frame: 0, x: 0, y: 0, interval: {}, timer: timer }
  },

  componentWillMount: function(){
    this.animate();
  },
  componentWillUnmount: function(){
    this.setState({animation: "stop"});
  },

  enter: function()	{
    this.setState({animation: "forward"});

	},

  out: function()	{
    this.setState({animation: "reverse"});
	},

	enterLoop: function()	{
		this.setState({animation: "startloop"});

	},

	outLoop: function()	{
		this.setState({animation: "stoploop"});
	},


  animate: function(){
    var self = this;
    var speed = ( 1000 * self.props.duration ) / self.props.frames;

    // interv = this.setInterval(function(){
    //     if ( self.state.animation == "start") {
    //     }
    //
    //     if (( self.state.animation == "forward") && (self.state.current_frame != self.props.frames - 1 ) ) {
    //         console.log(self.state);
    //         var new_frame = self.state.current_frame + 1;
    //         var col = (new_frame % self.props.columns) +1;
    //         var row = Math.floor( ( new_frame ) / self.props.columns ) + 1;
    //
    //         var x = (col - 1) * self.props.frameW * -1;
    //         var y = (row - 1) * self.props.frameH * -1;
    //         self.setState( { current_frame: new_frame, x: x, y: y } );
    //     }
    //
    //     if ( (self.state.animation == "reverse")  && (self.state.current_frame != 0) ) {
    //         var new_frame = self.state.current_frame - 1;
    //         var col = (new_frame % self.props.columns) +1;
    //         var row = Math.floor( ( new_frame ) / self.props.columns ) + 1;
    //
    //         var x = (col - 1) * self.props.frameW * -1;
    //         var y = (row - 1) * self.props.frameH * -1;
    //         self.setState( { current_frame: new_frame, x: x, y: y } );
    //     }
    //     if ( self.state.animation == "stop") {
    //       clearInterval(interv);
    //     }
    //
    // }, speed);


    interval = speed; // initial condition


    self.state.timer.start(function(){
      if ( self.state.animation == "start") {
      }

      if (( self.state.animation == "forward") && (self.state.current_frame != self.props.frames - 1 ) ) {

          var new_frame = self.state.current_frame + 1;
          var col = (new_frame % self.props.columns) + 1;
          var row = Math.floor( ( new_frame ) / self.props.columns ) + 1;

          var x = (col - 1) * self.props.frameW * -1;
          var y = (row - 1) * self.props.frameH * -1;
          self.setState( { current_frame: new_frame, x: x, y: y } );
      }

      if ( (self.state.animation == "reverse")  && (self.state.current_frame != 0) ) {
          var new_frame = self.state.current_frame - 1;
          var col = (new_frame % self.props.columns) + 1;
          var row = Math.floor( ( new_frame ) / self.props.columns ) + 1;

          var x = (col - 1) * self.props.frameW * -1;
          var y = (row - 1) * self.props.frameH * -1;
          self.setState( { current_frame: new_frame, x: x, y: y } );
      }

			if (( self.state.animation == "startloop")) {
				if (self.state.current_frame == self.props.frames - 1 ) {
					self.setState( { current_frame: 0, x: 0, y: 0 } );
				} else {
					var new_frame = self.state.current_frame + 1;
					var col = (new_frame % self.props.columns) + 1;
					var row = Math.floor( ( new_frame ) / self.props.columns ) + 1;

					var x = (col - 1) * self.props.frameW * -1;
					var y = (row - 1) * self.props.frameH * -1;
					self.setState( { current_frame: new_frame, x: x, y: y } );
				}
			}

			if (( self.state.animation == "stoploop")) {
				self.setState( { current_frame: 0, x: 0, y: 0 } );
			}


    } , speed );
  },

  render: function() {
    var self = this;

    var image = self.props.image,
				width = self.props.frameW * self.props.columns,
				loop = self.props.loop,
				hover = self.props.hover,
				height = self.props.frameH * ( Math.ceil( self.props.frames / self.props.columns ) );

    if (self.props.className) {
      var className = self.props.className + " icon sprite_container";
    } else {
      var className = "icon sprite_container";
    }

    var style = {
      transform: "translate3d(" + self.state.x + "px, " + self.state.y + "px, 0px)",
      WebkitTransform: "translate3d(" + self.state.x + "px, " + self.state.y + "px, 0px)",
      width: width,
      height: height,
      position: "absolute"
    };

    var size = {
      height: self.props.frameH + "px",
      width: self.props.frameW + "px",
    };
    if (self.props.duration && self.props.frames) {
      self.animate();
    }
		if (image){

			if (hover){
				if ((getFilePathExtension(image) === "svg")){
		      return (
		        <span onMouseEnter={self.enter} onMouseLeave={self.out} className={className} style={size} >

		          <span className="svg_icon_wrapper" style={ style } >
		            <Isvg src={image} className="isvg">
		              Here's some optional content for browsers that don't support XHR or inline
		              SVGs. You can use other React components here too. Here, I'll show you.

		            </Isvg>
		          </span>
		        </span>
		      )
		    } else {
		      return (
		        <span onMouseEnter={self.enter} onMouseLeave={self.out} className={className} style={size} >
		          <img src={image} width={width} height={ height } style={ style } />
		        </span>
		      )
		    }
			}

			if (loop){
				if ((getFilePathExtension(image) === "svg")){
					return (
						<span onMouseEnter={self.enterLoop} onMouseLeave={self.out} className={className} style={size} >

							<span className="svg_icon_wrapper loop" style={ style } >
								<Isvg src={image} className="isvg">
									Here's some optional content for browsers that don't support XHR or inline
									SVGs. You can use other React components here too. Here, I'll show you.

								</Isvg>
							</span>
						</span>
					)
				} else {
					return (
						<span onMouseEnter={self.enterLoop} onMouseLeave={self.out} className={className} style={size} >
							<img src={image} width={width} height={ height } style={ style } />
						</span>
					)
				}
			}

		} else {
				return (
					<h2>fuck you</h2>
				)
			}
	  }
});
