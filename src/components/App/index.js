import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Log from '../Login';

const Login = () => (
  <div>
    <h2>Login</h2>
    <Log />
  </div>
)

const App = () => (
  <Router>
    <div>
      <Log />
    </div>
  </Router>
)

export default App