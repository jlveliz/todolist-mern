import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {


    state = {
        users : [],
        userSelected : null,
        title: '',
        content: '',
        date: new Date()
    }

    onSubmit = async (e) => {
      e.preventDefault()
      console.log(this.state)
       
    }
    

    async getUsers() {
        const res = await axios.get('http://localhost:5000/api/users')
        this.setState({ users: res.data.message.map(user => user.username) })
        console.log(this.state.users);
    }

    async componentDidMount() {
        this.getUsers()
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    changeDate = (date) => {
        this.setState({date})
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Create a Note</h3>
                        </div>
                        <div className="card-body">
                            {
                                /**
                                * SELECT USER
                                */
                            }

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <select className="form-control"
                                    name="userSelected"
                                    onChange={this.onInputChange}>
                                    {
                                        this.state.users.map( user => 
                                            <option key={user} value={user}>
                                                {user}
                                            </option>)
                                    }
                                    </select>
                                
                                </div>

                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Title" 
                                        name="title" 
                                        required
                                        onChange={this.onInputChange}/>
                                </div>
                                <div className="form-group">
                                    <textarea 
                                    className="form-control" 
                                    placeholder="Content" 
                                    mame="content" 
                                    required
                                    onChange={this.onInputChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <DatePicker 
                                        className="form-control"
                                        selected={this.state.date}
                                        onChange={this.changeDate}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
