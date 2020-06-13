import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/v1/pub/signup',
    method: 'post',
    data
  })
}

export function login(data) {
  return request({
    url: '/v1/pub/signin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/v1/pri/userinfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/v1/pri/signout',
    method: 'post'
  })
}
