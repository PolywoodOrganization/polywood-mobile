import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SearchValueTypes } from './Actions'

export const setSearchValue = (state, { searchValue }) => {
  console.log('coucou')
  return {
    ...state,
    searchValue: searchValue,
  }
}

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [SearchValueTypes.SET_SEARCH_VALUE]: setSearchValue,
})
