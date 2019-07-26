import React, { Component } from 'react';

export default class List extends React.Component {

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
        <span>
          Name: {brewery.name}
        </span>
        <span>
          Type: {brewery.brewery_type}
        </span>
        <span>
          Address: {brewery.street}
        </span>
        <span className='addrLine2'>
          {brewery.city}, {brewery.state}, {brewery.postal_code.slice(0,5)}
        </span>
        <span>
          Website: <a href={brewery.website_url}>{brewery.website_url}</a>
        </span>
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
      <React.Fragment>
        <span>
          Brewery List
        </span>
        {this.listBreweries()}
      </React.Fragment>
    )
  }

}
