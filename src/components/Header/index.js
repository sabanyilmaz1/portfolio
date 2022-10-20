import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../../data/dataHeader'
import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {})

  return (
    <nav id="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" id="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`}
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a target="blank" href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Header
