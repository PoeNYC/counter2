import React, {Component} from 'react';

class Counter extends Component {
  constructor ()  {
    super();
    this.state = {
      count: 0,
    }
  }

/*  Class Methods Live Below The Constructor
    & Above The Render Method
*/

increment = () => {
  this.setState ({
    count: this.state.count + 1
  })
}

  render()  {
    return (
      <div className = "container">
        <div className = "navbar">Counter.js</div>
        <div className = "counter">
          <h1>{this.state.count}</h1>
          <button type = "button" onClick={this.increment}>Increment</button>
          <button type = "button" onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter;

// class HelloWorld extends Component {
//   render () {
//     return  (
//       <div>Hello World!!</div>
//     )
//   }
// }
//
// export default HelloWorld;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
