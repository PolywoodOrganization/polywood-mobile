import axios from 'axios'
import {Config} from 'App/Config'
import NavigationService from './NavigationService'

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
      NavigationService.navigate('HomeScreen')
      return response.data
    })
    .catch((error) => console.log(error))
}

export const AuthService = {
  login
}