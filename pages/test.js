import React, { Component } from "react";
import Sema from '../components/skymap/sky.js';
import dynamic from 'next/dynamic';

const Skymap = dynamic(() => import('../components/skymap/sky.js'), { ssr:false })
class Test extends Component {

render() {
  return (
    <>
      <Skymap
        year={1997}
        month={5}
        day={20}
        hour={13}
        minute={30}
        lat={41}
        lon={29}
      />
    </>
    );
  }
}

export default Test;
