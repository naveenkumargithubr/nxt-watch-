import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import ReactVideoContext from '../../context/ReactVideoContext'
import {
  GenerateTrendingItemLink,
  TrendingItemContainer,
  TrendingImage,
  TrendingCardContainer,
  TrendingHeading,
  TrendingDesc,
  ViewAndTimeContainer,
  ViewsAndDotContainer,
  ViewsCount,
  TrendingHeadingLight,
  TrendingDescLight,
  ViewsCountLight,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {trendingItemDetails} = props
  const {
    id,
    name,
    title,
    thumbnailUrl,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = trendingItemDetails

  return (
    <ReactVideoContext.Consumer>
      {value => {
        const {isDark} = value
        // render trending dark item
        const renderTrendingDarkItem = () => (
          <GenerateTrendingItemLink to={`/videos/${id}`}>
            <TrendingItemContainer>
              <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
              <TrendingCardContainer>
                <TrendingHeading>{title}</TrendingHeading>
                <TrendingDesc>{name}</TrendingDesc>
                <ViewAndTimeContainer>
                  <ViewsAndDotContainer>
                    <BsDot size="16" color="#ffffff" />
                    <ViewsCount>{viewCount} views</ViewsCount>
                  </ViewsAndDotContainer>

                  <ViewsAndDotContainer>
                    <BsDot size="16" color="#ffffff" />
                    <ViewsCount>
                      {formatDistanceToNow(new Date(publishedAt))}
                      {/* it display the time,date and years */}
                    </ViewsCount>
                  </ViewsAndDotContainer>
                </ViewAndTimeContainer>
              </TrendingCardContainer>
            </TrendingItemContainer>
          </GenerateTrendingItemLink>
        )
        // render trending light item
        const renderTrendingLightItem = () => (
          <GenerateTrendingItemLink to={`/videos/${id}`}>
            <TrendingItemContainer>
              <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
              <TrendingCardContainer>
                <TrendingHeadingLight>{title}</TrendingHeadingLight>
                <TrendingDescLight>{name}</TrendingDescLight>
                <ViewAndTimeContainer>
                  <ViewsAndDotContainer>
                    <BsDot size="16" color="#000000" />
                    <ViewsCountLight>{viewCount} views</ViewsCountLight>
                  </ViewsAndDotContainer>

                  <ViewsAndDotContainer>
                    <BsDot size="16" color="#000000" />
                    <ViewsCountLight>
                      {formatDistanceToNow(new Date(publishedAt))}
                      {/* it display the time,date and years */}
                    </ViewsCountLight>
                  </ViewsAndDotContainer>
                </ViewAndTimeContainer>
              </TrendingCardContainer>
            </TrendingItemContainer>
          </GenerateTrendingItemLink>
        )

        return isDark ? renderTrendingDarkItem() : renderTrendingLightItem()
      }}
    </ReactVideoContext.Consumer>
  )
}

export default TrendingVideoItem
