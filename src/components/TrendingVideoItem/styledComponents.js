import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const GenerateTrendingItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 10px;
  }
`

export const TrendingImage = styled.img`
  width: 350px;
  height: 225px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 325px;
  }
`

export const TrendingCardContainer = styled.div`
  margin-left: 25px;
  margin-top: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-top: 0px;
  }
`

export const TrendingHeading = styled.h1`
  color: #cccccc;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
`

export const TrendingDesc = styled.p`
  color: #e2e8f0;
`

export const ViewAndTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ViewsAndDotContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

export const ViewsCount = styled.p`
  color: #909090;
  padding-left: 0px;
`

// trending light heading video item

export const TrendingHeadingLight = styled.h1`
  color: #000000;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 0px;
`

export const TrendingDescLight = styled.p`
  color: #000000;
`

export const ViewsCountLight = styled.p`
  color: #383838;
  padding-left: 0px;
  font-size: 16px;
  font-weight: 500;
`
