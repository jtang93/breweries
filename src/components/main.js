import React, { Component } from 'react';
import TopSearch from './topsearch.js'
import List from './list.js'
import Details from './details.js'


export default class Main extends React.Component {

  state = {
    city: null,
    breweries: [],
    selectedBrewery: null,
    allBreweries: []
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(r => r.json())
    .then(parsed => {
      this.setState({allBreweries: parsed})
      console.log(parsed)
    })
  }

  renderDetails = () => {
    if (this.state.selectedBrewery) {
      return(
        <Details selectedBrewery={this.state.selectedBrewery}></Details>
      )
    }
  }

  selectBrewery = (breweryID) => {
    let clickedBrewery = this.state.allBreweries.find(brewery => brewery.id==breweryID)
    this.setState({selectedBrewery: clickedBrewery})
    console.log(this.state.selectedBrewery)
  }

  render() {
    return(
      <div>
        <TopSearch></TopSearch>
        <div>
          <List allBreweries={this.state.allBreweries} selectBrewery={this.selectBrewery}></List>
          {this.renderDetails()}
        </div>
      </div>
    )
  }

}
