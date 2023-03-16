import styled from 'styled-components'

import {Link} from 'react-router-dom'

// main route container
export const NotFoundRouteContainer = styled.div`
  display: flex;
  align-items: center;
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

// not found dark theme mode

export const NotFoundHomePageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
`

export const NotFoundImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`

export const NotFoundImg = styled.img`
  width: 100%;
  width: 250px;
  height: 240px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 340px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};

  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const NotFoundPageDesc = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 16px;
`
