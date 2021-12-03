import React, { Component } from 'react';
import { Map } from '@esri/react-arcgis';

class MyAwesomeMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            calendar: this.props.calendar,
            map: this.props.map,
            longitude: 0,
            latitude: 0,
            mapReady: false,
        }
    }

    clickHandler = (event) => {
        const lat = event.mapPoint.latitude;
        const lon = event.mapPoint.longitude;
        this.setState({
            longitude: event.mapPoint.longitude,
            latitude: event.mapPoint.latitude,
            map: false
        })
        this.props.handlelocate(this.state);
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
                            <Map 
                                viewProperties={{
                                    center: [this.state.longitude, this.state.latitude], 
                                    zoom: 10
                                }} 
                                onClick={(e) => this.clickHandler(e)}
                                mapProperties={{ basemap: 'satellite' }}
                            /> 
                            : 
                            <></>
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default MyAwesomeMap;