import React, { Component } from 'react';

export default class Details extends React.Component {

  render() {
    return(
      <div className='detailsDiv'>
        Name: {this.props.selectedBrewery.name}
        <br></br>
        Address: {this.props.selectedBrewery.street}
        <br></br>
        Coordinates: {this.props.selectedBrewery.latitude},{this.props.selectedBrewery.longitude}
      </div>
    )
  }

}
