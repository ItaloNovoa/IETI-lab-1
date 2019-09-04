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
  const isLoggedIn = localStorage.getItem("isLoggedin");

  const LoginView = () => (
    <Login />
  );

  const Todo = () => (
    <div>
      <TodoApp />

    </div>);
  if (!isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>
        <LoginView></LoginView>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>
        <Todo/>
      </div>
    );
  }
}

export default App;
