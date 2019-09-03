import React from 'react';
import { TodoList } from './TodoList'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


class TodoApp extends React.Component {


  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority: '', dueDate: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {


    return (
      <Card >
        <Typography component="h2">
          TODO
          </Typography>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
            </label>
          
          <TextField
            type="text"
            label="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            type="number"
            id="number"
            label="Number"            
            onChange={this.handleChange}
            value={this.state.priority}
            margin="normal"
          />           
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            value={this.state.dueDate}
          />
          <Button size="small">Add{this.state.items.length + 1}</Button>
        </form>
      </Card >
    );
  }

  handleChange(e) {
    this.setState({ text: document.getElementById('text').value })
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