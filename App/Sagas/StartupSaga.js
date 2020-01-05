import { put, select } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import { isLogged } from 'App/Stores/Auth/Selectors'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {

  const token = yield select(isLogged)
  if(token) {
    NavigationService.navigateAndReset('HomeScreen')
  } else {
    NavigationService.navigateAndReset('MainScreen')
  }
}
