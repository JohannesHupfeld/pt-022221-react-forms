import React, { Component } from 'react'

export default class NoteForm extends Component {

  state = {
    topic: "", // default topic is empty in our form
    author: "", // default author is empty in our form
    note: "" // default note is empty in our form
  }

  handleChange = (e) => {
    this.setState({ //() => {
      // console.dir(e.target)
      // return {
        [e.target.name]: e.target.value // square brackets if you need to evaluate a key name from something else like a variable
      //}
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addNote(this.state)
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
