import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SearchValueTypes } from './Actions'

export const setTitleFilter = (state, { title }) => {
  return {
    ...INITIAL_STATE,
    filterTitle: title,
  }
}

export const setGenreFilter = (state, { genre }) => {
  return {
    ...INITIAL_STATE,
    filterGenre: genre,
  }
}

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [SearchValueTypes.SET_TITLE_FILTER]: setTitleFilter,
  [SearchValueTypes.SET_GENRE_FILTER]: setGenreFilter,
})
