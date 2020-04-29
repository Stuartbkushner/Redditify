import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import PlaylistView from './components/PlaylistView'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PlaylistView} />
        </div>
      </Router>
    )
  }
}

export default App
