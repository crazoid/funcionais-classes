import React from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends React.Component {
  contador = 1
  increment = () => {
    this.contador = this.contador+1
  }
  render(){
    return (
      <h1>Contador (app2): {this.contador}</h1>
    )
  }
}

const App1 = () => {
  let contador = 1
  const increment = () => {
    contador = contador + 1
  }
  return (
    <h1>Contador (app1): {contador}</h1>
  )
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
