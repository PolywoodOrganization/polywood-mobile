import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  favorites: ['token', 'iduser'],
  favoritesLoading: null,
  favoritesSuccess: ['data'],
  favoritesFailure: ['error'],
  addFavorite: ['token','favorite'],
  addFavoriteSuccess: ['data'],
  addFavoriteLoading: null,
  addFavoriteFailure: ['error'],
  removeFavorite: ['token','id'],
  removeFavoriteSuccess: ['data'],
  removeFavoriteLoading: null,
  removeFavoriteFailure: ['error'],

})

export const FavoritesType = Types
export default Creators
