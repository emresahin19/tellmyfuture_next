import React, { Component } from 'react';
import buildChart from './build/astrochart.js';
import {
  calHouseCusp2
} 
from "./calculate/cuspcal.js";

import {
  calPlanetPosition2
}
from "./calculate/hekichan.js";
import Birthday from './whathappened.js';

class Calculate extends Component {
  constructor(props){
    super(props);
  
    this.state = {
        chart: false,
    }
  }

  handleSubmit = async (e) => {
    var planetPosition = new Array(),
        cuspLongitudes = new Array(),
        days_of_month = this.props.state.daysofmonths,
        theYear = this.props.state.year, 
        theMonth = this.props.state.month + 1, 
        theDay = this.props.state.day, 
        theHour = this.props.state.hour, 
        theMinute = this.props.state.minute, 
        theLongitude = this.props.state.longitude, 
        theLatitude = this.props.state.latitude;
    var colors = {
      water: '#0F5E9C', 
      earth: '#70483c', 
      fire: '#d60000', 
      air: '#AAE2F5',
      background: '#5a438a66',
      cusps: '#000',
      axis: '#ddd',
      line: '#000',
      circle: '#333',
      sign: '#000',
      points: '#000',
    }
    if(theHour < 6){
      theHour = theHour + 18;
      if(theDay == 1){
        if(theMonth == 1){
          theDay = 31;
          theMonth = 12;
          theYear = theYear - 1;
        }
        else {
          theMonth = theMonth - 1;
          theDay = days_of_month[theMonth-1];
        }
      }
      else {
        theDay = theDay - 1; 
      }
    }
    else {
      theHour = theHour - 6;
    }
    await this.setState({
      chart: true,
    });
    planetPosition = calPlanetPosition2( theYear, theMonth, theDay, theHour, theMinute, theLongitude, theLatitude) ;
    cuspLongitudes = calHouseCusp2( theYear, theMonth, theDay, theHour, theMinute, theLongitude, theLatitude, 1 );

    var data = {
      "planets":{
        "Lilith":[planetPosition[12]],
        "Chiron":[planetPosition[0]],
        "Pluto":[planetPosition[10]],
        "Neptune":[planetPosition[9], planetPosition[13]],
        "Uranus":[planetPosition[8]],
        "Saturn":[planetPosition[7], planetPosition[14]],
        "Jupiter":[planetPosition[6]],
        "Mars":[planetPosition[5]],
        "Moon":[planetPosition[2]],
        "Sun":[planetPosition[1]],
        "Mercury":[planetPosition[3]],
        "Venus":[planetPosition[4]],
        "NNode":[planetPosition[11]]
      },
      "cusps":[
        cuspLongitudes[1], 
        cuspLongitudes[2],
        cuspLongitudes[3], 
        cuspLongitudes[4], 
        cuspLongitudes[5], 
        cuspLongitudes[6], 
        cuspLongitudes[7], 
        cuspLongitudes[8], 
        cuspLongitudes[9], 
        cuspLongitudes[10], 
        cuspLongitudes[11], 
        cuspLongitudes[12]]
    }
    buildChart(data, colors);
    this.props.handleCalc(this.state);

    Birthday({
      year: theYear, 
      month: theMonth < 10 ? ('0' + theMonth) : theMonth, 
      day: theDay < 10 ? ('0' + theDay) : theDay,
    })
  }
  
  render(){
    return (
        <div className={'submit-button ' + (this.props.state.calendar ? 'show' : 'unshow')}>
            <a href="#" onClick={this.handleSubmit.bind(this)}>
              Chart
            </a>
        </div>
    )
  }
}

export default Calculate;