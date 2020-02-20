import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigations extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        TodoList
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Notes <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="create">Create Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="user">Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
