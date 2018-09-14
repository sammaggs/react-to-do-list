import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './Containers/TaskListContainer';
import Header from './Components/Header';
import store from './Data/Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <TaskList />
        </React.Fragment>
      </Provider>
    );
  }
};

export default App;
