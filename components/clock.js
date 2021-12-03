import React, { Component } from 'react';
import {Timepicker} from 'react-timepicker';

class Clock extends Component {
    constructor(props){
      super(props);
    
      this.state = {
        calendar: this.props.calendar,
        clock: this.props.clock,
        chart: false,
        hour: 0,
        minute: 0,
      }
    }
    
    handleClock = async (e) => {
        await this.setState({
            clock: !this.state.clock,
        })
        this.props.handleClock(this.state);
    }

    onClock (hours, minutes) {
        this.setState({
            hour: hours,
            minute: minutes
        })
    }
  
    render(){
        return (
            <>
                <div className={'clock-body ' + (this.props.clock ? 'show' : 'unshow')}>
                    <Timepicker onChange={this.onClock.bind(this)} size={300} />
                </div>
                <div className={'clock-button ' + (this.props.calendar || this.state.clock ? 'show' : 'unshow')} >
                    <a href="#" onClick={this.handleClock.bind(this)}>
                        Time 
                    </a>
                    <span>  
                        {this.state.hour >= 10 ? this.state.hour : ('0' + this.state.hour)} : 
                        {this.state.minute >= 10 ? this.state.minute : ('0' + this.state.minute)}
                    </span>
                </div>
            </>
        )
    }
          
      
}
  
export default Clock;
