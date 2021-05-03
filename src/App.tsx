import React from 'react'
import './App.css';
import MyComponent from './components/MyComponent';
import ToggleMode from './components/ToggleMode';
import Pacman from './components/Pacman';

function App() {
  let message = "Hey there";

  return (
    <div className="App">
      <header className="App-header">

       {message}

       <MyComponent/>
       <ToggleMode/>
       <Pacman/>

      </header>
    </div>
  );
}

export default App;
