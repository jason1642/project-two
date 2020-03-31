import React, { Component } from "react"
import "./SideNews.css"

const SideNews = props => {
  const renderFunc = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(<div className="side-news-div">
        <img className="side-news-img" src={props.mainNews[i].multimedia[0].url} alt="Pic" />
        <b>{props.mainNews[i].title}</b>
      </div>)
    }
    return arr
  }

  return (<div className="side-news-container">
    {props.mainNews ?
      renderFunc() : <> </>
    }
  </div>
  )

}

export default SideNews