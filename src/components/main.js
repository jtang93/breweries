import React, { Component } from 'react';
import TopSearch from './topsearch.js'
import List from './list.js'
import Details from './details.js'


export default class Main extends React.Component {

  state = {
    filterCity: null,
    breweries: [],
    selectedBrewery: null,
    allBreweries: [],
    filteredBreweries: []
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(r => r.json())
    .then(parsed => {
      this.setState({allBreweries: parsed})
      this.setState({filteredBreweries: parsed})
      console.log(parsed)
    })
  }

  citySearch = (city) => {
    this.setState({filterCity: city})
  }

  submitCity = () => {
    let filtered = this.state.allBreweries.filter(brewery => brewery.city == this.state.filterCity)
    this.setState({filteredBreweries: filtered})
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
        <TopSearch citySearch={this.citySearch} submitCity={this.submitCity}></TopSearch>
        <div>
          <List filteredBreweries={this.state.filteredBreweries} selectBrewery={this.selectBrewery}></List>
          {this.renderDetails()}
        </div>
      </div>
    )
  }

}
