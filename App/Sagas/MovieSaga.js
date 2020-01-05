import {put, call} from 'redux-saga/effects'
import MoviesActions from 'App/Stores/Movies/Actions'
import { MovieService } from 'App/Services/MovieService'
import { DropDownHolder } from 'App/Services/DropDownHolder'

export function* getMovies({token, page}) {
  yield put(MoviesActions.moviesLoading())

  const response = yield call(MovieService.getMovies, token, page)
  if(response) {
    yield put(MoviesActions.moviesSuccess(response))
  } else {
    yield put(MoviesActions.moviesFailure('Error fetching movies'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while fetching movies')
  }
}