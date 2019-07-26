import React, { Component } from 'react';
import Mapbox from './mapbox.js'

export default class Details extends Component{

  render() {
    return(
      <div className='detailsDiv'>
        Name: {this.props.selectedBrewery.name}
        <br></br>
        Address: {this.props.selectedBrewery.street}
        <br></br>
        Coordinates: {this.props.selectedBrewery.latitude},{this.props.selectedBrewery.longitude}
        <br></br>
        <Mapbox selectedBrewery={this.props.selectedBrewery}></Mapbox>
      </div>
    )
  }

}
