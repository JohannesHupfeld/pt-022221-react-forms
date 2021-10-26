import React, { Component } from 'react'

export default class NoteForm extends Component {

  state = {
    topic: "",
    author: "",
    note: ""
  }

  handleChange = (e) => {
    this.setState(() => {
      console.dir(e.target)
      return {
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.createNote(this.state)
    this.setState({
      topic: "",
      author: "",
      note: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="topic-input">Topic:</label>
        <input 
          id="topic-input" 
          type="text" 
          name="topic"
          value={this.state.topic}
          onChange={this.handleChange}
        />

        <label htmlFor="note-input">Note:</label>
        <input 
          id="note-input" 
          type="text" 
          name="note"
          value={this.state.note}
          onChange={this.handleChange}
        />

        <label htmlFor="author-input">Author:</label>
        <input 
          id="author-input" 
          type="text" 
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />

        <input type="submit" />
        {/* {this.state.note} */}
      </form>
    )
  }
}
