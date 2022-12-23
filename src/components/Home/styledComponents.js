import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeRouteContainer = styled.div`
  background-color: ${props => (props.isDark ? 'red' : '#f9f9f9')};
  min-height: 90vh;
`

export const HomeBgContainer = styled.div`
  display: flex;
  min-height: 90vh;
  flex-direction: row;
`
// side navbar dark container
export const SideNavDarkContainer = styled.div`
  display: none;
  background-color: #181818;
  box-shadow: 0px 0px 1px 0px #616e7c;
  @media screen and (min-width: 768px) {
    height: 90vh;
    width: 30vw;
    background-color: #383838;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const SideNavLinksDarkContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideDarkNavLinkPath = styled(Link)`
  text-decoration: none;
`
export const IconHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  padding-left: 15px;
  cursor: pointer;
`

export const HomeHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  padding-left: 15px;
`

export const NavHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  font-weight: 400;
  padding-left: 20px;
  cursor: pointer;
`

// Footer section designing
export const ContactUsContainer = styled.div``

export const ContactUsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  padding-left: 15px;
  font-weight: 500;
  color: #ffffff;
`

export const ContactUsLogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 15px;
`

export const SocialLogo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`
export const ContactUsDesc = styled.p`
  padding-left: 15px;
  font-family: 'roboto';
  font-size: 16px;
  color: #ffffff;
`

// light side navbar theme design
export const SideNavLightContainer = styled.div`
  display: none;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px #616e7c;
  @media screen and (min-width: 768px) {
    height: 90vh;
    width: 30vw;
    background-color: #ffffff;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ContactUsHeadingLight = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 15px;
  font-weight: bold;
  color: #000000;
`

export const ContactUsDescLight = styled.p`
  padding-left: 15px;
  font-family: 'roboto';
  font-size: 16px;
  color: #424242;
`
export const NavHeadingLight = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  color: #606060;
  font-weight: 400;
  padding-left: 20px;
  cursor: pointer;
`

// home bar dark theme view
export const HomeBarDarkContainer = styled.div`
  width: 100vw;
  min-height: 90vh;
  padding: 16px;
  background-color: #000000;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const HomeBannerDarkContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 30vh;
  width: 100%;
  display: ${props => props.display};
  flex-direction: column;
  padding: 20px;
`

export const NxtLogAndCloseBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NxtWatchLogo = styled.img`
  width: 110px;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #0f0f0f;
`

export const GetNowButton = styled.button`
  border: 2px solid #181818;
  outline: none;
  padding: 8px 12px 8px 12px;
  width: 120px;
  height: 40px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #181818;
  cursor: pointer;
  margin-top: 30px;
`

// search Container Design
export const SearchInputContainerDark = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 2px;
  height: 36px;
  margin-top: 26px;
  @media screen and (min-width: 768px) {
    width: 478px;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 90%;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #7e858e;
  background-color: transparent;
  padding-left: 16px;
`

export const SearchIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  height: 100%;
  background: #7e858e;
  width: 10%;
  cursor: pointer;
`

// HomeBarLightContainer styling

export const HomeBarLightContainer = styled.div`
  width: 100vw;
  min-height: 90vh;
  padding: 16px;
  background-color: #e2e8f0;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const SearchInputContainerLight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #7e858e;
  background-color: transparent;
  border-radius: 2px;
  height: 36px;
  margin-top: 26px;
  @media screen and (min-width: 768px) {
    width: 478px;
  }
`

export const SearchInputLight = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 90%;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #606060;
  padding-left: 16px;
`

export const SearchIconBtnLight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  height: 100%;
  background: #606060;
  width: 10%;
  cursor: pointer;
`

// get home videos designing
export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  width: 100%;
  margin-right: 30px;
  height: 90vh;
  overflow: auto;
`

// render inprogress view
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
`

// render failure view container
export const FailureContainer = styled.div``

export const FailureImage = styled.img``

export const FailureTextContainer = styled.div``

export const FailureHeading = styled.h1``

export const FailureDesc = styled.p``

export const RetryButton = styled.button``
