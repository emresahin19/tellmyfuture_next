import React, { Component } from 'react';
import { Map } from '@esri/react-arcgis';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

class LocateMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            calendar: this.props.calendar,
            map: this.props.map,
            longitude: 0,
            latitude: 0,
            mapReady: false,
            markerx: 0,
            markery: 0,
        }
    }

    clickHandler = (e) => {
        const lat = e.mapPoint.latitude;
        const lon = e.mapPoint.longitude;
        this.setState({
            longitude: e.mapPoint.longitude,
            latitude: e.mapPoint.latitude,
            markerx: e.native.clientX,
            markery: e.native.clientY,
            // map: false
        })
        this.props.handlelocate(this.state);
        console.log(this.state.markerx)
    }
    
    handleMap = async (e) => {
        var theLon = 0;
        var theLat = 0;
        if(!this.state.map){
            await navigator.geolocation.getCurrentPosition((position) => {
                theLon = position.coords.longitude;
                theLat = position.coords.latitude;
                this.setState({
                    mapReady: true,
                    longitude: theLon,
                    latitude: theLat,
                })
            });
        }
        
        await this.setState({
            map: !this.state.map,
        })
        this.props.handlelocate(this.state);
    }
    handleMark = (e) => {
        console.log(e);
    }
    render(){
        return (
            <>
                <div className={(this.props.calendar || this.state.map ? 'show' : 'unshow') + (this.state.map ? ' map-button-active' : ' map-button')} >
                    <a href="#" onClick={this.handleMap.bind(this)}>
                        Map
                    </a>
                </div>
                <div className={this.state.map ? 'show ' : 'unshow '} style={{ width: '100%', height: '100%' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        {this.state.mapReady ? 
                            <>
                                <FontAwesomeIcon 
                                    className={'map-marker ' + (this.state.map ? 'show ' : 'unshow ')}
                                    icon={ faMapMarker }
                                    style={{transform: 'translate(' + this.state.markerx +','+ this.state.markery + ')'}}
                                />
                                <Map 
                                    viewProperties={{
                                        center: [this.state.longitude, this.state.latitude], 
                                        zoom: 10
                                    }} 
                                    onClick={(e) => this.clickHandler(e)}
                                    mapProperties={{ basemap: 'satellite' }}
                                />
                            </>
                            : 
                            <></>
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default LocateMap;