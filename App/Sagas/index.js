import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { AuthTypes } from 'App/Stores/Auth/Actions'
import { MoviesType } from 'App/Stores/Movies/Actions'
import { startup } from './StartupSaga'
import { login } from './AuthSaga'
import { getMovies } from './MovieSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(AuthTypes.LOGIN, login),
    takeLatest(MoviesType.MOVIES, getMovies),
  ])
}
