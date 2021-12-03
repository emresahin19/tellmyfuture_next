import React, { Component } from "react";
import Index from "../components/index.js";
import {
  Row,
  Col,
} from "reactstrap";

class Main extends Component {
  constructor(props){
    super(props);
    //window.scrollY - document.querySelector('#About').offsetTop <= 0 ? 400 : 0,
  }
  state = {
    windowWidth: null,
    windowScroll: null,
    scrolly: null,
    sliderWidth: null,
  }
  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      window.addEventListener("scroll", this.handleScroll.bind(this));
      this.resize();
  }

  resize() {
      this.setState({
          windowWidth: window.innerWidth,
          sliderWidth: window.innerWidth<768 ? window.innerWidth/1.2 : window.innerWidth/3
      });
  }
  
  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
      window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll() {
    this.setState({
      scrolly: window.scrollY
    });
  }
  render(){
    return (
      <>
        <Index/>
      </>
    );
  }
}
export default Main;
