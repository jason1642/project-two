import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import { Link, Route } from "react-router-dom"
import News from "./components/News/News.js"
import Header from "./components/Header/Header.js"
import WatchList from "./components/WatchList/WatchList"



class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount = async () => {
    const API_KEY = "sk_6c78c6836d0240f585f888b8e84ef757"
    const response = await axios(`https://cloud.iexapis.com/stable/stock/XOM/quote?token=${API_KEY}`)
    console.log(response.data)
    const API_KEY_TWO = "QWjf4uT4S6lcAj8uGFIQ0Xpn6ioy730Q";
    const responseTwo = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY_TWO}`)
    console.log(responseTwo.data);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <News />
        <WatchList />
      </div>
    );
  }
}

export default App;
