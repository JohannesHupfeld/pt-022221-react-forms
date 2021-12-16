import React, { Component } from 'react'
import NoteForm from './NoteForm'

export default class NotesContainer extends Component {
  // storing all notes in state
  state = {
    notes: [
      {
        note: "First Note",
        author: "Laura",
        topic: "misc"
      }, {
        note: "Second Note",
        author: "Jitta",
        topic: "misc"
      }
    ]
  }

  addNote = (note) => {
    // WRONG
    // this.setState({
    //   notes: [...this.state.notes, note]
    // })

    // RIGHT
    this.setState((prevState, prevProps) => { //callback function
      return {
        notes: [...prevState.notes, note]
      }
    })
  }

  render() {
    return (
      <div>
        <NoteForm add Note={this.addNote} />
        <h2>All Notes</h2>
        <ul style={{textAlign: "left"}}> 
          {this.state.notes.map(({note, topic, author}) => <li>{topic}: {note} by {author}</li>)} 
          {/* {this.state.notes.map({n} => <li>{n.topic}: {n.note} by {n. author}</li>)}  */}
        </ul>
      </div>
      
    )
  }
}
