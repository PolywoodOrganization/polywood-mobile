import { call, put } from 'redux-saga/effects'
import FavoritesActions from 'App/Stores/Favorites/Actions'
import { DropDownHolder } from 'App/Services/DropDownHolder'
import { FavoritesService } from 'App/Services/FavoritesService'

export function* getFavorites({ token, iduser }) {
  yield put(FavoritesActions.favoritesLoading())
  const response = yield call(FavoritesService.getFavorites, token, iduser)
  if (response) {
    yield put(FavoritesActions.favoritesSuccess(response))
  } else {
    yield put(FavoritesActions.favoritesFailure('Error fetching favorites'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while fetching favorites')
  }
}

export function* addFavorite({ token, favorite}) {
  yield put(FavoritesActions.addFavoriteLoading())
  const response = yield call(FavoritesService.addFavorite, token, favorite)
  if (response) {
    yield put(FavoritesActions.addFavoriteSuccess(response))
    DropDownHolder.dropDown.alertWithType('success', 'Congrats !', 'This movie has been added to your favorites successfully.')
  } else {
    yield put(FavoritesActions.addFavoriteFailure('Error adding favorite'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while adding the favorite')
  }
}

export function* removeFavorite({ token, id}) {
  yield put(FavoritesActions.removeFavoriteLoading())
  const response = yield call(FavoritesService.removeFavorite, token, id)
  if (response.status === 200 || response.status === 204) {
    yield put(FavoritesActions.removeFavoriteSuccess(response))
    DropDownHolder.dropDown.alertWithType('success', 'Congrats !', 'This movie has been removed to your favorites successfully.')
  } else {
    yield put(FavoritesActions.addFavoriteFailure('Error adding favorite'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while removing the favorite')
  }
}