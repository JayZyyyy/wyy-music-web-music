import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store'

// 用redux-immutable 导入的 combineReducers 比 在redux导入的高效
// 转化成 immutable对象
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer
