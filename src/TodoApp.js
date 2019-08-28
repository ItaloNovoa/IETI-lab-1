import React from 'react';
import {TodoList} from './TodoList'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '',priority:'',dueDate:'' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              type="text"
              id="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <input 
              type="number"
              id="number"
              onChange={this.handleChange}
              value={this.state.priority}
            />
            <input
              type="date"
              id="date"
              onChange={this.handleChange}
              value={this.state.dueDate}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
        this.setState({ text: document.getElementById('text').value})
        this.setState({ priority: document.getElementById('number').value });;
        this.setState({ dueDate: document.getElementById('date').value });;
    }
    
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: this.state.dueDate,
        id: Date.now()

      };
      
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }
  export default TodoApp;