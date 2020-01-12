import axios from 'axios'
import {Config} from 'App/Config'

const favoritesApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

// favoritesApiClient.interceptors.request.use((req) => {
//    console.log(req)
//    return req
//  }, error => Promise.reject(error))
// favoritesApiClient.interceptors.response.use((res) => {
//    console.log(res)
//    return res
//  }, error => Promise.reject(error))

function getFavorites(token, iduser) {
  return favoritesApiClient
    .get(`/favorites/${iduser}`, { headers: { 'Authorization': `Bearer ${token}` }})
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

function addFavorite(token, favorite) {
  return favoritesApiClient
    .post(`/favorites`, {...favorite}, { headers: { 'Authorization': `Bearer ${token}` }})
    .then((response) => {
      return response.data
    })
    .catch((error) => console.log(error))
}

function removeFavorite(token, id) {
  return favoritesApiClient
    .delete(`/favorites/movie/${id}`, { headers: { 'Authorization': `Bearer ${token}` }})
    .then((response) => {
      return response
    })
    .catch((error) => console.log(error))
}

export const FavoritesService = {
  getFavorites,
  addFavorite,
  removeFavorite,
}