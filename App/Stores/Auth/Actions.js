import { createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  login: ['login', 'password'],
  loginLoading: null,
  loginSuccess: ['data'],
  loginFailure:['error'],
  logout: null,

})

export const AuthTypes = Types
export default Creators
