import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeVideosLinkPath = styled(Link)`
  text-decoration: none;
  color: '#475569';
`

export const VideoItemCardContainer = styled.li`
  width: 300px;
  margin-right: 12px;
  margin-bottom: 12px;
  border-radius: 2px;
  flex-grow: 1;
  @media (max-width: 664px) {
    width: 100%;
  }
`

export const ThumbnailImgContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  @media (max-width: 767px) and (min-width: 576px) {
    width: 100%;
  }
`

export const LogoAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const MatchDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-start;
  margin-top: 12px;
  margin-right: 10px;
`

export const TitleDesc = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const CountAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0px;
`

export const TeamName = styled.h1`
  margin-top: 8px;
  margin-bottom: 0px;
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
  color: #606060;
`

export const ViewsCount = styled.p`
  display: flex;
  align-items: center;
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const TimeCount = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

// light theme home videos design
export const TitleDescLight = styled.h1`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
