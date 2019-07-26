import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class List extends Component {

  state = {
    city: null
  }

  clickHandler = (e) => {
    console.log(e.target.id)
    this.props.selectBrewery(e.target.id)
  }

  listBreweries = () => {
    let breweryCards = this.props.filteredBreweries.map(brewery =>
      <div className='breweryCard' id={brewery.id} key={brewery.id} onClick={this.clickHandler}>
        Name: {brewery.name}
        <br></br>
        Type: {brewery.brewery_type}
        <br></br>
        Address: {brewery.street}
        <br></br>
        Website: <a href={brewery.website_url}>{brewery.website_url}</a>
        <br></br>
        <Link to={{
            pathname:`/details/${brewery.id}`,
            state:{
              selectedBrewery:this.props.selectedBrewery
            }
          }}>Details</Link>
      </div>
    )
    return(
      <div className='breweryCardsDiv'>
        {breweryCards}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.listBreweries()}
      </div>
    )
  }

}
