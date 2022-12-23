import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill, RiCloseLine} from 'react-icons/ri'
import Cookies from 'js-cookie'

import Header from '../Header'
import HomeVideoItem from '../HomeVideoItem'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  HomeRouteContainer,
  HomeBgContainer,
  SideNavDarkContainer,
  SideNavLinksDarkContainer,
  SideDarkNavLinkPath,
  NavHeading,
  IconHeadingContainer,
  HomeHeadingContainer,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsLogosContainer,
  SocialLogo,
  ContactUsDesc,
  SideNavLightContainer,
  ContactUsHeadingLight,
  ContactUsDescLight,
  NavHeadingLight,
  HomeBarDarkContainer,
  HomeBannerDarkContainer,
  NxtLogAndCloseBtnContainer,
  NxtWatchLogo,
  CloseBtn,
  BannerDescription,
  GetNowButton,
  SearchInputContainerDark,
  SearchInput,
  SearchIconBtn,
  HomeBarLightContainer,
  SearchInputContainerLight,
  SearchInputLight,
  SearchIconBtnLight,
  HomeVideosContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureTextContainer,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    getHomeVideos: [],
    bannerDisplay: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  // in this below method we send an api request to the server and get the videos from the server
  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress}) // here we doing when the api call get the data we displays loader
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeUrl, options)
    //  console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = data.videos.map(eachVideo => {
        const {channel} = eachVideo

        return {
          name: channel.name,
          profileImageUrl: channel.profile_image_url,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
        }
      })
      this.setState({
        getHomeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  // here we remove the banner section using the none property if the bannerDisplay is true then display flex is applied otherwise none property is applied
  onClickClose = () => {
    this.setState(prevState => ({
      bannerDisplay: !prevState.bannerDisplay,
    }))
  }

  onClickRetry = () => {}

  // update the user enter text in the search input

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  // side navbar dark theme
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

  // if isDark is false then light theme is displayed
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

  // rendering the failure view
  renderFailureView = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureTextContainer>
              <FailureHeading isDark={isDark}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureDesc>
                We are having some trouble to complete your Request. Please try
                again.
              </FailureDesc>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </FailureTextContainer>
          </FailureContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  // here we render the home success videos
  renderSuccessHomeVideos = () => {
    const {getHomeVideos} = this.state
    // if the home videos length is greater than the zero then display the videos
    return getHomeVideos.length > 0 ? (
      <HomeVideosContainer>
        {getHomeVideos.map(eachVideoItem => (
          <HomeVideoItem
            homeVideoDetails={eachVideoItem}
            key={eachVideoItem.id}
          />
        ))}
      </HomeVideosContainer>
    ) : (
      this.renderFailureView()
    )
  }

  // here we displayed the loader
  renderInProgress = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="blue" width={50} height={50} />
    </LoaderContainer>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessHomeVideos()
      case apiStatusConstants.inProgress:
        return this.renderInProgress()
      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  // home bar dark theme container
  homeBarDarkView = () => {
    const {searchInput, bannerDisplay} = this.state
    const display = bannerDisplay ? 'flex' : 'none'
    return (
      <HomeBarDarkContainer>
        <HomeBannerDarkContainer display={display}>
          <NxtLogAndCloseBtnContainer>
            <NxtWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <CloseBtn type="button" onClick={this.onClickClose}>
              <RiCloseLine size="25" />
            </CloseBtn>
          </NxtLogAndCloseBtnContainer>
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetNowButton type="button">GET IT NOW</GetNowButton>
        </HomeBannerDarkContainer>
        <SearchInputContainerDark>
          <SearchInput
            type="search"
            value={searchInput}
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <SearchIconBtn>
            <AiOutlineSearch color="#ffffff" size="20" />
          </SearchIconBtn>
        </SearchInputContainerDark>
        {this.renderHomeVideos()}
      </HomeBarDarkContainer>
    )
  }

  homeBarLightView = () => {
    const {searchInput, bannerDisplay} = this.state
    const display = bannerDisplay ? 'flex' : 'none'
    return (
      <HomeBarLightContainer>
        <HomeBannerDarkContainer display={display}>
          <NxtLogAndCloseBtnContainer>
            <NxtWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <CloseBtn type="button" onClick={this.onClickClose}>
              <RiCloseLine size="25" />
            </CloseBtn>
          </NxtLogAndCloseBtnContainer>
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetNowButton type="button">GET IT NOW</GetNowButton>
        </HomeBannerDarkContainer>
        <SearchInputContainerLight>
          <SearchInputLight
            type="search"
            value={searchInput}
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <SearchIconBtnLight>
            <AiOutlineSearch color="#ffffff" size="20" />
          </SearchIconBtnLight>
        </SearchInputContainerLight>
        {this.renderHomeVideos()}
      </HomeBarLightContainer>
    )
  }

  renderHomeRoute = () => (
    <HomeRouteContainer>
      <Header />
      <HomeBgContainer>
        <ReactVideoContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <>
                {isDark ? this.sideNavDark() : this.sideNavLight()}
                {isDark ? this.homeBarDarkView() : this.homeBarLightView()}
              </>
            )
          }}
        </ReactVideoContext.Consumer>
      </HomeBgContainer>
    </HomeRouteContainer>
  )

  render() {
    return this.renderHomeRoute()
  }
}

export default Home
