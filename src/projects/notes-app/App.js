import React from 'react';
import moment from 'moment'; 
import TextareaAutosize from 'react-textarea-autosize';
import ls from 'local-storage';
import ReactMarkdown from "react-markdown/with-html";
import './App.css';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      html: this.props.value,
      saved: true,
      edit: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.textArea = React.createRef();
  }

  handleChange = evt => {
    this.setState({ html: evt.target.value });
  };

  handleFocus() {
    this.setState({saved: false});
  }

  handleSave() {
    this.props.onSave(this.props.id, this.state.html);
    this.setState({saved: true, edit: false});
  }

  handleEdit() {
    if (this.state.edit) return;
    this.setState({
      edit: true
    }, () => {
      this.textArea.focus();
    });
  }

  render() {
    return (
      <div className="Note">
        <div className="note-header">
          <span className="date">{this.props.date}</span>
          <div>
            <span className="note-btn" disabled>{this.state.saved ? 'Saved' : 'Editing...'}</span>
            <button className="note-btn" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
          </div>
        </div>

        <div className ="text-input" onClick={e => this.handleEdit()}>
          {this.state.edit ? 
            <TextareaAutosize className="textArea"
            value={this.state.html}
            onChange={this.handleChange}
            onBlur={this.handleSave}
            onFocus={this.handleFocus}
            placeholder="Enter your note here..."
            minRows={5}
            ref={(tag) => (this.textArea = tag)}   
            />
          :
            <ReactMarkdown className="ReactMarkdown" source={this.state.html}/> 
          }
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {
      notes: [defaultNote],
    };
    this.handleCreateNote = this.handleCreateNote.bind(this);  
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }  

  componentDidMount() {
    this.setState({
      notes: ls.get('notes') || [defaultNote]
    });
  }
  
  handleCreateNote() {
    var now = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
    this.setState(prevState => ({
      notes: [{date: now, value:"", id: new Date().getTime()}].concat(prevState.notes)
    }));
  }

  handleDelete (noteID) {
    const notes = this.state.notes.filter(note => note.id !== noteID);
    this.setState({notes: notes});
    ls.set('notes', notes);
  }

  handleSave (noteID, noteValue) {
    const noteIndex = this.state.notes.findIndex(note => note.id === noteID ),
          notes = [...this.state.notes];
    notes[noteIndex] = {...notes[noteIndex], value: noteValue};
    this.setState({notes: notes});
    ls.set('notes', notes);
  }

  render() {
    var notes = this.state.notes.map(note => (
      <Note key={note.id} id={note.id} date={note.date} value={note.value} onDelete={this.handleDelete} onSave={this.handleSave}/>
    ));
    return (
      <div className="App">
        <header className="App-header">
          React Markdown Notes Taking App
        </header>
  
        <button onClick={this.handleCreateNote} style={{marginTop: "10px"}}>
          Create Note
        </button>
        
        <div className="notes-container">
          {notes}
        </div>
      </div>
    );
  }
}

var defaultNote = {
  id: new Date().getTime(),
  date: "Wednesday July 1st 2020, 4:41:50 pm",
  value: "# Hello, World!\n\nThis is your first React Markdown note. You can:\n\n* Click/Focus to edit\n\n* Click off/Blur to save\n\n* Add a new note  by clicking the 'Create Note' button above.\n\n* Delete this note\n\n* Save created notes in local data storage\n\nMarkdown compiled using [react-markdown](https://github.com/rexxars/react-markdown)."
};

export default App;