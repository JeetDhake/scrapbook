import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="sidebar">
      
      <ul className="sidebar-links">
        <h4>
          <span>Main Menu</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <Link to="/">
            <span className="material-symbols-outlined"> dashboard </span>Dashboard</Link>
        </li>
        <li>
          <Link to="/CreateScrapbook"><span className="material-symbols-outlined"> overview </span>Create ScrapBook</Link>
        </li>
        <li>
          <Link to="/ViewScrapbook"><span className="material-symbols-outlined"> monitoring </span>Show One</Link>
        </li>
        <h4>
          <span>General</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <Link to="/"><span className="material-symbols-outlined"> folder </span>View All</Link>
        </li>
      
        <li>
          <a href="#"><span className="material-symbols-outlined"> move_up </span>Transfer</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> flag </span>Share Book</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined">
            notifications_active </span>Notifications</a>
        </li>
        <h4>
          <span>Account</span>
          <div className="menu-separator"></div>
        </h4>
        <li>
          <a href="#"><span className="material-symbols-outlined"> settings </span>Settings</a>
        </li>
        <li>
          <a href="#"><span className="material-symbols-outlined"> logout </span>Logout</a>
        </li>
      </ul>
      
    </div>

  )
}

export default Navbar
