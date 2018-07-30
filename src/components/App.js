/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom'

import AboutPage from './AboutPage'
import FuelSavingsPage from './containers/FuelSavingsPage'
import ChatWindow from '../containers/chatWindow'
import NotFoundPage from './NotFoundPage'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import '../styles/styles.scss'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' }
    return (
      <div className='main-app'>
        <div>
          <NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to='/fuel-savings' activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to='/about' activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={ChatWindow} />
          <Route path='/fuel-savings' component={FuelSavingsPage} />
          <Route path='/about' component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)
