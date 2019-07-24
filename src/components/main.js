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
    })
  }

  render() {
    return(
      <div>
        <TopSearch></TopSearch>
        <div>
          <List ></List>
          <Details></Details>
        </div>
      </div>
    )
  }

}
