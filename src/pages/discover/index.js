import React, { memo, Suspense } from 'react'

import { dicoverMenu } from '@/common/local-data'
import { DiscoverWrapper, TopMenu } from './style.js'

import { NavLink, Outlet } from 'react-router-dom'

export default memo(function HYDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      <Suspense fallback={<h2>Loading</h2>}>
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
})
