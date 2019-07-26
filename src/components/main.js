import React, { Component } from 'react';
import { Route } from "react-router-dom";

import TopSearch from './topsearch.js'
import List from './list.js'
import Details from './details.js'


const Main = ({match, filterCity, selectedBrewery, allBreweries, filteredBreweries, citySearch, submitCity, selectBrewery}) => {

  return(
    <div>
      <TopSearch citySearch={citySearch} submitCity={submitCity}></TopSearch>
      <Route
        exact path='/'
        render={
          (listProps) => <List {...listProps} filteredBreweries={filteredBreweries} selectBrewery={selectBrewery} selectedBrewery={selectedBrewery}/>}
      />
      <Route
        path={`${match}/:breweryID`}
        render={(detailsProps) => <Details {...detailsProps} selectedBrewery={selectedBrewery}/>}
      />
    </div>
  )

}

export default Main
