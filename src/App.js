import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Typed from "react-typed";
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Portfolio from './components/portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {Backdrop}
        <main style={{margintTop: '64px'}}>
        <div id="home" className="intro route bg-image background">
        <div className="intro-content">

            <div className="container">
              <h1 className="intro-title">My name is Joon</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Painter",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-4">
                <a
                  className="btn btn-primary btn px-12"
                  to="/portfolio"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>

        </div>
        </div>
        </main>
      </div>

    )
  }
}

export default App;
