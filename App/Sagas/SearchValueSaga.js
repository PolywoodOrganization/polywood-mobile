import { put } from 'redux-saga/effects'
import SearchValueActions from 'App/Stores/SearchValue/Actions'


export function* setTitleFilter() {
  yield put(SearchValueActions.setTitleFilter())
}

export function* setGenreFilter() {
  yield put(SearchValueActions.setGenreFilter())
}