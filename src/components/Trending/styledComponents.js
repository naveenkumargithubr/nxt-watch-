import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingRouteHomeContainer = styled.div``

export const TrendingResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
`

// side nav bar dark theme designing
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

// trending dark theme navbar designing
export const TrendingHomeVideosContainer = styled.div`
  width: 100%;
  padding: 12px;
  background-color: black;
`

export const TrendingAndLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #383838;
  height: 70px;
  width: 100%;
  padding: 12px;
`

export const IconContainer = styled.div`
  background-color: #cccccc;
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 50px;
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  margin-left: 10px;
`

// trending light theme navbar container
export const TrendingHomeVideosLightContainer = styled.div`
  width: 100%;
  padding: 12px;
  background-color: #ffffff;
`

export const TrendingAndLogoLightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #d7dfe9;
  height: 70px;
  padding-left: 20px;
  width: 100%;
  max-width: 620px;
  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1260px;
  }
`

export const TrendingLightHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #212121;
  margin-left: 10px;
`

// un ordered list items
export const TrendingAllVideosContainer = styled.ul`
  overflow: auto;
  width: 100%;
  height: 100vh;
`

export const TrendingLightUnorderList = styled.ul`
  overflow: auto;
  width: 100%;
  height: 100vh;
`

// light theme loader container
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

// failure container designinig

export const GameFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  @media (min-width: 768px) {
    width: 75vw;
  }
  @media (min-width: 968px) {
    width: 100%;
  }
`

export const FailureImg = styled.img`
  width: 350px;
  height: 400px;
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const FailureDesc = styled.p`
  color: ${props => (props.dark ? '#606060' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  width: 450px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`

export const RetryButton = styled.button`
  width: 100px;
  height: 38px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #4f46e5;
  margin-top: 13px;
  cursor: pointer;
`
