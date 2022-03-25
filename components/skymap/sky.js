import React, { Component } from "react";
import celestial from 'd3-celestial';
import d3 from 'd3';
let Celestial = celestial.Celestial();

class Sema extends Component {
  constructor(props){
    super(props);
    this.state = {
      lon: 0, 
      lat: 0,
      year: 0, 
      month: 0, 
      day: 0, 
      hour: 0, 
      minute: 0
    }
  }
  componentDidMount = async () => {
    await this.setState({
      lon: this.props.lon, 
      lat: this.props.lat,
      year: this.props.year, 
      month: this.props.month, 
      day: this.props.day, 
      hour: this.props.hour, 
      minute: this.props.minute
    })
    var config = {
      width: 0,
      projection: "aitoff", 
      projectionRatio: null, 
      transform: "equatorial",
      center: null,
                         
      orientationfixed: true,  
      background: { fill: "#000000", stroke: "#000000", opacity: 1 },
      adaptable: true,  
      interactive: true,
      disableAnimations: false,
      form: false,    
      location: false,
      controls: false,
      lang: "",       
                      
      container: "celestial-map",
      datapath: "../data/",
      stars: {
        show: true,  
        limit: 6,    
        colors: true,
        style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
        names: false,
        proper: true,
        desig: false,
        namelimit: 2.5, 
        namestyle: { fill: "#ddddbb", font: "11px Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
        propernamestyle: { fill: "#ddddbb", font: "11px Georgia, Times, 'Times Roman', serif", align: "right", baseline: "bottom" },
        propernamelimit: 1.5,
        size: 7,
        exponent: -0.28,
        data: 'stars.6.json' 
        //data: 'stars.8.json
      },
      dsos: {
        show: false, 
        limit: 6,    
        names: false,
        desig: false,
        namelimit: 4,
        namestyle: { fill: "#cccccc", font: "11px Helvetica, Arial, serif", align: "left", baseline: "top" },
        size: null,   
        exponent: 1.4,
        data: 'dsos.bright.json', 
        //data: 'dsos.6.json'  // Alternative broader data source for DSOs
        //data: 'dsos.14.json' // Alternative deeper data source for DSOs
        symbols: {  //DSO symbol styles
          gg: {shape: "circle", fill: "#ff0000"},                               
          g:  {shape: "ellipse", fill: "#ff0000"},                              
          s:  {shape: "ellipse", fill: "#ff0000"},                              
          s0: {shape: "ellipse", fill: "#ff0000"},                              
          sd: {shape: "ellipse", fill: "#ff0000"},                              
          e:  {shape: "ellipse", fill: "#ff0000"},                              
          i:  {shape: "ellipse", fill: "#ff0000"},                              
          oc: {shape: "circle", fill: "#ffcc00", stroke: "#ffcc00", width: 1.5},
          gc: {shape: "circle", fill: "#ff9900"},                               
          en: {shape: "square", fill: "#ff00cc"},                               
          bn: {shape: "square", fill: "#ff00cc", stroke: "#ff00cc", width: 2},  
          sfr:{shape: "square", fill: "#cc00ff", stroke: "#cc00ff", width: 2},  
          rn: {shape: "square", fill: "#00ooff"},                               
          pn: {shape: "diamond", fill: "#00cccc"},                              
          snr:{shape: "diamond", fill: "#ff00cc"},                              
          dn: {shape: "square", fill: "#999999", stroke: "#999999", width: 2},  
          pos:{shape: "marker", fill: "#cccccc", stroke: "#cccccc", width: 1.5} 
        }
      },
      mw: {
        show: false, 
        style: { fill: "#ffffff", opacity: "0.15" }
      },
      constellations: {
        show: false,
        names: true,
        desig: true,
        namestyle: { fill:"#cccc99", align: "center", baseline: "middle", opacity:0.8,
                     font: ["10px",
                            "8px", 
                            "6px"]},
        lines: true, 
        linestyle: { stroke: "#cccccc", width: 1, opacity: 0.6 },
        bounds: false,
        boundstyle: { stroke: "#cccc00", width: 0.5, opacity: 0.8, dash: [2, 4] }
      },
      lines: {
        graticule: { show: true, stroke: "#cccccc", width: 0.3, opacity: 0.5, 
          lon: {pos: ["center"], fill: "#eee", font: "6px"},
          lat: {pos: ["center"], fill: "#eee", font: "6px"}},
        equatorial: { show: true, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 },   
        ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 },    
        galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },    
        supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 }
    }};
    
    Celestial.display(config);
    Celestial.skyview({
      "location": [this.state.lon, this.state.lat], 
      "date": new Date(Date.UTC(this.state.year, this.state.month, this.state.day, this.state.hour, this.state.minute))
    });

  }
  render() {
    return (
      <>
        <div id="celestial-map"></div>
      </>
    );
  }
}

export default Sema;
