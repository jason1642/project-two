import React from "react"
import { Link } from "react-router-dom"
import "./MainNews.css"

const MainNews = props => {
  const renderFunc = () => {
    let arr = []
    for (let i = 0; i < 3; i++) {
      let randomNum = Math.floor(Math.random() * 10)
      arr.push(
        <div className="main-news-cell" onClick={() => window.open(props.mainNews[randomNum].url, '_blank')}>
          <div className="main-img-div">
            <img className="main-news-img" src={props.mainNews[randomNum].multimedia[0].url} alt="Main news" />
          </div>
          <div className="main-news-info">
            <h2 className="main-news-title">{props.mainNews[randomNum].title}</h2>
            <p>{props.mainNews[randomNum].abstract}</p>
            <span class="main-news-tooltip">{props.mainNews[randomNum].url}</span>
          </div>
        </div>
      )
    }
    return arr
  }

  return (<div className="main-news-container">
    <div className="category">
      <button>Business</button>
      <button>World</button>
      <button>US</button>
      <button>Technology</button>
    </div>
    {props.mainNews ? <>
      {renderFunc()}
    </> : <></>}
  </div>
  )

}


export default MainNews