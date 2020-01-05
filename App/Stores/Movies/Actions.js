import { createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  movies: ['token', 'page'],
  moviesLoading: null,
  moviesSuccess: ['data'],
  moviesFailure:['error'],

})

export const MoviesType = Types
export default Creators
