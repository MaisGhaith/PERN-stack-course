import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './Components/InputTodo';
import ListTodo from './Components/ListTodo';
import EditTodo from './Components/EditTodo'
function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodo />

        <EditTodo />
      </div>
    </Fragment>
  );
}

export default App;
