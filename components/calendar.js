import React, { Component } from 'react'; 
import Select from 'react-select';

const years = [];
for(var i=0; i<=60; i++){
  years.push((2021 - i))
}
const options = years.map(item => ({
  "value": item,
  "label": item,
  "className": "year",
}))
const styleShit = {
  control: (_, { selectProps: { width }}) => ({
    width: 'auto',
    color: '#000 !important',
    display: 'flex',
    paddingRight: 5,
  }),
}

class Calendar extends Component {
  
    constructor(props){
      super(props);
      this.state = {
        month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        calendar_days: [],
        daysofmonths: [],
        calendar: false,
        monthList: false,
        year: null,
        month: null,
        day: null,
      }
    }

    componentDidMount = () => {
      let currDate = new Date();
      setTimeout(() =>{
        this.setState({
          day: currDate.getDate(),
          month: currDate.getMonth(),
          year: currDate.getFullYear(),
          monthList: this.props.monthList,
        })
        this.setState({
          calendar: true,
        })
      },1000)
      this.generateCalendar(this.state.month, this.state.year);
      this.props.handleDate(this.state);
    }
    
    isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
    }
  
    getFebDays = (year) => {
      return this.isLeapYear(year) ? 29 : 28
    }
  
    generateCalendar = async (month, year) => {
  
      let days_of_month = [31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      let alldays = new Array;
      let currDate = new Date();

      this.setState({
        daysofmonths: days_of_month,
      });

      if (!month && month != 0){
        month = currDate.getMonth();
      }
        
      if (!year){
        year = currDate.getFullYear();
      }
        
      let first_day = new Date(year, month, 1)
    
      for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        if (i >= first_day.getDay()) {
          await alldays.push(i - first_day.getDay() + 1);      
        }
        else {
          alldays.push(null);
        }
      }
      this.setState({
        calendar_days: alldays
      })
    }

    monthClick = async (i, e) => {
      await this.setState({
        monthList: false,
        month: i,
        calendar: true,
      })
      this.generateCalendar(i, this.state.year);
      this.props.handleDate(this.state);
    }
  
    monthpicker = async (e) => {
      await this.setState({
        monthList: true,
        calendar: false,
      })
      this.props.handleDate(this.state);
    }
  
    handlePrev = async (e) => {
      await this.setState({
        year: this.state.year - 1 
      })
      this.generateCalendar(this.state.month, this.state.year);
      this.props.handleDate(this.state);
    }
  
    handleNext = async (e) => {
      await this.setState({
        year: this.state.year < 2021 ? this.state.year + 1 : 2021, 
      })
      this.generateCalendar(this.state.month, this.state.year);
      this.props.handleDate(this.state);
    }

    yearSelect = async (i, e) => {
      
      await this.setState({year: i.value})
      this.generateCalendar(this.state.month, this.state.year);
      this.props.handleDate(this.state);
    }

    dayClick = async (i, e) => {
      await this.setState({
        day: i
      })
      this.props.handleDate(this.state);
    }
  
    render(){
      return(
          <>
            <div className={ "calendar " + (( this.state.monthList || this.props.clock || this.props.map || this.props.chart ) ? 'unshow' : 'show')}>
              <div className="calendar-header">
                  <a href="#" onClick={this.monthpicker} className="month-picker">{this.state.month ? this.state.month_names[this.state.month] : 'Month'}</a>
                  <div className="year-picker">
                    <Select 
                      defaultValue={this.state.year ? {label: this.state.year} : {label: 'Year'}}
                      classNamePrefix="react-select" 
                      styles={styleShit} 
                      options={options}  
                      onChange={this.yearSelect.bind(this)}
                      theme={(theme) => ({
                        ...theme,
                        colors: {
                          ...theme.colors,
                          primary25: 'rgba(255, 255, 255, 0.562)',
                          primary: '#090049d1'
                        },
                      })}
                    />
                  </div>
              </div>
              <div className="calendar-body">
                <div className="calendar-week-day">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="calendar-days">
                  {this.state.calendar_days.map((item, index) => {
                    if(item!=null){
                      return (
                        <div 
                          key={index} 
                          onClick={this.dayClick.bind(this, item)} 
                          className={(this.state.day==item ? 'active-day' : '') +' curr-date'}
                        >
                          {item}
                        </div>
                      )
                    }
                    else{
                      return (
                        <div key={index} className='curr-date'>{item}</div>
                      )
                    }
                  })}
                </div>
              </div>
              <div className="selected-day" id="selectedday"></div>
            </div>
            <div className={'month-list' + (this.state.monthList ? ' show' : ' unshow')}>
              {this.state.month_names.map((item, index)=>{
                  return (<div onClick={this.monthClick.bind(this, index)} key={index}>{item}</div>)
              })}
            </div>
          </>
      );
    }
}
export default Calendar;