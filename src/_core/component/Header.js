import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

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
                    <nav className="navbar navbar-expand-lg navbar-dark  p-0">
                        <NavLink to="/">
                            <img src="/img/logo.svg" />
                        </NavLink>
         
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active px-2">
                                    <a className="nav-link" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WHAT'S ON</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SHORTCODES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CONTACT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="modal" data-target="#modalForm">
                                        SIGN IN
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="modal" data-target="#modalForm">SIGN UP</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}
