import {withRouter} from 'react-router-dom'

import {FiLogOut} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill} from 'react-icons/ri'

import {Cookies} from 'js-cookie'

import Popup from 'reactjs-popup'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  DarkHeaderContainer,
  LogoImgContainer,
  WebLogoImg,
  NavItemsContainer,
  ThemeButton,
  ThemeImage,
  ProfileButton,
  SmallButtonMenu,
  NavItems,
  MenuSmallModalCloseContainer,
  CloseButton,
  NavItem,
  NavItemLink,
  NavHeading,
  LogoutButtonLarge,
  ModalContainerDark,
  ModalCard,
  LogoutConfirmTag,
  ButtonsContainer,
  CancelDarkButton,
  ConfirmDarkButton,
  SmallLogoutBtnLogo,
  NavWebImgLink,
  LightHeaderContainer,
  SmallLogoutBtnLogoLight,
} from './styledComponents'

const Header = props => {
  // when we click on the logout button or logout icon popup is displayed if confirm button is click page should be logged out
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
    console.log('logout')
  }

  const renderSmallMenuPopup = () => (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark, changeActiveNavbar, activeNavbar} = value
        return (
          <Popup
            modal
            trigger={
              <SmallButtonMenu>
                <BiMenu size="22" color={isDark && '#ffffff'} />
              </SmallButtonMenu>
            }
          >
            {close => (
              <MenuSmallModalCloseContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <IoMdClose size="26" onClick={() => close()} />
                </CloseButton>
                <NavItems>
                  <NavItem>
                    <NavItemLink to="/">
                      <AiFillHome color="#424242" size="18" />
                      <NavHeading>Home</NavHeading>
                    </NavItemLink>
                  </NavItem>

                  <NavItem>
                    <NavItemLink to="/trending">
                      <HiFire color=" #475569" size="18" />
                      <NavHeading>Trending</NavHeading>
                    </NavItemLink>
                  </NavItem>

                  <NavItem>
                    <NavItemLink to="/gaming">
                      <GiLoveMystery color="#424242" size="18" />
                      <NavHeading>Gaming</NavHeading>
                    </NavItemLink>
                  </NavItem>

                  <NavItem>
                    <NavItemLink to="/saved-videos">
                      <RiMenuAddFill color=" #475569" size="18" />
                      <NavHeading>Saved Videos</NavHeading>
                    </NavItemLink>
                  </NavItem>
                </NavItems>
              </MenuSmallModalCloseContainer>
            )}
          </Popup>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  const isHeaderDark = themeBtnlogo => (
    <ReactVideoContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <DarkHeaderContainer>
            <LogoImgContainer>
              <NavWebImgLink to="/">
                <WebLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </NavWebImgLink>
            </LogoImgContainer>

            <NavItemsContainer>
              <ThemeButton type="button">
                <ThemeImage src={themeBtnlogo} onClick={changeTheme} />
              </ThemeButton>
              <ProfileButton>
                <ThemeImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
              {renderSmallMenuPopup()}
              <Popup
                modal
                trigger={
                  <LogoutButtonLarge type="button">Logout</LogoutButtonLarge>
                }
              >
                {close => (
                  <ModalContainerDark>
                    <ModalCard>
                      <LogoutConfirmTag>
                        Are you sure, you want to logout ?
                      </LogoutConfirmTag>
                      <ButtonsContainer>
                        <CancelDarkButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelDarkButton>
                        <ConfirmDarkButton
                          type="button"
                          onClick={onClickLogOut}
                        >
                          Confirm
                        </ConfirmDarkButton>
                      </ButtonsContainer>
                    </ModalCard>
                  </ModalContainerDark>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <SmallLogoutBtnLogo type="button">
                    <FiLogOut size="16" />
                  </SmallLogoutBtnLogo>
                }
              >
                {close => (
                  <ModalContainerDark>
                    <ModalCard>
                      <LogoutConfirmTag>
                        Are you sure, you want to logout ?
                      </LogoutConfirmTag>
                      <ButtonsContainer>
                        <CancelDarkButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelDarkButton>
                        <ConfirmDarkButton
                          type="button"
                          onClick={onClickLogOut}
                        >
                          Confirm
                        </ConfirmDarkButton>
                      </ButtonsContainer>
                    </ModalCard>
                  </ModalContainerDark>
                )}
              </Popup>
            </NavItemsContainer>
          </DarkHeaderContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  // light header theme container
  const isHeaderLight = themeBtnlogo => (
    <ReactVideoContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <LightHeaderContainer>
            <LogoImgContainer>
              <NavWebImgLink to="/">
                <WebLogoImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </NavWebImgLink>
            </LogoImgContainer>

            <NavItemsContainer>
              <ThemeButton type="button">
                <ThemeImage src={themeBtnlogo} onClick={changeTheme} />
              </ThemeButton>
              <ProfileButton>
                <ThemeImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
              {renderSmallMenuPopup()}
              <Popup
                modal
                trigger={
                  <LogoutButtonLarge type="button">Logout</LogoutButtonLarge>
                }
              >
                {close => (
                  <ModalContainerDark>
                    <ModalCard>
                      <LogoutConfirmTag>
                        Are you sure, you want to logout ?
                      </LogoutConfirmTag>
                      <ButtonsContainer>
                        <CancelDarkButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelDarkButton>
                        <ConfirmDarkButton
                          type="button"
                          onClick={onClickLogOut}
                        >
                          Confirm
                        </ConfirmDarkButton>
                      </ButtonsContainer>
                    </ModalCard>
                  </ModalContainerDark>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <SmallLogoutBtnLogoLight type="button">
                    <FiLogOut size="16" />
                  </SmallLogoutBtnLogoLight>
                }
              >
                {close => (
                  <ModalContainerDark>
                    <ModalCard>
                      <LogoutConfirmTag>
                        Are you sure, you want to logout ?
                      </LogoutConfirmTag>
                      <ButtonsContainer>
                        <CancelDarkButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelDarkButton>
                        <ConfirmDarkButton
                          type="button"
                          onClick={onClickLogOut}
                        >
                          Confirm
                        </ConfirmDarkButton>
                      </ButtonsContainer>
                    </ModalCard>
                  </ModalContainerDark>
                )}
              </Popup>
            </NavItemsContainer>
          </LightHeaderContainer>
        )
      }}
    </ReactVideoContext.Consumer>
  )

  return (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        const themeBtnlogo = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        return isDark ? isHeaderDark(themeBtnlogo) : isHeaderLight(themeBtnlogo)
      }}
    </ReactVideoContext.Consumer>
  )
}

export default withRouter(Header)
