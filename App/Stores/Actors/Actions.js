import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getActor: ['token', 'id'],
  actorLoading: null,
  actorSuccess: ['data'],
  actorFailure: ['error'],
  setCurrentActor: ['actor'],
  getFilmo: ['token', 'id'],
  getFilmoSuccess: ['data'],
  getFilmoFailure: ['error'],
  getFilmoLoading: null,

})

export const ActorsType = Types
export default Creators
