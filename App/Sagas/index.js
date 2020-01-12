import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { AuthTypes } from 'App/Stores/Auth/Actions'
import { MoviesType } from 'App/Stores/Movies/Actions'
import { ActorsType } from 'App/Stores/Actors/Actions'
import { FavoritesType } from 'App/Stores/Favorites/Actions'
import { startup } from './StartupSaga'
import { login } from './AuthSaga'
import { getCasting, getMovies } from './MovieSaga'
import { getActor, getFilmo } from './ActorSaga'
import { addFavorite, getFavorites, removeFavorite } from './FavoriteSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(MoviesType.MOVIES, getMovies),
    takeLatest(ActorsType.GET_ACTOR, getActor),
    takeLatest(ActorsType.GET_FILMO, getFilmo),
    takeLatest(MoviesType.GET_CASTING, getCasting),
    takeLatest(FavoritesType.ADD_FAVORITE, addFavorite),
    takeLatest(FavoritesType.FAVORITES, getFavorites),
    takeLatest(FavoritesType.REMOVE_FAVORITE, removeFavorite),
  ])
}
