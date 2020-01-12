import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as SearchValueReducer } from './SearchValue/Reducers'
import { reducer as AuthReducer } from './Auth/Reducers'
import { reducer as MoviesReducer } from './Movies/Reducers'
import { reducer as ActorsReducer } from './Actors/Reducers'
import { reducer as FavoritesReducer } from './Favorites/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    searchValue: SearchValueReducer,
    auth: AuthReducer,
    movies: MoviesReducer,
    actors: ActorsReducer,
    favorites: FavoritesReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
