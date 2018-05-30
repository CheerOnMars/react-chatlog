import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chatlog from './components/Chatlog';

class App extends Component {
  render() {
    console.log(chatMessages);
    const chatlogComponents = <Chatlog chatMessages={chatMessages['messages']}/>;

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Chat between Vladimir and Estagon</h1>
      </header>
      <main className="App-main">
      {chatlogComponents}
      </main>
      </div>
    );
  }
}

export default App;
