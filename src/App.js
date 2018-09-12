import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './Containers/TaskListContainer';
import store from './Data/Store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskList />
      </Provider>
    );
  }
}

export default App;
