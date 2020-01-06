import { INITIAL_STATE } from './InitialState'
import { MoviesType } from './Actions'
import { createReducer } from 'reduxsauce'

export const moviesLoading = (state) => ({
  ...state,
  moviesLoading: true,
  moviesError: null,
})

export const moviesFailure = (state, { error }) => ({
  ...state,
  movies: [],
  moviesLoading: false,
  moviesError: error,
})

export const moviesSuccess = (state, { data }) => {
  return ({
    ...state,
    movies: [...state.movies, ...data],
    moviesLoading: false,
    moviesError: null,
  })
}

export const resetMovies = (state) => ({
  ...state,
  movies: [],
  moviesLoading: true,
  moviesError: null,
})

export const setCurrentMovie = (state, { movie }) => {
  return {
    ...state,
    currentMovie: movie,
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [MoviesType.MOVIES_LOADING]: moviesLoading,
  [MoviesType.MOVIES_SUCCESS]: moviesSuccess,
  [MoviesType.MOVIES_FAILURE]: moviesFailure,
  [MoviesType.RESET_MOVIES]: resetMovies,
  [MoviesType.SET_CURRENT_MOVIE]: setCurrentMovie,
})