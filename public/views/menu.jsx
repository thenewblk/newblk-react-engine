var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function(){
    return { experiential: {}, handcrafted: {}, agency: {}, disruptiond: {}, superfans: {}};
  },
  componentDidMount: function(){
    var SVGMorpheus = require('../scripts/svg_morpheus.js');

    var experiential = new SVGMorpheus('svg.morph.experiential');
    experiential.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});

    var handcrafted = new SVGMorpheus('svg.morph.handcrafted');
    handcrafted.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});

    var agency = new SVGMorpheus('svg.morph.agency');
    agency.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});

    var disruption = new SVGMorpheus('svg.morph.disruption');
    disruption.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});

    // var superfans = new SVGMorpheus('svg.morph.superfans');
    // superfans.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});

    this.setState({ experiential: experiential, handcrafted: handcrafted, agency: agency, disruption: disruption });
  },
  experientialTwo: function(){
    console.log("experientialTwo");
    if (this.state.experiential){
      console.log(" to #two");
      this.state.experiential.to('two',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },
  experientialOne: function(){
    console.log("experientialOne");
    if (this.state.experiential){
      console.log(" to #one");
      this.state.experiential.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },
  handcraftedTwo: function(){
    console.log("handcraftedTwo");
    if (this.state.handcrafted){
      console.log(" to #two");
      this.state.handcrafted.to('two',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },
  handcraftedOne: function(){
    console.log("handcraftedOne");
    if (this.state.handcrafted){
      console.log(" to #one");
      this.state.handcrafted.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },

  agencyTwo: function(){
    console.log("agencyTwo");
    if (this.state.agency){
      console.log(" to #two");
      this.state.agency.to('two',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },
  agencyOne: function(){
    console.log("agencyOne");
    if (this.state.agency){
      console.log(" to #one");
      this.state.agency.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },

  disruptionTwo: function(){
    console.log("disruptionTwo");
    if (this.state.disruption){
      console.log(" to #two");
      this.state.disruption.to('two',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },
  disruptionOne: function(){
    console.log("disruptionOne");
    if (this.state.disruption){
      console.log(" to #one");
      this.state.disruption.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },

  superfansTwo: function(){
    console.log("superfansTwo");
    if (this.state.superfans){
      console.log(" to #two");
      this.state.superfans.to('two',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },
  superfansOne: function(){
    console.log("superfansOne");
    if (this.state.superfans){
      console.log(" to #one");
      this.state.superfans.to('one',{duration: 1200, easing: 'expo-out', rotation: 'none'});
    }
  },

  render: function render() {
    var none = {
      display: "none"
    };
    return (
        <div className="navigator">
          <Link className="new-blk-logo" to="/"><img className="icon" src="/icons/icon_BLKstar_black.svg" /></Link>
          <div className="items">
            <Link to="/channel/experiential" >
              <svg onMouseEnter={this.experientialTwo} onMouseLeave={this.experientialOne} className="icon morph experiential" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792" enable-background="new 0 0 612 792">
                <g id="one">
                	<path d="M447.6,569.7c-31.5,0-57.2,25.7-57.2,58.6c0,32.9,25.7,58.6,57.2,58.6s57.2-25.7,57.2-58.6
                		C504.8,595.5,480.4,569.7,447.6,569.7z M447.6,667c-21.4,0-37.2-17.2-37.2-38.6s17.2-38.6,37.2-38.6c21.4,0,37.2,17.2,37.2,38.6
                		S469,667,447.6,667z"/>
                	<path d="M167.3,569.7c-31.5,0-57.2,25.7-57.2,58.6c0,32.9,25.7,58.6,57.2,58.6s57.2-25.7,57.2-58.6
                		C224.5,595.5,200.2,569.7,167.3,569.7z M167.3,667c-21.4,0-37.2-17.2-37.2-38.6s17.2-38.6,37.2-38.6s37.2,17.2,37.2,38.6
                		S188.7,667,167.3,667z"/>
                	<path d="M307.4,222.3c31.5,0,57.2-25.7,57.2-58.6S340.3,105,307.4,105s-57.2,25.7-57.2,58.6S276,222.3,307.4,222.3z
                		 M307.4,125c21.4,0,37.2,17.2,37.2,38.6s-15.7,38.6-37.2,38.6c-21.4,0-37.2-17.2-37.2-38.6S287.4,125,307.4,125z"/>
                	<path d="M553.4,302.3c-31.5,0-57.2,25.7-57.2,58.6s25.7,58.6,57.2,58.6s57.2-25.7,57.2-58.6
                		S586.3,302.3,553.4,302.3z M553.4,399.6c-21.4,0-37.2-17.2-37.2-38.6c0-21.4,17.2-38.6,37.2-38.6c21.4,0,37.2,17.2,37.2,38.6
                		C592,382.4,574.8,399.6,553.4,399.6z"/>
                	<path d="M115.8,361c0-32.9-25.7-58.6-57.2-58.6S1.4,328.1,1.4,361s24.3,58.6,55.8,58.6S115.8,393.9,115.8,361z
                		 M20,361c0-21.4,17.2-38.6,37.2-38.6s37.2,17.2,37.2,38.6c0,21.4-17.2,38.6-37.2,38.6S20,382.4,20,361z"/>
                   <path d="M357.5,351c0-28.6-22.9-52.9-51.5-52.9s-51.5,22.9-51.5,52.9c0,18.6,10,35.7,24.3,44.3
                		c-14.3,5.7-24.3,18.6-24.3,35.7V504h103V431c0-15.7-10-30-24.3-35.7C347.5,386.7,357.5,369.5,357.5,351z"/>
                	<path d="M396.1,182.2c7.1,2.9,14.3,5.7,21.4,10c5.7,2.9,11.4,0,14.3-4.3c2.9-5.7,0-11.4-4.3-14.3
                		c-7.1-4.3-15.7-7.1-24.3-11.4h-1.4c-5.7-1.4-10,1.4-12.9,5.7C387.5,173.6,390.4,180.8,396.1,182.2z"/>
                	<path d="M471.9,229.4c4.3,4.3,11.4,4.3,14.3,0c4.3-4.3,4.3-11.4,0-14.3c-5.7-5.7-12.9-11.4-20-17.2
                		c-1.4-1.4-2.9-1.4-2.9-1.4c-4.3-1.4-8.6,0-11.4,4.3c-2.9,4.3-2.9,11.4,1.4,14.3C459,219.4,464.7,223.7,471.9,229.4z"/>
                	<path d="M513.3,279.5c2.9,4.3,10,5.7,14.3,2.9c4.3-2.9,5.7-10,2.9-14.3c-4.3-7.1-10-14.3-14.3-21.4
                		c-1.4-1.4-2.9-2.9-5.7-4.3c-2.9-1.4-7.1,0-8.6,1.4c-4.3,2.9-5.7,10-1.4,14.3C503.3,266.6,509,272.3,513.3,279.5z"/>
                	<path d="M213.1,162.2L213.1,162.2c-8.6,2.9-17.2,7.1-24.3,11.4c-5.7,2.9-7.1,8.6-4.3,14.3c2.9,5.7,8.6,7.1,14.3,4.3
                		c7.1-4.3,14.3-7.1,21.4-10c5.7-1.4,8.6-8.6,5.7-14.3C223.1,163.6,218.8,160.8,213.1,162.2z"/>
                	<path d="M144.4,229.4c5.7-5.7,12.9-10,18.6-15.7c4.3-2.9,5.7-10,1.4-14.3c-2.9-2.9-7.1-4.3-11.4-4.3
                		c-1.4,0-2.9,1.4-2.9,1.4c-7.1,5.7-14.3,11.4-20,17.2c-4.3,4.3-4.3,10,0,14.3C133,233.7,140.1,233.7,144.4,229.4z"/>
                	<path d="M88.7,282.3c4.3,2.9,11.4,1.4,14.3-2.9c4.3-7.1,8.6-12.9,14.3-20c2.9-4.3,2.9-11.4-1.4-14.3
                		c-2.9-1.4-7.1-2.9-10-1.4c-1.4,0-4.3,1.4-5.7,2.9c-5.7,7.1-10,14.3-14.3,21.4C82.9,273.7,84.4,279.5,88.7,282.3z"/>
                	<path d="M559.1,453.9c-1.4,0-4.3,0-5.7,0c-2.9,1.4-5.7,4.3-5.7,7.1c-1.4,7.1-2.9,15.7-5.7,22.9
                		c-1.4,5.7,1.4,11.4,7.1,12.9c5.7,1.4,11.4-1.4,12.9-7.1c2.9-8.6,4.3-17.2,5.7-25.7C567.7,461.1,564.8,455.3,559.1,453.9z"/>
                	<path d="M540.5,519.7c-2.9-1.4-5.7-1.4-8.6,0c-2.9,1.4-4.3,2.9-5.7,5.7c-2.9,7.1-7.1,14.3-11.4,21.4
                		c-2.9,4.3-1.4,11.4,4.3,14.3c4.3,2.9,11.4,1.4,14.3-4.3c4.3-7.1,8.6-15.7,12.9-22.9C549.1,528.3,546.2,522.5,540.5,519.7z"/>
                	<path d="M74.4,486.8c-2.9-7.1-4.3-15.7-5.7-22.9c0-4.3-2.9-7.1-5.7-7.1c-1.4-1.4-4.3-1.4-5.7,0
                		c-5.7,1.4-10,5.7-8.6,11.4c1.4,8.6,2.9,17.2,5.7,25.7c1.4,5.7,7.1,8.6,12.9,7.1C72.9,498.2,75.8,492.5,74.4,486.8z"/>
                	<path d="M88.7,525.4c-1.4-2.9-2.9-4.3-5.7-5.7c-2.9-1.4-5.7-1.4-8.6,0c-5.7,2.9-7.1,8.6-5.7,14.3
                		c4.3,8.6,7.1,15.7,12.9,22.9c2.9,4.3,10,7.1,14.3,4.3c4.3-2.9,7.1-10,4.3-14.3C95.8,539.7,92.9,532.6,88.7,525.4z"/>
                	<path d="M290.3,664.1c-8.6,0-15.7-1.4-24.3-2.9c-4.3,0-7.1,1.4-10,2.9c-1.4,1.4-2.9,2.9-2.9,5.7
                		c-1.4,5.7,2.9,11.4,8.6,11.4c8.6,1.4,17.2,2.9,25.7,2.9c5.7,0,11.4-4.3,11.4-10C300.3,668.4,296,664.1,290.3,664.1z"/>
                	<path d="M354.6,659.8c-7.1,1.4-15.7,2.9-24.3,4.3c-2.9,0-5.7,1.4-7.1,2.9c-1.4,1.4-2.9,5.7-2.9,8.6
                		c0,5.7,5.7,10,11.4,10c8.6-1.4,17.2-2.9,25.7-4.3c5.7-1.4,10-7.1,8.6-12.9C366.1,661.2,360.3,658.4,354.6,659.8z"/>
                </g>
                <g id="two" style={none}>
                	<path d="M447.6,569.7c-31.5,0-57.2,25.7-57.2,58.6c0,32.9,25.7,58.6,57.2,58.6s57.2-25.7,57.2-58.6
                		C504.8,595.5,480.4,569.7,447.6,569.7z M447.6,667c-21.4,0-37.2-17.2-37.2-38.6s17.2-38.6,37.2-38.6c21.4,0,37.2,17.2,37.2,38.6
                		C486.2,649.8,469,667,447.6,667z"/>
                	<path d="M167.3,569.7c-31.5,0-57.2,25.7-57.2,58.6c0,32.9,25.7,58.6,57.2,58.6s57.2-25.7,57.2-58.6
                		C224.5,595.5,200.2,569.7,167.3,569.7z M167.3,667c-21.4,0-37.2-17.2-37.2-38.6s17.2-38.6,37.2-38.6s37.2,17.2,37.2,38.6
                		C205.9,649.8,188.7,667,167.3,667z"/>
                	<path d="M307.4,222.3c31.5,0,57.2-25.7,57.2-58.6S340.3,105,307.4,105s-57.2,25.7-57.2,58.6S276,222.3,307.4,222.3z
                		 M307.4,125c21.4,0,37.2,17.2,37.2,38.6s-17.2,38.6-37.2,38.6c-20,0-37.2-17.2-37.2-38.6S287.4,125,307.4,125z"/>
                	<path d="M553.4,302.3c-31.5,0-57.2,25.7-57.2,58.6s25.7,58.6,57.2,58.6s57.2-25.7,57.2-58.6
                		S586.3,302.3,553.4,302.3z M553.4,399.6c-21.4,0-37.2-17.2-37.2-38.6c0-21.4,17.2-38.6,37.2-38.6c21.4,0,37.2,17.2,37.2,38.6
                		C592,382.4,574.8,399.6,553.4,399.6z"/>
                	<path d="M115.8,361c0-32.9-25.7-58.6-57.2-58.6S1.4,328.1,1.4,361s24.3,58.6,55.8,58.6S115.8,393.9,115.8,361z
                		 M20,361c0-21.4,17.2-38.6,37.2-38.6s37.2,17.2,37.2,38.6c0,21.4-17.2,38.6-37.2,38.6S20,382.4,20,361z"/>
                  <path d="M283.1,386.7v175.9h40v-31.5h34.3v-40h-32.9v-27.2h32.9v-40h-32.9v-37.2c21.4-8.6,37.2-30,37.2-54.3
                     	c0-32.9-25.7-58.6-58.6-58.6s-60.1,25.7-60.1,57.2C243.1,356.7,260.2,378.1,283.1,386.7z M301.7,302.3c15.7,0,28.6,12.9,28.6,28.6
                     	c0,15.7-12.9,28.6-28.6,28.6s-28.6-12.9-28.6-28.6S286,302.3,301.7,302.3z"/>
                   <path d="M396.1,182.2c7.1,2.9,14.3,5.7,21.4,10c5.7,2.9,11.4,0,14.3-4.3c2.9-5.7,0-11.4-4.3-14.3
                		c-7.1-4.3-15.7-7.1-24.3-11.4h-1.4c-5.7-1.4-10,1.4-12.9,5.7C387.5,173.6,390.4,180.8,396.1,182.2z"/>

                	<path d="M471.9,229.4c4.3,4.3,11.4,4.3,14.3,0c4.3-4.3,4.3-11.4,0-14.3c-5.7-5.7-12.9-11.4-20-17.2
                		c-1.4-1.4-2.9-1.4-2.9-1.4c-4.3-1.4-8.6,0-11.4,4.3c-2.9,4.3-2.9,11.4,1.4,14.3C459,219.4,464.7,223.7,471.9,229.4z"/>
                	<path d="M513.3,279.5c2.9,4.3,10,5.7,14.3,2.9c4.3-2.9,5.7-10,2.9-14.3c-4.3-7.1-10-14.3-14.3-21.4
                		c-1.4-1.4-2.9-2.9-5.7-4.3c-2.9-1.4-7.1,0-8.6,1.4c-4.3,2.9-5.7,10-1.4,14.3C503.3,266.6,509,272.3,513.3,279.5z"/>
                	<path d="M213.1,162.2L213.1,162.2c-8.6,2.9-17.2,7.1-24.3,11.4c-5.7,2.9-7.1,8.6-4.3,14.3c2.9,5.7,8.6,7.1,14.3,4.3
                		c7.1-4.3,14.3-7.1,21.4-10c5.7-1.4,8.6-8.6,5.7-14.3C223.1,163.6,218.8,160.8,213.1,162.2z"/>
                	<path d="M144.4,229.4c5.7-5.7,12.9-10,18.6-15.7c4.3-2.9,5.7-10,1.4-14.3c-2.9-2.9-7.1-4.3-11.4-4.3
                		c-1.4,0-2.9,1.4-2.9,1.4c-7.1,5.7-14.3,11.4-20,17.2c-4.3,4.3-4.3,10,0,14.3C133,233.7,140.1,233.7,144.4,229.4z"/>
                	<path d="M88.7,282.3c4.3,2.9,11.4,1.4,14.3-2.9c4.3-7.1,8.6-12.9,14.3-20c2.9-4.3,2.9-11.4-1.4-14.3
                		c-2.9-1.4-7.1-2.9-10-1.4c-1.4,0-4.3,1.4-5.7,2.9c-5.7,7.1-10,14.3-14.3,21.4C82.9,273.7,84.4,279.5,88.7,282.3z"/>
                	<path d="M559.1,453.9c-1.4,0-4.3,0-5.7,0c-2.9,1.4-5.7,4.3-5.7,7.1c-1.4,7.1-2.9,15.7-5.7,22.9
                		c-1.4,5.7,1.4,11.4,7.1,12.9c5.7,1.4,11.4-1.4,12.9-7.1c2.9-8.6,4.3-17.2,5.7-25.7C567.7,461.1,564.8,455.3,559.1,453.9z"/>
                	<path d="M540.5,519.7c-2.9-1.4-5.7-1.4-8.6,0c-2.9,1.4-4.3,2.9-5.7,5.7c-2.9,7.1-7.1,14.3-11.4,21.4
                		c-2.9,4.3-1.4,11.4,4.3,14.3c4.3,2.9,11.4,1.4,14.3-4.3c4.3-7.1,8.6-15.7,12.9-22.9C549.1,528.3,546.2,522.5,540.5,519.7z"/>
                	<path d="M74.4,486.8c-2.9-7.1-4.3-15.7-5.7-22.9c0-4.3-2.9-7.1-5.7-7.1c-1.4-1.4-4.3-1.4-5.7,0
                		c-5.7,1.4-10,5.7-8.6,11.4c1.4,8.6,2.9,17.2,5.7,25.7c1.4,5.7,7.1,8.6,12.9,7.1C72.9,498.2,75.8,492.5,74.4,486.8z"/>
                	<path d="M88.7,525.4c-1.4-2.9-2.9-4.3-5.7-5.7c-2.9-1.4-5.7-1.4-8.6,0c-5.7,2.9-7.1,8.6-5.7,14.3
                		c4.3,8.6,7.1,15.7,12.9,22.9c2.9,4.3,10,7.1,14.3,4.3c4.3-2.9,7.1-10,4.3-14.3C95.8,539.7,92.9,532.6,88.7,525.4z"/>
                	<path d="M290.3,664.1c-8.6,0-15.7-1.4-24.3-2.9c-4.3,0-7.1,1.4-10,2.9c-1.4,1.4-2.9,2.9-2.9,5.7
                		c-1.4,5.7,2.9,11.4,8.6,11.4c8.6,1.4,17.2,2.9,25.7,2.9c5.7,0,11.4-4.3,11.4-10C300.3,668.4,296,664.1,290.3,664.1z"/>
                	<path d="M354.6,659.8c-7.1,1.4-15.7,2.9-24.3,4.3c-2.9,0-5.7,1.4-7.1,2.9c-1.4,1.4-2.9,5.7-2.9,8.6
                		c0,5.7,5.7,10,11.4,10c8.6-1.4,17.2-2.9,25.7-4.3c5.7-1.4,10-7.1,8.6-12.9C366.1,661.2,360.3,658.4,354.6,659.8z"/>
              	</g>
              </svg>
              <span className="name">Experiential</span>
            </Link>
            <Link to="/channel/handcrafted" >
              <svg onMouseEnter={this.handcraftedTwo} onMouseLeave={this.handcraftedOne} className="icon morph handcrafted" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792" enable-background="new 0 0 612 792">
                <g id="one">
                  <path d="M413.8,50.2c0-13-5.6-26-14.9-35.3S376.6,0,363.6,0H248.4c-26,0-50.2,22.3-50.2,50.2V106l0,0v490.8h1.9
                  	c0,1.9,0,1.9,0,3.7l94.8,184.1c1.9,3.7,7.4,7.4,11.2,7.4l0,0c5.6,0,9.3-1.9,11.2-7.4l93-184.1c0-1.9,0-3.7,1.9-3.7l0,0V106l0,0
                  	L413.8,50.2z M330.2,704.6h-48.3l-50.2-96.7h146.9L330.2,704.6z M332,107.8h26v448.1h-26V107.8z M283.7,107.8v448.1h-26V107.8
                  	L283.7,107.8z M248.4,26h113.4c5.6,0,13,1.9,16.7,7.4c3.7,3.7,7.4,11.2,7.4,16.7v29.7H222.3V50.2C224.2,37.2,235.4,26,248.4,26z"/>
                </g>
                <g id="two" style={none}>
                  <path d="M268,613.9L268,613.9l70.5-484.1l0,0l7.4-55.6c3.7-27.8-14.8-53.8-42.7-57.5L191.9,0
                    c-27.8-3.7-53.8,16.7-57.5,42.7L127,98.3l0,0l-70.5,486h1.9c0,1.9,0,1.9,0,3.7l66.8,194.8c1.9,3.7,5.6,7.4,11.1,9.3l0,0h1.9
                    c3.7,0,7.4-1.9,11.1-5.6L268,619.5C268,615.8,268,615.8,268,613.9z M282.8,122.4l-63.1,443.3l-26-3.7l64.9-443.3L282.8,122.4z
                     M188.2,26l113.1,16.7c13,1.9,22.3,14.8,20.4,27.8l-3.7,29.7L156.7,76l3.7-29.7C162.3,33.4,175.2,24.1,188.2,26z M184.5,107.6
                    l26,3.7l-64.9,443.3l-26-3.7L184.5,107.6z M171.5,708.5l-48.2-7.4l-35.2-102l144.7,20.4L171.5,708.5z"/>
                  <path d="M366.3,762.3h-31.5c-7.4,0-13,5.6-13,13s5.6,13,13,13h31.5c7.4,0,13-5.6,13-13S373.7,762.3,366.3,762.3z"/>
                  <path d="M455.3,762.3h-31.5c-7.4,0-13,5.6-13,13s5.6,13,13,13h31.5c7.4,0,13-5.6,13-13S462.7,762.3,455.3,762.3z"/>
                  <path d="M542.5,762.3H511c-7.4,0-13,5.6-13,13s5.6,13,13,13h31.5c7.4,0,13-5.6,13-13S549.9,762.3,542.5,762.3z"/>
                  <path d="M279.1,762.3h-31.5c-7.4,0-13,5.6-13,13s5.6,13,13,13h31.5c7.4,0,13-5.6,13-13S286.5,762.3,279.1,762.3z"/>
                </g>
              </svg>
              <span className="name">Handcrafted</span>
            </Link>
            <Link to="/agency" >
              <svg onMouseEnter={this.agencyTwo} onMouseLeave={this.agencyOne} className="icon morph agency" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792" enable-background="new 0 0 612 792">
                <g id="one">
                   <path d="M612,162.8c0-2.8-1.4-5.7-4.2-7.1c0,0-9.9-4.2-22.6-4.2c-8.5,0-15.5,1.4-21.2,5.7c-4.2,2.8-9.9,2.8-15.5,2.8
                 	c-8.5,0-15.5-2.8-21.2-4.2c4.2-2.8,5.7-8.5,5.7-14.1c0-9.9-8.5-19.8-18.4-19.8c-9.9,0-18.4,8.5-18.4,19.8c0,7.1,4.2,12.7,9.9,17
                 	v118.7h-19.8c-5.7,0-9.9,4.2-9.9,9.9v12.7h-55.1c-4.2-12.7-17-22.6-31.1-22.6c-1.4,0-2.8,0-5.7,0l-56.5-63.6
                 	c2.8-4.2,4.2-9.9,4.2-15.5c0-9.9-4.2-18.4-11.3-24c1.4-18.4,7.1-26.9,12.7-31.1c15.5-14.1,29.7-7.1,29.7-7.1
                 	c2.8-14.1-12.7-25.4-32.5-15.5c-18.4,8.5-25.4,31.1-25.4,42.4v4.2c-1.4,0-2.8,0-4.2,0c-1.4,0-4.2,0-5.7,0v-4.2
                 	c0-11.3-8.5-33.9-25.4-42.4c-19.8-9.9-33.9,1.4-32.5,15.5c0,0,14.1-7.1,29.7,7.1c5.7,4.2,11.3,14.1,12.7,32.5
                 	c-5.7,5.7-9.9,14.1-9.9,24c0,5.7,1.4,11.3,4.2,15.5l-56.5,63.6c-1.4,0-2.8,0-5.7,0c-14.1,0-26.9,9.9-31.1,22.6h-66.4V290
                 	c7.1-4.2,11.3-11.3,11.3-19.8v-12.7l0,0v-60.8c5.7-1.4,8.5,0,9.9-1.4c4.2,0,7.1-2.8,7.1-7.1s-2.8-7.1-7.1-7.1
                 	c-11.3,0-29.7,2.8-43.8,14.1c-4.2-4.2-8.5-17-9.9-28.3c4.2-2.8,7.1-8.5,7.1-15.5c0-9.9-8.5-19.8-18.4-19.8s-18.4,9.9-18.4,19.8
                 	c0,5.7,2.8,11.3,7.1,15.5c0,11.3-5.7,22.6-8.5,28.3C36.7,184,18.4,181.2,7.1,181.2c-4.2,0-7.1,4.2-7.1,8.5s2.8,7.1,7.1,7.1
                 	c0,0,4.2,0,9.9,1.4v59.4l0,0v11.3c0,8.5,4.2,15.5,9.9,19.8v33.9c0,5.7,4.2,9.9,9.9,9.9l0,0V608h-9.9c-5.7,0-9.9,4.2-9.9,9.9v49.5
                 	c0,5.7,4.2,9.9,9.9,9.9h535.7c5.7,0,9.9-4.2,9.9-9.9v-49.5c0-5.7-4.2-9.9-9.9-9.9h-9.9V331l0,0c5.7,0,9.9-4.2,9.9-9.9v-35.3
                 	c0-5.7-4.2-9.9-9.9-9.9h-28.3v-53.7c4.2,1.4,9.9,1.4,15.5,1.4c9.9,0,18.4-1.4,25.4-4.2c8.5-2.8,14.1-4.2,21.2-4.2
                 	c9.9,0,15.5,2.8,15.5,2.8c2.8,1.4,5.7,1.4,7.1,0c2.8-1.4,4.2-4.2,4.2-5.7L612,162.8z M506,415.8L506,415.8L506,415.8v-79.2h26.9v270
                 	H506V415.8z M486.2,483.6c-43.8-63.6-113.1-101.8-188-101.8c-77.7,0-149.8,42.4-193.6,111.7v-63.6l83.4-93.3
                 	c5.7,4.2,12.7,7.1,19.8,7.1c14.1,0,26.9-9.9,31.1-22.6h118.7c4.2,12.7,17,22.6,31.1,22.6c7.1,0,14.1-2.8,19.8-7.1l77.7,86.2V483.6z
                 	 M284.1,227.8c4.2,2.8,9.9,4.2,14.1,4.2c5.7,0,9.9-1.4,14.1-4.2l52.3,59.4c-2.8,4.2-5.7,8.5-7.1,12.7H238.9
                 	c-1.4-4.2-4.2-9.9-7.1-12.7L284.1,227.8z M401.4,309.8c0,7.1-5.7,12.7-12.7,12.7c-7.1,0-12.7-5.7-12.7-12.7s5.7-12.7,12.7-12.7
                 	C395.8,297.1,401.4,302.7,401.4,309.8z M310.9,198.1c0,7.1-5.7,12.7-12.7,12.7c-7.1,0-12.7-5.7-12.7-12.7c0-7.1,5.7-12.7,12.7-12.7
                 	C305.3,185.4,310.9,191.1,310.9,198.1z M207.8,297.1c7.1,0,12.7,5.7,12.7,12.7s-5.7,12.7-12.7,12.7c-7.1,0-12.7-5.7-12.7-12.7
                 	S200.7,297.1,207.8,297.1z M32.5,271.6h77.7c-1.4,2.8-2.8,4.2-5.7,5.7l0,0H38.2l0,0C35.3,275.9,33.9,274.4,32.5,271.6z M70.7,219.3
                 	l-7.1-15.5c1.4-4.2,4.2-11.3,7.1-18.4c2.8,8.5,5.7,14.1,7.1,18.4L70.7,219.3z M67.8,234.9h8.5c1.4,1.4,1.4,2.8,1.4,4.2
                 	c0,2.8-2.8,5.7-5.7,5.7c-2.8,0-5.7-2.8-5.7-5.7C66.4,237.7,66.4,236.3,67.8,234.9z M48.1,297.1h48.1v15.5H48.1V297.1z M110.2,201
                 	v56.5H80.6c7.1-2.8,11.3-9.9,11.3-18.4c0-4.2-1.4-8.5-4.2-12.7C90.5,212.3,100.4,205.2,110.2,201z M70.7,147.2
                 	c2.8,0,4.2,1.4,4.2,4.2c0,2.8-1.4,4.2-4.2,4.2s-4.2-1.4-4.2-4.2C66.4,148.7,67.8,147.2,70.7,147.2z M55.1,226.4
                 	c-2.8,4.2-4.2,8.5-4.2,12.7c0,8.5,4.2,14.1,11.3,18.4H32.5V201C42.4,205.2,52.3,212.3,55.1,226.4z M104.6,331c5.7,0,9.9-4.2,9.9-9.9
                 	v-2.8h60.8l-70.7,79.2L104.6,331L104.6,331z M84.8,333.8v271.4H57.9V333.8H84.8z M552.6,656.1H36.7v-29.7h515.9V656.1z M154.1,606.6
                 	c12.7-74.9,73.5-130,144.2-130s130,55.1,144.2,130H154.1z M462.2,606.6c-14.1-86.2-83.4-149.8-164-149.8s-149.8,63.6-164,149.8
                 	h-29.7v-73.5c0-1.4,1.4-1.4,1.4-2.8s1.4-1.4,2.8-4.2c38.2-77.7,110.2-125.8,190.8-125.8c77.7,0,149.8,46.6,188,120.1v84.8h-25.4
                 	V606.6z M486.2,391.8l-65-72.1h53.7v2.8c0,5.7,4.2,9.9,9.9,9.9l0,0v59.4H486.2z M542.7,311.2h-48.1v-15.5h48.1V311.2z M562.5,205.2
                 	c-5.7,2.8-12.7,4.2-21.2,4.2c-7.1,0-12.7-1.4-15.5-1.4v-38.2c11.3,4.2,31.1,5.7,45.2-1.4c4.2-2.8,9.9-2.8,15.5-2.8
                 	c5.7,0,9.9,1.4,12.7,1.4v35.3C589.4,199.5,575.3,201,562.5,205.2z"/>
                 </g>
                <g id="two" style={none}>
              		<path d="M612,130.3c0-2.8-1.4-5.7-4.2-7.1c0,0-9.9-4.2-22.6-4.2c-8.5,0-15.5,1.4-21.2,5.7
              			c-4.2,2.8-9.9,2.8-15.5,2.8c-8.5,0-15.5-2.8-21.2-4.2c4.2-2.8,5.7-8.5,5.7-14.1c0-9.9-8.5-19.8-18.4-19.8
              			c-9.9,0-18.4,8.5-18.4,19.8c0,7.1,4.2,12.7,9.9,17v176.7h-19.8c-5.7,0-9.9,4.2-9.9,9.9v12.7h-55.1c-4.2-12.7-17-22.6-31.1-22.6
              			c-1.4,0-2.8,0-5.7,0l-56.5-63.6c2.8-4.2,4.2-9.9,4.2-15.5c0-9.9-4.2-18.4-11.3-24c1.4-18.4,7.1-26.9,12.7-31.1
              			c15.5-14.1,29.7-7.1,29.7-7.1c2.8-14.1-12.7-25.4-32.5-15.5c-18.4,8.5-25.4,31.1-25.4,42.4v4.2c-1.4,0-2.8,0-4.2,0
              			c-1.4,0-4.2,0-5.7,0v-4.2c0-11.3-8.5-33.9-25.4-42.4c-19.8-9.9-33.9,1.4-32.5,15.5c0,0,14.1-7.1,29.7,7.1
              			c5.7,4.2,11.3,14.1,12.7,32.5c-5.7,5.7-9.9,14.1-9.9,24c0,5.7,1.4,11.3,4.2,15.5l-56.5,63.6c-1.4,0-2.8,0-5.7,0
              			c-14.1,0-26.9,9.9-31.1,22.6h-66.4v-11.3c7.1-4.2,11.3-11.3,11.3-19.8v-11.3l0,0v-62.2c5.7-1.4,8.5,0,9.9-1.4
              			c4.2,0,7.1-2.8,7.1-7.1c0-4.2-2.8-7.1-7.1-7.1c-11.3,0-29.7,2.8-43.8,14.1c-4.2-4.2-8.5-17-9.9-28.3c4.2-2.8,7.1-8.5,7.1-15.5
              			c0-9.9-8.5-19.8-18.4-19.8s-18.4,9.9-18.4,19.8c0,5.7,2.8,11.3,7.1,15.5c0,11.3-5.7,22.6-8.5,28.3c-14.1-11.3-32.5-14.1-43.8-14.1
              			c-4.2,0-7.1,4.2-7.1,7.1c0,4.2,2.8,8.5,7.1,8.5c0,0,4.2,0,9.9,1.4v60.8l0,0v11.3c0,8.5,4.2,15.5,9.9,19.8v33.9
              			c0,5.7,4.2,9.9,9.9,9.9l0,0v275.6h-9.9c-5.7,0-9.9,4.2-9.9,9.9v49.5c0,5.7,4.2,9.9,9.9,9.9h535.7c5.7,0,9.9-4.2,9.9-9.9v-52.3
              			c0-5.7-4.2-9.9-9.9-9.9h-9.9V356.4l0,0c5.7,0,9.9-4.2,9.9-9.9v-35.3c0-5.7-4.2-9.9-9.9-9.9h-28.3V189.6c4.2,1.4,9.9,1.4,15.5,1.4
              			c9.9,0,18.4-1.4,25.4-4.2s12.7-4.2,18.4-4.2c9.9,0,15.5,2.8,15.5,2.8c2.8,1.4,5.7,1.4,7.1,0c2.8-1.4,4.2-4.2,4.2-5.7L612,130.3z
              			 M506,441.2L506,441.2L506,441.2v-79.2h26.9v270H506V441.2z M486.2,509.1c-43.8-63.6-113.1-101.8-188-101.8
              			c-77.7,0-149.8,42.4-193.6,110.2v-63.6l83.4-93.3c5.7,4.2,12.7,7.1,19.8,7.1c14.1,0,26.9-9.9,31.1-22.6h118.7
              			c4.2,12.7,17,22.6,31.1,22.6c7.1,0,14.1-2.8,19.8-7.1l77.7,86.2V509.1z M284.1,253.2c4.2,2.8,9.9,4.2,14.1,4.2
              			c5.7,0,9.9-1.4,14.1-4.2l52.3,59.4c-2.8,4.2-5.7,8.5-7.1,12.7H238.9c-1.4-4.2-4.2-9.9-7.1-12.7L284.1,253.2z M401.4,335.2
              			c0,7.1-5.7,12.7-12.7,12.7c-7.1,0-12.7-5.7-12.7-12.7c0-7.1,5.7-12.7,12.7-12.7C395.8,322.5,401.4,328.2,401.4,335.2z M310.9,223.6
              			c0,7.1-5.7,12.7-12.7,12.7c-7.1,0-12.7-5.7-12.7-12.7s5.7-12.7,12.7-12.7C305.3,210.8,310.9,216.5,310.9,223.6z M207.8,321.1
              			c7.1,0,12.7,5.7,12.7,12.7s-5.7,12.7-12.7,12.7c-7.1,0-12.7-5.7-12.7-12.7S200.7,321.1,207.8,321.1z M32.5,297.1h77.7
              			c-1.4,2.8-2.8,4.2-5.7,5.7l0,0H38.2l0,0C35.3,301.3,33.9,299.9,32.5,297.1z M70.7,244.8l-7.1-17c1.4-2.8,4.2-9.9,7.1-17
              			c2.8,8.5,5.7,14.1,7.1,18.4L70.7,244.8z M67.8,260.3h8.5c1.4,1.4,1.4,2.8,1.4,4.2c0,2.8-2.8,5.7-5.7,5.7c-2.8,0-5.7-2.8-5.7-5.7
              			C66.4,263.1,66.4,261.7,67.8,260.3z M48.1,322.5h48.1v15.5H48.1V322.5z M110.2,226.4v56.5H80.6c7.1-2.8,11.3-9.9,11.3-18.4
              			c0-4.2-1.4-8.5-4.2-12.7C90.5,237.7,100.4,230.6,110.2,226.4z M70.7,172.7c2.8,0,4.2,1.4,4.2,4.2c0,2.8-1.4,4.2-4.2,4.2
              			s-4.2-1.4-4.2-4.2S67.8,172.7,70.7,172.7z M55.1,251.8c-2.8,2.8-4.2,7.1-4.2,12.7c0,8.5,4.2,14.1,11.3,18.4H32.5v-56.5
              			C42.4,230.6,52.3,237.7,55.1,251.8z M104.6,356.4c5.7,0,9.9-4.2,9.9-9.9v-1.4h60.8l-70.7,79.2L104.6,356.4L104.6,356.4z
              			 M84.8,359.3v271.4H57.9V359.3H84.8z M552.6,681.5H36.7v-29.7h515.9V681.5z M154.1,632c12.7-74.9,73.5-130,144.2-130
              			s130,55.1,144.2,130H154.1z M462.2,632c-14.1-86.2-83.4-149.8-164-149.8s-149.8,63.6-164,149.8h-29.7v-73.5c0-1.4,1.4-1.4,1.4-2.8
              			s1.4-1.4,2.8-4.2c38.2-77.7,110.2-125.8,190.8-125.8c77.7,0,149.8,46.6,188,120.1v84.8h-25.4V632z M486.2,417.2l-65-72.1h53.7v2.8
              			c0,5.7,4.2,9.9,9.9,9.9l0,0v59.4H486.2z M542.7,336.6h-48.1v-15.5h48.1V336.6z M562.5,174.1c-5.7,2.8-12.7,4.2-21.2,4.2
              			c-7.1,0-12.7-1.4-15.5-1.4v-38.2c11.3,4.2,31.1,5.7,45.2-1.4c2.8-2.8,8.5-4.2,14.1-4.2c5.7,0,9.9,1.4,12.7,1.4v35.3
              			C589.4,168.4,575.3,168.4,562.5,174.1z"/>
              		<ellipse cx="298.2" cy="119" rx="26.9" ry="26.9"/>
              	</g>
              </svg>
            <span className="name">Agency</span></Link>
            <Link to="/channel/disruption" >
              <svg onMouseEnter={this.disruptionTwo} onMouseLeave={this.disruptionOne} className="icon morph disruption" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 612 792" enable-background="new 0 0 612 792">
                <g id="one">
                  <path d="M449.9,148.7c-3.9-3.9-9.7-5.8-15.5-7.7c-3.9-9.7-9.7-19.3-17.4-27c-11.6-11.6-25.1-17.4-40.6-19.3v-5.8
                    c0-11.6-5.8-21.2-13.5-21.2h-19.3V-1.9L266.4,0v69.5h-19.3h-1.9c-5.8,1.9-9.7,9.7-9.7,21.2v5.8c-3.9,0-5.8,0-9.7,0
                    c-21.2,7.7-38.6,23.2-46.4,44.4c-13.5,1.9-25.1,13.5-25.1,27v602.7c0,3.9,1.9,7.7,3.9,9.7c1.9,1.9,3.9,3.9,7.7,3.9
                    c0,0,0,1.9,1.9,1.9c3.9,3.9,9.7,5.8,15.5,5.8h247.3c1.9,0,3.9,0,5.8,0c3.9-1.9,7.7-3.9,9.7-7.7h1.9c5.8-1.9,9.7-7.7,9.7-13.5V168.1
                    C457.6,160.3,453.8,154.5,449.9,148.7z M181.4,179.6v-3.9h245.3h1.9v542.8H293.4h-114L181.4,179.6z M430.6,757.2H181.4v-27h249.2
                    V757.2z"/>
                  <path d="M393.9,396c1.9-1.9,1.9-5.8,0-7.7c-1.9-1.9-3.9-3.9-5.8-3.9h-46.4l32.8-92.7c0-1.9,0-3.9,0-5.8
                    c-1.9-1.9-3.9-3.9-5.8-3.9h-69.5c-1.9,0-5.8,1.9-5.8,3.9L223.9,454c0,1.9,0,3.9,0,5.8c3.9,3.9,5.8,5.8,7.7,5.8h40.6l-44.4,152.6
                    c-1.9,3.9,0,7.7,3.9,7.7c1.9,0,3.9,0,5.8,0c1.9,0,3.9-1.9,3.9-1.9L393.9,396z"/>
                 </g>
                <g id="two" style={none}>
                  <path d="M270.1,353.3l-44.3,64.1l35.1,9.2c1.5,0,3.1,1.5,4.6,4.6c0,1.5,0,4.6-1.5,6.1L96.1,576.1
                		c-1.5,1.5-3.1,1.5-3.1,1.5c-1.5,0-3.1,0-3.1-1.5c-1.5-1.5-3.1-4.6-1.5-7.6l67.2-106.8l-32-9.2c-1.5,0-3.1-1.5-3.1-3.1
                		s0-3.1,1.5-4.6l88.5-112.9c1.5-1.5,3.1-3.1,6.1-1.5l51.9,13.7c1.5,0,3.1,1.5,3.1,3.1C271.7,348.7,271.7,351.7,270.1,353.3z"/>
                	<path d="M558.6,177.8h-12.2c-6.1,0-10.7,4.6-12.2,10.7c-1.5,6.1,4.6,10.7,10.7,12.2h12.2l0,0
                		c6.1,0,10.7-4.6,10.7-10.7C569.3,183.9,564.7,179.3,558.6,177.8z"/>
                	<path d="M500.6,176.2l-25.9-1.5c-6.1,0-10.7,4.6-12.2,10.7c-1.5,6.1,4.6,10.7,10.7,12.2l25.9,1.5l0,0
                		c6.1,0,10.7-4.6,10.7-10.7C511.3,180.8,506.7,176.2,150.6,176.2z"/>
                	<path d="M428.9,171.7l-25.9-1.5c-6.1,0-10.7,4.6-12.2,10.7s4.6,10.7,10.7,12.2l25.9,1.5l0,0
                		c6.1,0,10.7-4.6,10.7-10.7C439.5,177.8,435,171.7,428.9,171.7z"/>
                	<path d="M401.4,104.5c1.5,0,3.1,0,4.6,0l24.4-9.2c6.1-1.5,9.2-9.2,6.1-13.7c-1.5-6.1-9.2-9.2-13.7-6.1l-25.9,7.6
                		c-6.1,1.5-9.2,9.2-6.1,13.7C392.2,101.4,396.8,104.5,401.4,104.5z"/>
                	<path d="M468.5,78.6c1.5,0,3.1,0,4.6,0l24.4-9.2c6.1-3.1,9.2-10.7,6.1-15.3c-1.5-6.1-9.2-9.2-13.7-6.1l-24.4,9.2
                		c-6.1,1.5-9.2,9.2-6.1,13.7C459.4,75.5,464,78.6,468.5,78.6z"/>
                	<path d="M346.4,125.9c1.5,0,3.1,0,4.6,0l12.2-4.6c6.1-1.5,9.2-9.2,6.1-13.7c-1.5-6.1-9.2-9.2-13.7-6.1l-12.2,4.6
                		c-6.1,1.5-9.2,9.2-6.1,13.7C337.3,122.8,341.9,125.9,346.4,125.9z"/>
                	<path d="M541.8,106c-1.5-6.1-7.6-9.2-13.7-7.6l-25.9,6.1c-6.1,1.5-9.2,7.6-7.6,13.7c1.5,4.6,6.1,9.2,10.7,9.2
                		c1.5,0,1.5,0,3.1,0l25.9-6.1C538.7,118.2,543.3,112.1,541.8,106z"/>
                	<path d="M399.9,139.6c-1.5-6.1-7.6-9.2-13.7-7.6l-24.4,6.1c-6.1,1.5-9.2,7.6-7.6,13.7c1.5,4.6,6.1,9.2,10.7,9.2
                		c1.5,0,1.5,0,3.1,0l24.4-7.6C398.3,151.8,401.4,145.7,399.9,139.6z"/>
                	<path d="M612,89.2c-1.5-6.1-7.6-9.2-13.7-7.6l-25.9,6.1c-6.1,1.5-9.2,7.6-7.6,13.7c1.5,4.6,6.1,9.2,10.7,9.2
                		c1.5,0,1.5,0,3.1,0l25.9-6.1C608.9,101.4,613.5,95.3,612,89.2z"/>
                	<path d="M470.1,122.8c-1.5-6.1-7.6-9.2-13.7-7.6l-25.9,6.1c-6.1,1.5-9.2,7.6-7.6,13.7c1.5,4.6,6.1,9.2,10.7,9.2
                		c1.5,0,1.5,0,3.1,0l25.9-6.1C468.5,135,471.6,128.9,470.1,122.8z"/>
                	<path d="M355.6,260.2c-3.1-4.6-6.1-7.6-10.7-9.2c0-7.6-3.1-16.8-7.6-22.9c-6.1-10.7-15.3-18.3-25.9-22.9l1.5-4.6
                		c3.1-9.2,0-16.8-6.1-18.3l-15.3-4.6l15.3-53.4l-58-15.3l-15.3,53.4l-15.3-4.6h-1.5c-6.1,0-10.7,4.6-12.2,13.7l-1.5,4.6
                		c-3.1,0-4.6,0-7.6,0c-18.3,0-35.1,9.2-45.8,22.9c-10.7-1.5-21.4,4.6-24.4,15.3L0,670.7c0,3.1,0,6.1,1.5,7.6s3.1,3.1,4.6,4.6v1.5
                		c1.5,4.6,6.1,6.1,10.7,7.6L206,744c1.5,0,3.1,0,4.6,0c3.1,0,6.1-1.5,9.2-3.1h1.5c4.6,0,9.2-3.1,10.7-7.6l126.7-457.9
                		C360.2,270.9,358.7,264.7,355.6,260.2z M24.4,666.1l5.8-18.9l189.1,52.4l-5.7,20L24.4,666.1z M221.3,689l-0.2,0L32,635.6l112.9-409
                		l1.5-3.1l187.7,51.9h1.5L221.3,689z"/>
                	<path d="M267.1,344.1l-51.9-13.7c-1.5,0-4.6,0-6.1,1.5l-88.5,112.9c-1.5,1.5-1.5,3.1-1.5,4.6s1.5,3.1,3.1,3.1
                		l32,9.2L87,568.5c-1.5,3.1-1.5,4.6,1.5,7.6c1.5,1.5,3.1,1.5,3.1,1.5c1.5,0,3.1,0,3.1-1.5L261,435.7c1.5-1.5,1.5-3.1,1.5-6.1
                		c0-1.5-1.5-3.1-4.6-4.6l-35.1-9.2l44.3-64.1c1.5-1.5,1.5-3.1,0-4.6C265.6,345.6,268.6,345.6,267.1,344.1z"/>
                </g>
              </svg>
              <span className="name">DISRUPTION</span>
            </Link>
            <Link to="/channel/superfans" >
              <svg className="icon morph" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-1263.1 158.4 757.3 468.1" enable-background="new -1263.1 158.4 757.3 468.1">
                <g id="one">
                  <polygon points="-1263.1,451.8 -1239,554 -1177.6,552.2 -1209.2,427.6 	"/>
                	<path d="M-506.5,485.2l-72.5-303c-3.7-18.6-26-29.7-42.8-20.5l-552.2,251l35.3,137.6l102.3-3.7l7.4,63.2
                		c1.9,9.3,9.3,16.7,18.6,16.7l0,0L-843,621c5.6,0,9.3-1.9,13-5.6s5.6-9.3,3.7-14.9l-7.4-61.4l295.6-13
                		C-515.7,524.3-502.7,505.7-506.5,485.2z M-993.5,587.5l-3.7-40.9l130.1-5.6l3.7,40.9L-993.5,587.5z"/>
                </g>
              </svg>

              <span className="name">Superfans</span>
            </Link>
          </div>
        </div>
    );
  }
});
