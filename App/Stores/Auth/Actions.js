import { createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  login: ['login', 'password'],
  loginLoading: null,
  loginSuccess: ['data'],
  loginFailure:['error'],

})

export const AuthTypes = Types
export default Creators
