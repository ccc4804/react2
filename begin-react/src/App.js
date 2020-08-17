import React from 'react';
import Button from './components/Button';
import './components/App.scss'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button color="blue" size="large">BUTTON</Button>
        <Button color="blue" >BUTTON</Button>
        <Button color="blue" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray" >BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink" >BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="blue" size="large" outline>BUTTON</Button>
        <Button color="gray" outline={true}>BUTTON</Button>
        <Button color="pink" size="small" outline={true}>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="blue" size="large" fullWidth>BUTTON</Button>
        <Button color="gray" size="large" fullWidth>BUTTON</Button>
        <Button color="pink" size="large" fullWidth>BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
