import axios from 'axios'
import {Config} from 'App/Config'

const userApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

 // userApiClient.interceptors.request.use((req) => {
 //   console.log(req)
 //   return req
 // }, error => Promise.reject(error))
 // userApiClient.interceptors.response.use((res) => {
 //   console.log(res)
 //   return res
 // }, error => Promise.reject(error))

function login(login, password) {
  return userApiClient
    .post('/login',  { login: login, password: password})
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

function signup(firstName, lastName, login, password) {
  return userApiClient
    .post('/users',  { firstname: firstName, lastname: lastName, login, password })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

function updateUser(token, user) {
  return userApiClient
    .put(`/users/${user.iduser}`,  { ...user }, { headers: { 'Authorization': `Bearer ${token}` } })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

export const AuthService = {
  login,
  signup,
  updateUser,
}