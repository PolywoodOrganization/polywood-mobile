import {put, call} from 'redux-saga/effects'
import MoviesActions from 'App/Stores/Movies/Actions'
import { MovieService } from 'App/Services/MovieService'
import { DropDownHolder } from 'App/Services/DropDownHolder'
import ActorsActions from '../Stores/Actors/Actions'
import { ActorService } from '../Services/ActorService'

export function* getMovies({token, page = null, filterType = null, filter = null}) {
  yield put(MoviesActions.moviesLoading())
  let response = null
  switch (filterType) {
    case 'genre' :
      yield put(MoviesActions.resetMovies())
      response = yield call(MovieService.filterGenre, token, filter)
      break
    case 'title' :
      yield put(MoviesActions.resetMovies())
      response = yield call(MovieService.filterTitle, token, filter)
      break
    default :
      if(page === 0) yield put(MoviesActions.resetMovies())
      response = yield call(MovieService.getMovies, token, page)
      break
  }

  if(response) {
    yield put(MoviesActions.moviesSuccess(response))
  } else {
    yield put(MoviesActions.moviesFailure('Error fetching movies'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while fetching movies')
  }
}

export function* getCasting({ token, id }) {
  yield put(MoviesActions.getCastingLoading())
  const response = yield call(MovieService.getCastingById, token, id)
  if (response) {
    yield put(MoviesActions.getCastingSuccess(response))
  } else {
    yield put(MoviesActions.getCastingFailure('Error fetching actors'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while fetching actors')
  }
}
