import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Set SearchValue
  setSearchValue: ['searchValue'],
})

export const SearchValueTypes = Types
export default Creators
