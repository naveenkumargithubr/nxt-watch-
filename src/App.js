import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import HomeVideoItemDetails from './components/HomeVideoItemDetails'

import ReactVideoContext from './context/ReactVideoContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  onClickChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark} = this.state
    return (
      <ReactVideoContext.Provider
        value={{isDark, changeTheme: this.onClickChangeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={HomeVideoItemDetails} />
          {/* path="/videos/:id" */}
        </Switch>
      </ReactVideoContext.Provider>
    )
  }
}

export default App
