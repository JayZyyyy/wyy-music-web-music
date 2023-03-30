import React, { memo } from 'react'

import HYTopBanner from './c-cpns/top-banner/index'
import HYHotRecommend from './c-cpns/hot-recommend/index'
import HYNewAlbum from './c-cpns/new-album/index'
import HYRecommendRanking from './c-cpns/recommend-ranking'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

export default memo(function HYRecommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend />
          <HYNewAlbum />
          <HYRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

// function HYRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>HYRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend))
