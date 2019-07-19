import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';

const mapStyles = {
    width: '100%',
    height: '400px',
    marginTop: '5px'
  };

const StylesButton = {
    marginTop: '30px'
}
export class MapContainer extends Component {
    constructor( props ){
		super( props );
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: -1.2884,
				lng: 36.8233
			},
			markerPosition: {
				lat: -1.2884,
				lng: 36.8233
			}
		}
    }
    // onMarkerClick = () => {
    //     alert('masuk')
    // }

    getCurentLocation = () => {
        
        var api = ''
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            api += `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
            var mappositions={}
             mappositions.lat=position.coords.latitude
            mappositions.lng=position.coords.longitude
            this.setState({mapPosition: mappositions})
            var markerpos ={}
            markerpos.lat = position.coords.latitude
            markerpos.lng=position.coords.longitude
            this.setState({markerPosition: markerpos})

          }); 
    }
  render() {
    
    return (
        <center>
            <div>
                <button type="button"  className="btn btn-primary" onClick={this.getCurentLocation} style={StylesButton}>GET CURRENT LOCATION</button>
            </div>
            <div>
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            center={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
            }}
            >
             
            <Marker
                onClick={this.onMarkerClick}
                draggable={true}
                position={{lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
             />
              <Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '500px'
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
						/>
            </Map>
            </div>
            <div className="row justify-content-center" style={{marginTop : "500px"}}>
              <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">City</label>
                <input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
              </div>
              <div className="form-group">
                <label htmlFor="">Area</label>
                <input type="text" name="area" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.area }/>
              </div>
              <div className="form-group">
                <label htmlFor="">State</label>
                <input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state }/>
              </div>
              <div className="form-group">
                <label htmlFor="">Address</label>
                <input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
              </div>
              </div>
            </div>
            
            
           
         </center>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmmrCkXjXCP1Z4L26o2VWTE8L1wnWSFek'
})(MapContainer);