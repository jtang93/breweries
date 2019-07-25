import React, { Component } from 'react';

export default class TopSearch extends React.Component{

  typeCity = (e) => {
    this.props.citySearch(e.target.value)
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitCity()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' placeholder='Enter a city' onChange={this.typeCity}></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }

}
