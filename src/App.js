import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Todolist from './components/Todolist/Todolist'
import './App.css';

function App() {
  const [tokenState, setTokenState] = useState(null);




  return (
    <div className="App container">
      <div className='row justify-content-center mt-5'>
        <div className='col-6'>
          <Login tokenCb={setTokenState} />
        </div>
      </div>

      <div className='row justify-content-center mt-5'>
        <div className='col-6'>
          <Todolist token = {tokenState}/>
        </div>
      </div>

    </div>
  );
}

export default App;
