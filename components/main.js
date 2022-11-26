import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Calendar from './calendar';
import Clock from './clock';
import Calculate from './calculate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import Sema from './skymap/sky';

const LocateMap = dynamic(() => import("./map"), { ssr:false })
// const Sema = dynamic(() => import("./skymap/sky"), { ssr:false })


class Main extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      calendar_days: [],
      daysofmonths: [],
      calendar: false,
      map: false,
      ready: false,
      monthList: false,
      clock: false,
      chart: false,
      fullsc: false,
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      longitude: 0,
      latitude: 0,
      screenWidth: 0
    }
  }
  componentDidMount() {
    this.setState({
      ready: true,
      calendar: true,
    })
  }

  handleFullsc = () => {
    this.setState({
      fullsc: !this.state.fullsc
    })
  }

  handleBack = () => {
    this.setState({
      callendar: true,
      chart: false
    })
  }

  render(){
    return (
      <div className={(!this.state.ready ? 'glass' : 'glass-after') + (this.state.chart ? ' fullscreen' : '' )}>
        <span style={this.state.chart ? { opacity: 1 } : { opacity: 0 }}>
          <FontAwesomeIcon 
              className={"back-button"}
              icon={faAngleLeft}
              onClick={this.handleBack}
          />
        </span>
        
        <div id="paper" style={this.state.chart ? {} : {display: 'none'}}></div>

        {this.state.chart 
        ?
          <Sema
            lon={this.state.longitude}
            lat={this.state.latitude}
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
            hour={this.state.hour}
            minute={this.state.minute}
            stars={true}
          />
        :
          <></>
        }
          
        <Calendar
          handleDate={(dateState) => {
            this.setState({
              year: dateState.year, 
              calendar_days: dateState.calendar_days,
              monthList: dateState.monthList,
              daysofmonths: dateState.daysofmonths,
              month: dateState.month,
              day: dateState.day,
            })
          }}
          clock={this.state.clock}
          chart={this.state.chart}
          map={this.state.map}
          calendar={this.state.calendar}
          monthList={this.state.monthList}
        />
        <div className={this.state.chart || this.state.map || this.state.monthList ? "screen-off" : "screen-on"}>
          <Clock
            handleClock={(clockState) => {
              this.setState({
                hour: clockState.hour, 
                minute: clockState.minute,
                clock: clockState.clock
              })
            }}
            calendar={this.state.calendar}
            clock={this.state.clock}
          />
        </div>
        <div className={this.state.chart || this.state.clock || this.state.monthList ? "screen-off" : "screen-on"}>
          <LocateMap 
            handlelocate={(mapState) => {
              this.setState({
                longitude: mapState.longitude, 
                latitude: mapState.latitude,
                map: mapState.map
              })
            }}
            calendar={this.state.calendar}
            map={this.state.map}
          />
        </div>
          
        <div className={this.state.chart || this.state.map || this.state.clock || this.state.monthList ? "screen-off" : "screen-on"}>
          <Calculate 
            handleCalc={async(chartState)=>{
              this.setState({
                chart: chartState
              })
            }}
            state={this.state}
            chart={this.state.chart}
          />
        </div>
        
      </div>
    )
  }
		
	
}

export default Main;