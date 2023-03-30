import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import store from './store'

import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import HYAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HYAppHeader></HYAppHeader>
      <Suspense fallback={<h1>Loading</h1>}>{useRoutes(routes)}</Suspense>
      <HYAppFooter></HYAppFooter>
      <HYAppPlayerBar />
    </Provider>
  )
})
