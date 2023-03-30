import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { HOT_RECOMMEND_LIMIT } from '@/common/contants'
import HYThemeHeaderRCM from '@/components/theme-header-rcm/index.js'
import HYSongsCover from '@/components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreators'
import { HotRecommendWrapper } from './style'

export default memo(function HYHotRecommend() {
  const { hotRecommends } = useSelector(
    state => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <HYSongsCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})
