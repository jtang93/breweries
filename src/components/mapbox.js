import React, { Component } from 'react'
import ReactMapboxGl, { Marker, Layer, Feature, Popup } from "react-mapbox-gl";
import { GeoJSONLayer } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_KEY
})

// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// const geocodingClient = mbxGeocoding({ accessToken: process.env.REACT_APP_KEY });

export default class Mapbox extends Component {

  render() {
    return(
      <div className='mapboxDiv'>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "200px",
            width: "200px"
          }}
          center={[this.props.selectedBrewery.longitude, this.props.selectedBrewery.latitude]}
          >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "beer-15" }}
            color="#01FEDC"
            >
            <Marker
              coordinates={[this.props.selectedBrewery.longitude, this.props.selectedBrewery.latitude]}
              >
            </Marker>
          </Layer>

        </Map>
      </div>
    )
  }

}
