import request from '../utils/request'

export function postApi(data) {
  return request.post('/demo', data)
}

export function getApi(data) {
  return request.get('/demo', { param: data })
}