import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
      <nav className='ui fixed inverted menu'>
        <div className="ui container">
          <Link className="header item" to='/'>My Portfolio<i class="heart outline icon"></i></Link>
          <div className="right menu">
           <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>About Me<i class="heart icon"></i></NavLink>
            <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>Projects<i class="heartbeat icon"></i></NavLink>
          </div>
        </div>
      </nav>
    )
  }

  export default Header
