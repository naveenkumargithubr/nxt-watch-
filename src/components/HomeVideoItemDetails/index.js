import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {AiFillHome, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill, RiMenuAddLine} from 'react-icons/ri'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import Header from '../Header'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  VideoItemDetailsRouteContainer,
  VideoItemDetailsContainer,
  SideNavDarkContainer,
  SideNavLinksDarkContainer,
  SideDarkNavLinkPath,
  IconHeadingContainer,
  HomeHeadingContainer,
  NavHeading,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsLogosContainer,
  SocialLogo,
  ContactUsDesc,
  SideNavLightContainer,
  NavHeadingLight,
  ContactUsHeadingLight,
  ContactUsDescLight,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class HomeVideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = ` https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
    }
  }

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

  videoItemDetailsContainer = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? this.renderVideoBarDark() : this.renderVideoBarLight()
      }}
    </ReactVideoContext.Consumer>
  )

  videoItemSuccessDetails = () => {}

  renderVideoItemDetailsThreeCases = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.videoItemSuccessDetails()
      default:
        return null
    }
  }

  renderIndividualVideos = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoItemDetailsRouteContainer
            dark={isDark}
            //  data-testid="videoItemDetails"
          >
            <Header />
            <VideoItemDetailsContainer>
              {isDark ? this.sideNavDark() : this.sideNavLight()}
              {this.renderVideoItemDetailsThreeCases()}
            </VideoItemDetailsContainer>
          </VideoItemDetailsRouteContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  render() {
    return this.renderIndividualVideos()
  }
}
export default HomeVideoItemDetails
