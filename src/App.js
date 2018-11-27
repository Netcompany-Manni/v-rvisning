import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Headercomponent.js';
import Body from './Body/Bodycomponent.js';
import WeatherList from './WeatherComponents/WeatherList';
import CustomSpinner from './CustomSpinner.js';


class App extends Component {

constructor(){
  super();
  this.state = {
    isLoadingData : false,
    consolidated_weather : [],
    overskrift: "Velg by",
    dagensDato: this.getTodaysDate(),
    shouldDisplayWeatherList : true
  }
  this.getDataFromAPI.bind(this);
}


  render() {
    return (
      <div className="App">
        <Header tekst={this.state.overskrift}/> 
        <Body klikk={this.getDataFromAPI.bind(this)}/>
        <CustomSpinner loading={this.state.isLoadingData} ></CustomSpinner>{/* This will display while the App is fetching data*/}

          <div id ="jadks" hidden={this.state.shouldDisplayWeatherList}>
          <WeatherList results={this.state.consolidated_weather}/>
          </div>

      </div>
    );
  }

  getTodaysDate = () =>{

    var today = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'numeric',
      year : 'numeric'
  }).split('/').reverse().join('/'); {/* Will give the same format as from the API */}

  return today;
  }

  updateStates = (data) => {
    this.setState({
      consolidated_weather : data.consolidated_weather,
      isLoadingData : false,
      shouldDisplayWeatherList : false
    });
   }

  getDataFromAPI = (countryUrl) => {
    fetch(countryUrl, this.setState({isLoadingData : true, shouldDisplayWeatherList : true}))
    .then(res => res.json())
    .then(json => {
      console.log("Success");
      console.log(this.state.dagensDato)
      this.updateStates(json);
    });
  }



}

export default App;
