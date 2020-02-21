import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: null,
        title: '',
        content: '',
        date: new Date(),
        isEdit: false,
        _id: null
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const newNote = {
            title: this.state.title,
            content:this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        };

        if(this.state.isEdit) {
            await axios.put('http://localhost:5000/api/notes/' + this.state._id, newNote)
        } else {
            await axios.post('http://localhost:5000/api/notes',newNote)
        }

        window.location.href = '/'
    }


    async getUsers() {
        const res = await axios.get('http://localhost:5000/api/users')
        this.setState({ 
            users: res.data.message.map(user => user.username) ,
            userSelected: res.data.message[0].username
        })
        
    }

    async getNote(id) {
        return  await axios.get('http://localhost:5000/api/notes/' + id )   
    }

    async componentDidMount() {
        this.getUsers()
        const idNote = this.props.match.params.id
        if (idNote) {
            this.setState({isEdit: true, idNote: idNote})
            const note = this.getNote(idNote)
            note.then( res => {
                this.setState({
                    userSelected : res.data.author,
                    title : res.data.title,
                    content : res.data.content,
                    date : new Date(res.data.date)
                })   
            })
        }
        
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeDate = (date) => {
        this.setState({ date })
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
                                        onChange={this.onInputChange}
                                        value={this.state.userSelected}>
                                        {
                                            this.state.users.map(user =>
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
                                        onChange={this.onInputChange} 
                                        value={this.state.title}/>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="Content"
                                        name="content"
                                        required
                                        onChange={this.onInputChange}
                                        value={this.state.content}></textarea>
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
