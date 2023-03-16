import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  SideNavDarkContainer,
  SideNavLinksDarkContainer,
  SideDarkNavLinkPath,
  HomeHeadingContainer,
  NavHeading,
  IconHeadingContainer,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsLogosContainer,
  SocialLogo,
  ContactUsDesc,
  SideNavLightContainer,
  NavHeadingLight,
  ContactUsHeadingLight,
  ContactUsDescLight,
  NotFoundHomePageContainer,
  NotFoundImgContainer,
  NotFoundImg,
  NotFoundRouteContainer,
  NotFoundHeading,
  NotFoundPageDesc,
} from './styledComponents'

class NotFound extends Component {
  sideNavDark = () => (
    <SideNavDarkContainer>
      <SideNavLinksDarkContainer>
        <SideDarkNavLinkPath to="/">
          <HomeHeadingContainer>
            <AiFillHome color="#cccccc" size="18" />
            <NavHeading>Home</NavHeading>
          </HomeHeadingContainer>
        </SideDarkNavLinkPath>

        <SideDarkNavLinkPath to="/trending">
          <IconHeadingContainer>
            <HiFire color="#cccccc" size="18" />
            <NavHeading>Trending</NavHeading>
          </IconHeadingContainer>
        </SideDarkNavLinkPath>

        <SideDarkNavLinkPath to="/gaming">
          <IconHeadingContainer>
            <GiLoveMystery color="#cccccc" size="18" />
            <NavHeading>Gaming</NavHeading>
          </IconHeadingContainer>
        </SideDarkNavLinkPath>

        <SideDarkNavLinkPath to="/saved-videos">
          <IconHeadingContainer>
            <HiFire color="#cccccc" size="18" />
            <NavHeading>Saved videos</NavHeading>
          </IconHeadingContainer>
        </SideDarkNavLinkPath>
      </SideNavLinksDarkContainer>
      <ContactUsContainer>
        <ContactUsHeading>CONTACT US</ContactUsHeading>
        <ContactUsLogosContainer>
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
            alt="twitter logo"
          />
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt=" linked in logo"
          />
        </ContactUsLogosContainer>
        <ContactUsDesc>
          Enjoy! Now to see Your channels and recommendations!
        </ContactUsDesc>
      </ContactUsContainer>
    </SideNavDarkContainer>
  )

  // side Navbar light theme container
  sideNavLight = () => (
    <SideNavLightContainer>
      <SideNavLinksDarkContainer>
        <SideDarkNavLinkPath to="/">
          <HomeHeadingContainer>
            <AiFillHome color="#424242" size="18" />
            <NavHeadingLight>Home</NavHeadingLight>
          </HomeHeadingContainer>
        </SideDarkNavLinkPath>

        <SideDarkNavLinkPath to="/trending">
          <IconHeadingContainer>
            <HiFire color="#424242" size="18" />
            <NavHeadingLight>Trending</NavHeadingLight>
          </IconHeadingContainer>
        </SideDarkNavLinkPath>

        <SideDarkNavLinkPath to="/gaming">
          <IconHeadingContainer>
            <GiLoveMystery color="#424242" size="18" />
            <NavHeadingLight>Gaming</NavHeadingLight>
          </IconHeadingContainer>
        </SideDarkNavLinkPath>

        <SideDarkNavLinkPath to="/saved-videos">
          <IconHeadingContainer>
            <HiFire color="#424242" size="18" />
            <NavHeadingLight>Saved videos</NavHeadingLight>
          </IconHeadingContainer>
        </SideDarkNavLinkPath>
      </SideNavLinksDarkContainer>
      <ContactUsContainer>
        <ContactUsHeadingLight>CONTACT US</ContactUsHeadingLight>
        <ContactUsLogosContainer>
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
            alt="twitter logo"
          />
          <SocialLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt=" linked in logo"
          />
        </ContactUsLogosContainer>
        <ContactUsDescLight>
          Enjoy! Now to see Your channels and recommendations!
        </ContactUsDescLight>
      </ContactUsContainer>
    </SideNavLightContainer>
  )

  renderNotFoundPage = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        const img = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        return (
          <NotFoundHomePageContainer isDark={isDark}>
            <NotFoundImgContainer>
              <NotFoundImg src={img} alt="not found" />
              <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
              <NotFoundPageDesc isDark={isDark}>
                we are sorry, the page you requested could not be found
              </NotFoundPageDesc>
            </NotFoundImgContainer>
          </NotFoundHomePageContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  renderNotFoundRoute = () => (
    <>
      <Header />
      <ReactVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <NotFoundRouteContainer>
                {isDark ? this.sideNavDark() : this.sideNavLight()}
                {this.renderNotFoundPage()}
              </NotFoundRouteContainer>
            </>
          )
        }}
      </ReactVideoContext.Consumer>
    </>
  )

  render() {
    return this.renderNotFoundRoute()
  }
}

export default NotFound
