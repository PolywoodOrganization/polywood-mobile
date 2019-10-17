import { put } from 'redux-saga/effects'
import SearchValueActions from 'App/Stores/SearchValue/Actions'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* setSearchValue() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(SearchValueActions.setSearchValue())
}
