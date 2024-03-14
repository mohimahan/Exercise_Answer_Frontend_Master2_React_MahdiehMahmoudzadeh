import React, { Component } from 'react';
import Comp1  from './components/Comp1.js';
import Comp2  from './components/Comp2.js';
import Comp3  from './components/Comp3.js';
import './styles/myStyle.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     comp1: true,
     comp2: false,
     comp3: false

    }
  }

  showHome = () => { 
    this.setState ({
      comp1: true,
      comp2: false,
      comp3: false
    }) 
  }

  showMovies = () => {
    this.setState ({
      comp1: false,
      comp2: true,
      comp3: false
    })
  }

  showAboutUs = () => {
    this.setState ({
      comp1: false,
      comp2: false,
      comp3: true
    })
  }



  render() {
    const {comp1, comp2, comp3} = this.state;
    
    return (
      <>
        <ul className="ul">
          <li onClick={this.showHome}>Home</li>
          <li onClick={this.showMovies}>Movies</li>
          <li onClick={this.showAboutUs}>About Us</li>
        </ul>

        <hr className="hr"  />

        {comp1 && <Comp1/>}
        {comp2 && <Comp2/>}
        {comp3 && <Comp3/>}

      </>
    );
  }
}

export default App;


