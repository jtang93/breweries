import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Main from './components/main.js'
import TopSearch from './components/topsearch.js'
import List from './components/list.js'
import Details from './components/details.js'

class App extends Component {

  state = {
    filterCity: null,
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

  // let listProps = {
  //   filteredBreweries:{this.state.filteredBreweries},
  //   selectBrewery:{this.selectBrewery}
  // }
  //
  // let detailProps = {
  //   selectedBrewery:{this.state.selectedBrewery}
  // }

  render() {
    return(
        <Router>
          <Fragment>
            <Main
              filterCity={this.state.filterCity}
              selectedBrewery={this.state.selectedBrewery}
              allBreweries={this.state.allBreweries}
              filteredBreweries={this.state.filteredBreweries}
              citySearch={this.citySearch}
              submitCity={this.submitCity}
              selectBrewery={this.selectBrewery}
            ></Main>
          </Fragment>
        </Router>
      );
  }


  // <TopSearch citySearch={this.citySearch} submitCity={this.submitCity}></TopSearch>
  // <Route
  //   exact path='/'
  //   render={
  //     (listProps) => <List {...listProps} filteredBreweries={this.state.filteredBreweries} selectBrewery={this.selectBrewery} selectedBrewery={this.state.selectedBrewery}/>}
  //     />
  //   <Route
  //     path='/details/:id'
  //     render={(detailsProps) => <Details {...detailsProps} selectedBrewery={this.state.selectedBrewery}/>}
  //     />

  // <List filteredBreweries={this.state.filteredBreweries} selectBrewery={this.selectBrewery}></List>
  // {this.renderDetails()}

}

export default App;
