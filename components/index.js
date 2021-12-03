import React, { Component } from "react";
import Particle from "react-particles-js";
import particlesConfig from "../styles/particlesConfig.json";
import Main from './main.js';
import Options from './options';
class Index extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>  
                {/* <Options/> */}
                <Particle params={particlesConfig} className="App-particles__container" />
                <div className="glass-body">
                    <Main/>
                </div>
            </>
        );
    }
    
}
export default Index;