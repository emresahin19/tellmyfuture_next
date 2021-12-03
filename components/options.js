import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Palette from './palette'
const colors = [
    {
        name: 'water',
        color: '#0F5E9C'
    }, 
    {
        name: 'earth',
        color: '#70483c'
    }, 
    {
        name: 'fire',
        color: '#d60000'
    }, 
    {
        name: 'air',
        color: '#AAE2F5'
    },
    {
        name: 'background',
        color: '#5a438a66'
    },
    {
        name: 'cusps',
        color: '#000'
    },
    {
        name: 'axis',
        color: '#ddd'
    },
    {
        name: 'line',
        color: '#000'
    },
    {
        name: 'circle',
        color: '#333'
    },
    {
        name: 'sign',
        color: '#000'
    },
    {
        name: 'points',
        color: '#000'
    },
]
class Options extends Component {
    constructor(props){
        super(props);

        this.state = {
            optBool: false,
            colorHEX: '',
            colorValue: 0,
            colors: [
                {
                    name: 'water', 
                    color: colors[0].color,
                    opened: false,
                }, 
                {
                    name: 'earth', 
                    color: colors[1].color,
                    opened: false,
                }, 
                {
                    name: 'fire', 
                    color: colors[2].color,
                    opened: false,
                }, 
                {
                    name: 'air', 
                    color: colors[3].color,
                    opened: false,
                },
                {
                    name: 'background', 
                    color: colors[4].color,
                    opened: false,
                },
                {
                    name: 'cusps', 
                    color: colors[5].color,
                    opened: false,
                },
                {
                    name: 'axis', 
                    color: colors[6].color,
                    opened: false,
                },
                {
                    name: 'line', 
                    color: colors[7].color,
                    opened: false,
                },
                {
                    name: 'circle', 
                    color: colors[8].color,
                    opened: false,
                },
                {
                    name: 'sign', 
                    color: colors[9].color,
                    opened: false,
                },
                {
                    name: 'points', 
                    color: colors[10].color,
                    opened: false,
                },
            ]
        }
    }
    handleClick = () => {
        let colorArr = [...this.state.colors];
        this.setState({
            optBool: !this.state.optBool
        })
        colorArr.map((item,index)=>{
            let others = {
                ...colorArr[index],
                opened: false
            }
            colorArr[index] = others;
            this.setState({
                colors: colorArr
            });
        })
    }
    handleChange = async (e, i) => {
        let colorArr = [...this.state.colors];
        let changedColor = {
            ...colorArr[e[1]],
            color: e[0],
            opened: e[2]
        }
        colorArr[e[1]] = changedColor;
        await this.setState({
            colors: colorArr,
        })
    }
    handlePalette = async (e, i) => {
        let colorArr = [...this.state.colors];
        await colorArr.map((item,index)=>{
            let others = {
                ...item,
                opened: false
            }
            item = others;
            this.setState({
                colors: colorArr
            });
        })
        let changedColor = {
            ...colorArr[e],
            opened: !this.state.colors[e].opened
        }
        colorArr[e] = changedColor;
        await this.setState({
            colors: colorArr,
        })
    }
    render(){
        return (
            <>
                <FontAwesomeIcon 
                    className={"options-button"}
                    icon={faCog}
                    onClick={this.handleClick.bind(this)}
                />
                <div className={"options " + (this.state.optBool ? 'show' : 'unshow') }>
                    <ul className="open-palette">
                        {colors.map((item, index)=>{
                            return (
                                <>
                                    <li className="option-1">
                                        <span className="option-color"
                                            onClick={this.handlePalette.bind(this, index)}
                                            style={{background: this.state.colors[index].color}}
                                        >
                                        </span>
                                        <a>
                                            {item.name}
                                        </a>
                                        <div className={"palette-body " + (this.state.colors[index].opened ? 'show' : 'unshow')}
                                            style={this.state.colors[index].opened ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}
                                        >
                                            <Palette 
                                                handleColor={(e)=>{this.handleChange([e[0], index, e[1]])}} 
                                                colorBool={this.state.colors[index].opened}
                                                color={this.state.colors[index].color}
                                            />
                                        </div>
                                        
                                    </li>
                                </>
                            )
                        })}
                        
                    </ul>
                    
                </div>
            </>
        )
    }
}

export default Options;