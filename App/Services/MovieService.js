import axios from 'axios'
import { Config } from 'App/Config'

const movieApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

movieApiClient.interceptors.request.use((req) => {
  console.log(req)
  return req
}, error => Promise.reject(error))
movieApiClient.interceptors.response.use((res) => {
  console.log(res)
  return res
}, error => Promise.reject(error))

function getMovies(token, page) {
  console.log(`page: ${page}`)
  return movieApiClient
    .get(`/movies?page=${page}&size=10`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

export const MovieService = {
  getMovies,
}