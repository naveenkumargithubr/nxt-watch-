import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const DarkHeaderContainer = styled.div`
  min-height: 10vh;
  background-color: #181818;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 0px 1px 0px #616e7c;

  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const LogoImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const NavWebImgLink = styled(Link)`
  text-decoration: none;
`

export const WebLogoImg = styled.img`
  width: 90px;
  height: 30px;
`

export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ThemeButton = styled.button`
  height: 40px;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const ThemeImage = styled.img`
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
`

export const ProfileButton = styled.button`
  height: 30px;
  width: 50px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutButtonLarge = styled.button`
  border: 1px solid #3b82f6;
  height: 30px;
  width: 80px;
  background: transparent;
  color: #3b82f6;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const ModalContainerDark = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  background-color: #424242;
  min-width: 100%;
  border-radius: 6px;
  padding: 30px;
  @media screen and (min-width: 768px) {
    min-width: 100%;
  }
`

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`

export const LogoutConfirmTag = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

export const ButtonsContainer = styled.div``

export const CancelDarkButton = styled.button`
  border: 2px solid #d7dfe9;
  background-color: transparent;
  color: #cbd5e1;
  outline: none;
  padding: 8px 10px 8px 10px;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 16px;
  margin-right: 10px;
  font-weight: 500;
  height: 40px;
  width: 90px;
  cursor: pointer;
`

export const ConfirmDarkButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #cbd5e1;
  outline: none;
  padding: 8px 10px 8px 10px;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 16px;
  height: 40px;
  width: 90px;
  font-weight: 500;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`

// menu small popup designing
export const SmallButtonMenu = styled.button`
  height: 40px;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuSmallModalCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 10px;
  width: 100%;
  background-color: ${props => (props.isDark ? ' #000000' : '#d7dfe9')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
`
export const NavItemLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  min-height: 100%;
`

export const NavItems = styled.ul``

export const NavItem = styled.li`
  list-style-type: none;

  background-color: ${props => props.activeNavbar && '#d7dfe9'};
`

export const NavHeading = styled.p`
  color: #00306e;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 17px;
`

export const SmallLogoutBtnLogo = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 24px
  font-weight: 500;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

// light header Theme container
export const LightHeaderContainer = styled.div`
  min-height: 10vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 0px 1px 0px black;

  @media (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const SmallLogoutBtnLogoLight = styled.button`
 border: none;
  outline: none;
  background-color: transparent;
  color: #000000;
  font-size: 24px
  font-weight: 500;
  @media screen and (min-width: 768px) {
      display: none;
  }
`
