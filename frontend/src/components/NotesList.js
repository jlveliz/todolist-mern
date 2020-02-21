import React, { Component } from 'react'
import axios from 'axios';
import {format} from 'timeago.js'
import  {Link} from 'react-router-dom'


export default class NotesList extends Component {

    state = {
        notes: []
    }

    async loadNotes() {
        const res = await axios.get('http://localhost:5000/api/notes')
        this.setState({ notes: res.data.message })
    }

    async componentDidMount() {
        this.loadNotes()
    }

    async deleteNote(id) {
        const res = await axios.delete('http://localhost:5000/api/notes/'  + id)
        this.loadNotes()
    }

    async getNote(id) {
        await axios.get('http://localhost:5000/api/notes'+ id)
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h3>{note.title}</h3>
                                    <Link className="btn btn-warning btn-sm" to={"/edit/"+ note._id }>Editar</Link>
                                </div>
                                <div className="card-body">
                                    <div className="col-12">{note.content}</div>
                                    <div className="row">
                                        <div className="col-6">{note.author}</div>
                                        <div className="col-6 text-right">{format(note.date)}</div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger btn-sm" onClick={ ()=>this.deleteNote(note._id) }>Borrar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
