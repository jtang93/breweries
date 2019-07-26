import React, { Component } from 'react';
import Mapbox from './mapbox.js'

export default class Details extends Component{

  render() {
    return(
      <React.Fragment>
        <span>
          Name: {this.props.selectedBrewery.name}
        </span>
        <span>
          Address: {this.props.selectedBrewery.street}
        </span>
        <span>
          {this.props.selectedBrewery.city}, {this.props.selectedBrewery.state}, {this.props.selectedBrewery.postal_code.slice(0,5)}
        </span>
        <Mapbox selectedBrewery={this.props.selectedBrewery}></Mapbox>
      </React.Fragment>
    )
  }

}
