import { createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  login: ['login', 'password'],
  loginLoading: null,
  loginSuccess: ['data'],
  loginFailure:['error'],

  signup: ['firstName', 'lastName', 'login', 'password'],
  signupLoading: null,
  signupSuccess: null,
  signupFailure:['error'],

  logout: null,

})

export const AuthTypes = Types
export default Creators
