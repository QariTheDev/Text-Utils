import React from "react";
import textlogo from './text-log.png';


export default function Navbar(props) {

    const color = props.mode === 'dark' ? 'text-light' : 'text-dark';
    
    return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className={`navbar-brand ${color}`} href="https://discordpy.readthedocs.io/en/stable/interactions/api.html?highlight=cooldown#id1">
      <img src={textlogo} alt="Logo" className="logo-image" />
      {props.title}
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link ${color}`} aria-current="page" href="https://discordpy.readthedocs.io/en/stable/interactions/api.html?highlight=cooldown#id1">Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${color}`} href="https://discordpy.readthedocs.io/en/stable/interactions/api.html?highlight=cooldown#id1">About</a>
          </li>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div> 
        </ul>
      </div>
    </div>
  </nav>

  <div className="intro" style={{ color: props.mode === 'dark' ? 'white' : 'inherit' }}>{props.title}</div>
    </>
    )
}