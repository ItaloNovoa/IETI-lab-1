import React from 'react';
import logo from './logo.svg';
import { TodoList } from './TodoList';
import './App.css';
import { Login } from './component/Login';
import TodoApp from './TodoApp';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


function App() {

  const isLoggedIn=false;
  const todos = [{ text: "Learn React", priority: 5, dueDate: new Date() },
  { text: "Learn about APIs", priority: 4, dueDate: new Date(2018, 8, 30) },
  { text: "write TODO App", priority: 3, dueDate: new Date(2018, 9, 30) }];

  const LoginView = () => (
    <Login />
  );

  const TodoView = () => (
    <TodoApp/>
  );
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  return (
    <div>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TODO React App</h1>
          </header>

          <br />
          <br />

          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>

          <div>
            <Route exact path="/" component={LoginView} />
            <Route path="/todo" component={TodoView} />
          </div>
        </div>
      </Router>
      {/**
      <TodoList items={todos}/>
       */}
    </div>
  );  
}

export default App;
