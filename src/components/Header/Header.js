import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = props => {
  return (
    <header>
      <img className="header-img" src="https://cdn3.iconfinder.com/data/icons/abstract-tree-wood-forest-ecology-landscape-eco-gr/1470/green_eco_leaves_circle_logo_eco_recycle-512.png" />
      <h1 className="header-title">Header</h1>
      <input className="search-box" type="text" placeholder="Search" />
      <button className="search-button">I'm feeling lucky!</button>
      <button className="search-button">Search</button>
      <Link className="home-link" to="/">Home</Link>
    </header>

  )
}

export default Header