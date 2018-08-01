/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom'
import ChatApp from '../containers/chatApp'
import Login from '../containers/login'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import '../styles/styles.scss'

class App extends React.Component {
  render () {
    return (
      <div className='main-app'>
        <Switch>
          <Route exact path='/' component={ChatApp} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)
