import {put, call} from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import { AuthService } from 'App/Services/AuthService'
import { DropDownHolder } from 'App/Services/DropDownHolder'
import NavigationService from 'App/Services/NavigationService'

export function* login({login, password}) {
  yield put(AuthActions.loginLoading())

  const response = yield call(AuthService.login, login, password)
  if(response) {
    yield put(AuthActions.loginSuccess(response))
    NavigationService.navigateAndReset('HomeScreen')
  } else {
    yield put(AuthActions.loginFailure('email or password incorrect'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'Login or password incorrect')
  }
}