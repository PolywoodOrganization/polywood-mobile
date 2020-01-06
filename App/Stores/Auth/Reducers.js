import { INITIAL_STATE } from './InitialState'
import { AuthTypes } from './Actions'
import { createReducer } from 'reduxsauce'

export const loginLoading = (state) => ({
  ...state,
  loginLoading: true,
  loginError: null,
})

export const loginFailure = (state, { error }) => ({
  ...state,
  token: null,
  loginLoading: false,
  loginError: error,
})

export const  loginSuccess = (state, { data }) => ({
  ...state,
  token: data,
  loginLoading: false,
  LoginError: null
})


export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_LOADING]: loginLoading,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILURE]: loginFailure,
})