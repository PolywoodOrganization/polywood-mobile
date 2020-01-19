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

export function* signup({firstName, lastName, login, password}) {
      yield put(AuthActions.signupLoading())

      const response = yield call(AuthService.signup, firstName, lastName, login, password)
      if(response) {
        yield put(AuthActions.signupSuccess())
        NavigationService.navigateAndReset('MainScreen')
        DropDownHolder.dropDown.alertWithType('success', 'Success', 'You are successfully registered')

      } else {
        yield put(AuthActions.signupFailure('one field is not correct'))
        DropDownHolder.dropDown.alertWithType('error', 'Error', 'One field is not correct')
  }
}

export function* update({token, user}) {
  yield put(AuthActions.updateLoading())

  const response = yield call(AuthService.updateUser, token, user)
  if(response) {
    yield put(AuthActions.updateSuccess())
    DropDownHolder.dropDown.alertWithType('success', 'Success', 'User updated successfully')

  } else {
    yield put(AuthActions.updateFailure('Update failed'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'Update failed')
  }
}