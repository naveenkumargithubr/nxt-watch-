import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import ReactVideoContext from '../../context/ReactVideoContext'

import {
  HomeVideosLinkPath,
  VideoItemCardContainer,
  ThumbnailImgContainer,
  ThumbnailImg,
  LogoAndTitleContainer,
  ProfileImg,
  TitleDesc,
  MatchDetailsContainer,
  TeamName,
  CountAndDateContainer,
  ViewsCount,
  TimeCount,
  TitleDescLight,
} from './styledComponents'

const HomeVideoItem = props => {
  const {homeVideoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    profileImageUrl,
    name,
    viewCount,
    publishedAt,
  } = homeVideoDetails

  const isDarkHomeVideos = () => (
    <HomeVideosLinkPath to={`/videos/${id}`}>
      {/* to={`/videos/${id}`} */}
      <VideoItemCardContainer>
        <ThumbnailImgContainer>
          <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailImgContainer>

        <LogoAndTitleContainer>
          <ProfileImg src={profileImageUrl} alt="channel logo" />
          <MatchDetailsContainer>
            <TitleDesc>{title}</TitleDesc>
            <TeamName>{name}</TeamName>
            <CountAndDateContainer>
              <ViewsCount>{viewCount} views</ViewsCount>
              <TimeCount>
                <BsDot size="20" />
                {formatDistanceToNow(new Date(publishedAt))}
                {/* to use the formatDistance using date-fns */}
              </TimeCount>
            </CountAndDateContainer>
          </MatchDetailsContainer>
        </LogoAndTitleContainer>
      </VideoItemCardContainer>
    </HomeVideosLinkPath>
  )

  const isLightHomeVideos = () => (
    <HomeVideosLinkPath to="/videos">
      <VideoItemCardContainer>
        <ThumbnailImgContainer>
          <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        </ThumbnailImgContainer>

        <LogoAndTitleContainer>
          <ProfileImg src={profileImageUrl} alt="channel logo" />
          <MatchDetailsContainer>
            <TitleDescLight>{title}</TitleDescLight>
            <TeamName>{name}</TeamName>
            <CountAndDateContainer>
              <ViewsCount>{viewCount} views</ViewsCount>
              <TimeCount>
                <BsDot size="20" />
                {formatDistanceToNow(new Date(publishedAt))}
                {/* to use the formatDistance using date-fns */}
              </TimeCount>
            </CountAndDateContainer>
          </MatchDetailsContainer>
        </LogoAndTitleContainer>
      </VideoItemCardContainer>
    </HomeVideosLinkPath>
  )

  return (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return isDark ? isDarkHomeVideos() : isLightHomeVideos()
      }}
    </ReactVideoContext.Consumer>
  )
}

export default HomeVideoItem
