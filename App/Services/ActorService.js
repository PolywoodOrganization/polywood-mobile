import axios from 'axios'
import { Config } from 'App/Config'

const actorApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

// actorApiClient.interceptors.request.use((req) => {
//   console.log(req)
//   return req
// }, error => Promise.reject(error))
// actorApiClient.interceptors.response.use((res) => {
//   console.log(res)
//   return res
// }, error => Promise.reject(error))

function getActorById(token, id) {
  return actorApiClient
    .get(`/actors/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

function getFilmoById(token, id) {
  return actorApiClient
    .get(`/actors/filmography/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

export const ActorService = {
  getActorById,
  getFilmoById
}