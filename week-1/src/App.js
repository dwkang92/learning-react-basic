import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const styles = {
    border: '1px solid #eee',
    padding: '20px',
    display: 'felx',
    width: '100vw',
    maxWidth: '400px',
    margin: '30px auto',
    flexDirection: 'column'
  };
  const textA = {
    textAlign: 'left',
    color: 'red'
  }
  return (
    <div className="App">
    <div style={styles}>
     <h1 style={{color: 'skyblue'}}>Good Day!</h1>
     <hr style={{width: '100%'}}></hr>
     <p style={textA}>fill in your name below.</p>
     <input type="text"></input>
     </div>
    </div>
  );
}

export default App;
