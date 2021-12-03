import React, { Component } from "react";
import dynamic from 'next/dynamic';
import Sema from './sky.js';
const Skymap = dynamic(() => import('./sky.js'), { ssr:false })

class Sky extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <Skymap/>
      </>
      );
  }
}
export default Sky;
