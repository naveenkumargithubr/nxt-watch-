import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  LoginBgLightContainer,
  LoginCardBgLightContainer,
  WebsiteLogoContainer,
  WebLogoImg,
  FormLoginContainer,
  UsernameContainer,
  LabelLight,
  InputLight,
  CheckBoxContainer,
  LabelCheckLight,
  InputCheckBoxLight,
  LoginButton,
  ErrorMsg,
  LoginBgDarkContainer,
  LoginCardBgDarkContainer,
  LabelDark,
  InputDark,
  InputCheckBoxDark,
  LabelCheckLDark,
  // LoginBgLightContainer,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    inputType: 'password',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  // in this hide and show method first we pass event as a argument to the onHideShowPwd function if the event.checked is true then show the text and show the password
  onHideAndShowPwd = event => {
    if (event.target.checked === true) {
      this.setState({
        inputType: 'text',
      })
    } else {
      this.setState({
        inputType: 'password',
      })
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  isLightLoginTheme = () => {
    const {
      username,
      password,
      inputType,
      showSubmitError,
      errorMsg,
    } = this.state
    return (
      <LoginBgLightContainer>
        <LoginCardBgLightContainer>
          <WebsiteLogoContainer>
            <WebLogoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </WebsiteLogoContainer>
          <FormLoginContainer onSubmit={this.onSubmitForm}>
            <UsernameContainer>
              <LabelLight htmlFor="username">USERNAME</LabelLight>
              <InputLight
                id="username"
                placeholder="Username"
                value={username}
                type="text"
                onChange={this.onChangeUsername}
              />
            </UsernameContainer>

            <UsernameContainer>
              <LabelLight htmlFor="password">PASSWORD</LabelLight>
              <InputLight
                id="password"
                placeholder="Username"
                value={password}
                type={inputType}
                onChange={this.onChangePassword}
              />
            </UsernameContainer>
            <CheckBoxContainer>
              <InputCheckBoxLight
                type="checkbox"
                id="show-password"
                onChange={this.onHideAndShowPwd}
              />
              <LabelCheckLight htmlFor="show-password">
                Show Password
              </LabelCheckLight>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
          </FormLoginContainer>
          {showSubmitError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
        </LoginCardBgLightContainer>
      </LoginBgLightContainer>
    )
  }

  // now implement the darklightTheme

  isDarkLoginTheme = () => {
    const {
      username,
      password,
      inputType,
      showSubmitError,
      errorMsg,
    } = this.state
    return (
      <LoginBgDarkContainer>
        <LoginCardBgDarkContainer>
          <WebsiteLogoContainer>
            <WebLogoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </WebsiteLogoContainer>
          <FormLoginContainer onSubmit={this.onSubmitForm}>
            <UsernameContainer>
              <LabelDark htmlFor="username">USERNAME</LabelDark>
              <InputDark
                id="username"
                placeholder="Username"
                value={username}
                type="text"
                onChange={this.onChangeUsername}
              />
            </UsernameContainer>

            <UsernameContainer>
              <LabelDark htmlFor="password">PASSWORD</LabelDark>
              <InputDark
                id="password"
                placeholder="Username"
                value={password}
                type={inputType}
                onChange={this.onChangePassword}
              />
            </UsernameContainer>
            <CheckBoxContainer>
              <InputCheckBoxDark
                type="checkbox"
                id="show-password"
                onChange={this.onHideAndShowPwd}
              />
              <LabelCheckLDark htmlFor="show-password">
                Show Password
              </LabelCheckLDark>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
          </FormLoginContainer>
          {showSubmitError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
        </LoginCardBgDarkContainer>
      </LoginBgDarkContainer>
    )
  }

  renderLoginForm = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? this.isDarkLoginTheme() : this.isLightLoginTheme()
      }}
    </ReactVideoContext.Consumer>
  )

  render() {
    const accessToken = Cookies.get('jwt_token')
    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }
    return this.renderLoginForm()
  }
}
export default LoginForm
