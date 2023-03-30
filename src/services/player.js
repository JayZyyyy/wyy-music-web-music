import request from './request'

export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}
