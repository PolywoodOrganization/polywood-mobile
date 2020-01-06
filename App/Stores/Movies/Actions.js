import { createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  movies: ['token', 'page', 'filterType', 'filter'],
  moviesLoading: null,
  moviesSuccess: ['data'],
  moviesFailure:['error'],
  resetMovies: null,

})

export const MoviesType = Types
export default Creators
