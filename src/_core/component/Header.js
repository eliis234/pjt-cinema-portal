import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container ">
                    <p className="text-white text-right mb-0">
                        <i className="fa fa-phone" />
                        <span className="mx-2 border-right pr-2 font-weight-bold">01634643124</span>
                        <i className="fa fa-search" />
                    </p>
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                        <NavLink to="/">
                            <img src="/img/logo.svg" alt="logo" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active px-2">
                                    <NavLink to="/" className="nav-link">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/test" className="nav-link">DETAIL</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/test" className="nav-link">SIGN IN</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/test" className="nav-link">SIGN UP</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}
