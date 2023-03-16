import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItem'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  TrendingRouteHomeContainer,
  TrendingResponsiveContainer,
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
  TrendingHomeVideosContainer,
  TrendingAndLogoContainer,
  IconContainer,
  TrendingHeading,
  TrendingAndLogoLightContainer,
  TrendingLightHeading,
  TrendingAllVideosContainer,
  TrendingHomeVideosLightContainer,
  TrendingLightUnorderList,
  LoaderContainer,
  GameFailureContainer,
  FailureImg,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const apisStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apisStatusConstants.initial,
  }

  // now here we write the api call to the server and getting the data
  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apisStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    //   console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachTrend => {
        const {channel} = eachTrend
        return {
          id: eachTrend.id,
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          thumbnailUrl: eachTrend.thumbnail_url,
          title: eachTrend.title,
          viewCount: eachTrend.view_count,
          publishedAt: eachTrend.published_at,
          isSaved: false,
        }
      })
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apisStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apisStatusConstants.failure,
      })
    }
  }

  // side nav dark theme container
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

  // trending dark home videos
  isDarkTrendingHomeVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingHomeVideosContainer>
        <TrendingAndLogoContainer>
          <IconContainer>
            <GiLoveMystery size="20" color="red" />
          </IconContainer>
          <TrendingHeading>Trending</TrendingHeading>
        </TrendingAndLogoContainer>
        <TrendingAllVideosContainer>
          {trendingVideosList.map(eachItem => (
            <TrendingVideoItem
              key={eachItem.id}
              trendingItemDetails={eachItem}
            />
          ))}
        </TrendingAllVideosContainer>
      </TrendingHomeVideosContainer>
    )
  }

  // trending light theme container
  isLightTrendHomeVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingHomeVideosLightContainer>
        <TrendingAndLogoLightContainer>
          <IconContainer>
            <GiLoveMystery size="20" color="red" />
          </IconContainer>
          <TrendingLightHeading>Trending</TrendingLightHeading>
        </TrendingAndLogoLightContainer>
        <TrendingLightUnorderList>
          {trendingVideosList.map(eachItem => (
            <TrendingVideoItem
              key={eachItem.id}
              trendingItemDetails={eachItem}
            />
          ))}
        </TrendingLightUnorderList>
      </TrendingHomeVideosLightContainer>
    )
  }

  renderTrendingSuccessView = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark
          ? this.isDarkTrendingHomeVideos()
          : this.isLightTrendHomeVideos()
      }}
    </ReactVideoContext.Consumer>
  )

  loaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height={50} width={50} />
    </LoaderContainer>
  )

  clickRetryBtn = () => {
    this.getTrendingVideos()
  }

  trendingFailureView = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <GameFailureContainer dark={isDark}>
            <FailureImg src={failureImg} alt="failure view" />
            <FailureHeading dark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDesc dark={isDark}>
              We are having some trouble to complete your request. Please Try
              again.
            </FailureDesc>
            <RetryButton type="button" onClick={this.clickRetryBtn}>
              Retry
            </RetryButton>
          </GameFailureContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  // here we wrote the all 3 conditions success, failure, and loading view
  renderGameThreeConditions = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apisStatusConstants.success:
        return this.renderTrendingSuccessView()
      case apisStatusConstants.inProgress:
        return this.loaderView()
      case apisStatusConstants.failure:
        return this.trendingFailureView()
      default:
        return null
    }
  }

  renderTrendingPage = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendingRouteHomeContainer data-testid="theme" isDark={isDark}>
            <Header />
            <TrendingResponsiveContainer>
              {isDark ? this.sideNavDark() : this.sideNavLight()}
              {this.renderGameThreeConditions()}
            </TrendingResponsiveContainer>
          </TrendingRouteHomeContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  render() {
    return this.renderTrendingPage()
  }
}

export default Trending
