import React from 'react'
import './App.css';
import MyComponent from './components/MyComponent';
import ToggleMode from './components/ToggleMode';

function App() {
  let message = "Hey there";

  return (
    <div className="App">
      <header className="App-header">

       {message}

       <MyComponent/>
       <ToggleMode/>

      </header>
    </div>
  );
}

export default App;
