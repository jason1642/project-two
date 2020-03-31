import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import { Link, Route } from "react-router-dom"
import SideNews from "./components/SideNews/SideNews.js"
import MainNews from "./components/MainNews/MainNews.js"
import Header from "./components/Header/Header.js"
import WatchList from "./components/WatchList/WatchList"
import Ticker from "./components/Ticker/Ticker"

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCompany: 'tesla',
      newsApi: "",
      userInput: ""
    }
  }
  componentDidMount = async () => {


    //STOCK API
    const API_KEY = "sk_6c78c6836d0240f585f888b8e84ef757"
    const response = await axios(`https://cloud.iexapis.com/stable/stock/XOM/quote?token=${API_KEY}`)
    console.log(response.data)


    //NEWS API
    const API_KEY_TWO = "QWjf4uT4S6lcAj8uGFIQ0Xpn6ioy730Q";
    const responseTwo = await axios(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY_TWO}`)
    this.setState({
      newsApi: responseTwo.data.results
    })
    console.log(this.state.newsApi[0].title);

    //STOCK NEWS API 
    const API_KEY_THREE = "cce7827002dc4aacac0aa05b70ad0f33"
    const responseThree = await axios(`https://newsapi.org/v2/top-headlines?q=${this.state.currentCompany}&apiKey=${API_KEY_THREE}`)
    console.log(responseThree.data)
  }

  render() {
    console.log(this.state.newsApi)
    return (
      <div className="App">
        <Header userInput={this.state.userInput} />
        <main>

          <Ticker mainNews={this.state.newsApi} />
          <SideNews mainNews={this.state.newsApi} />
          <MainNews mainNews={this.state.newsApi} />
          <WatchList />
        </main>
      </div>
    );
  }
}

export default App;
