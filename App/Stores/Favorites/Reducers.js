import { INITIAL_STATE } from './InitialState'
import { FavoritesType } from './Actions'
import { createReducer } from 'reduxsauce'

export const favoritesLoading = (state) => ({
  ...state,
  favoritesLoading: true,
  favoritesFailure: null,
})

export const favoritesFailure = (state, { error }) => ({
  ...state,
  favorites: null,
  favoritesLoading: false,
  favoritesFailure: error,
})

export const favoritesSuccess = (state, {data}) =>
   ({
  ...state,
  favorites: data,
  favoritesLoading: false,
  favoritesFailure: null,
})

export const addFavoriteSuccess = (state, {data}) => ({
  ...state,
  favorites: data ? [ ...state.favorites, data] : [...state.favorites],
  addFavoriteLoading: false,
  addFavoriteFailure: null,
})

export const addFavoriteLoading = (state) => ({
  ...state,
  addFavoriteLoading: true,
  addFavoriteFailure: null,
})

export const addFavoriteFailure = (state, { error }) => ({
  ...state,
  addFavoriteLoading: false,
  addFavoriteFailure: error,
})

export const removeFavoriteSuccess = (state) => ({
  ...state,
  removeFavoriteLoading: false,
  removeFavoriteFailure: null,
})

export const removeFavoriteLoading = (state) => ({
  ...state,
 removeFavoriteLoading: true,
  removeFavoriteFailure: null,
})

export const removeFavoriteFailure = (state, { error }) => ({
  ...state,
  removeFavoriteLoading: false,
  removeFavoriteFailure: error,
})

export const reducer = createReducer(INITIAL_STATE, {
  [FavoritesType.FAVORITES_LOADING]: favoritesLoading,
  [FavoritesType.FAVORITES_SUCCESS]: favoritesSuccess,
  [FavoritesType.FAVORITES_FAILURE]: favoritesFailure,
  [FavoritesType.ADD_FAVORITE_SUCCESS]: addFavoriteSuccess,
  [FavoritesType.ADD_FAVORITE_LOADING]: addFavoriteLoading,
  [FavoritesType.ADD_FAVORITE_FAILURE]: addFavoriteFailure,
  [FavoritesType.REMOVE_FAVORITE_SUCCESS]: removeFavoriteSuccess,
  [FavoritesType.REMOVE_FAVORITE_LOADING]: removeFavoriteLoading,
  [FavoritesType.REMOVE_FAVORITE_FAILURE]: removeFavoriteFailure,

})