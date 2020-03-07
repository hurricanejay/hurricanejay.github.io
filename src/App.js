import React from 'react';
import './App.css';

class App extends React.Component {

  state = { 
    title: "Jay Wen", 
    headerLinks: [ 
      {title: "Home", path: '/'},
      {title: "About", path: '/About'}, 
      {title: "Contact", path: '/Contact'} 
    ],  

    home: {
      title: "Aesthetics & Functionality",
      subtitle: "A happy partnership",
      text: "My latest projects..."
    },

    about: {
      title: "About",
    },

    contact: {
      title: "Say Hi!",
    }

  }

  render() {

    return (
      <div className="App">
        <h1>jay's portfolio</h1>
      </div>
    );
  }
}

export default App;
