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
  currentUser: null,
  loginLoading: false,
  loginError: error,
})

export const  loginSuccess = (state, { data }) => ({
  ...state,
  token: data.token,
  currentUser: data.user,
  loginLoading: false,
  loginError: null
})

export const signupLoading = (state) => ({
  ...state,
  signupLoading: true,
  signupError: null,
})

export const signupFailure = (state, { error }) => ({
  ...state,
  signupLoading: false,
  signupError: error,
})

export const  signupSuccess = (state) => ({
  ...state,
  signupLoading: false,
  signupError: null
})

export const updateLoading = (state) => ({
  ...state,
  updateLoading: true,
  updateError: null,
})

export const updateFailure = (state, { error }) => ({
  ...state,
  updateLoading: false,
  updateError: error,
})

export const  updateSuccess = (state) => ({
  ...state,
  updateLoading: false,
  updateError: null
})

export const logout = (state) => ({
  ...state,
  token: null,
  currentUser: null,
})


export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_LOADING]: loginLoading,
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILURE]: loginFailure,
  [AuthTypes.SIGNUP_LOADING]: signupLoading,
  [AuthTypes.SIGNUP_SUCCESS]: signupSuccess,
  [AuthTypes.SIGNUP_FAILURE]: signupFailure,
  [AuthTypes.UPDATE_LOADING]: updateLoading,
  [AuthTypes.UPDATE_SUCCESS]: updateSuccess,
  [AuthTypes.UPDATE_FAILURE]: updateFailure,
  [AuthTypes.LOGOUT]: logout,
})