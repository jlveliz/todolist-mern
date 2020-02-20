import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {


    state = {
        users: [],
        username: ''
    }

    async getUsers() {
        const res = await axios.get('http://localhost:5000/api/users')
        this.setState({ users: res.data.message })
    }

    async componentDidMount() {
        this.getUsers()
    }


    onChangeUserName = (e) => {
        this.setState({ username: e.target.value })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/users', {
            username: this.state.username
        })
        this.setState({ username: '' })
        this.getUsers()

    }


    removeUser =  async (id) => {
        await axios.delete('http://localhost:5000/api/users/'+id)
        this.getUsers()
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header"><h3 className="card-title">New User</h3></div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" name="" id="" className="form-control"
                                        onChange={this.onChangeUserName}
                                        value={this.state.username} />
                                </div>
                                <button className="btn btn-block btn-primary">Save  </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={ () => this.removeUser(user._id)}>
                                    {user.username}
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
