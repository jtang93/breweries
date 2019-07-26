import React, { Component } from 'react';
import Mapbox from './mapbox.js'

const Details = ({match, selectedBrewery})=> {

    return(
      <div className='detailsDiv'>
        Name: {selectedBrewery.name}
        <br></br>
        Address: {this.props.selectedBrewery.street}
        <br></br>
        Coordinates: {this.props.selectedBrewery.latitude},{this.props.selectedBrewery.longitude}
        <Mapbox selectedBrewery={this.props.selectedBrewery}></Mapbox>
      </div>
    )

}

export default Details
