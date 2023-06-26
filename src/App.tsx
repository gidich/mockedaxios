import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [todo, setTodo] = React.useState({} as any);
  // get first todo using axios from url https://jsonplaceholder.typicode.com/todos/1
  
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')

    .then((response) => {
      setTodo({
        id: response.data.id,
        title: response.data.title,
        completed: response.data.completed
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <h1>Todo</h1>
        <p>ID: {todo.id}</p>
        <p>Title: {todo.title}</p>
        <p>Completed: {todo.completed ? "true": "false"}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
