import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setTitleFilter: ['title'],
  setGenreFilter: ['genre'],
})

export const SearchValueTypes = Types
export default Creators
