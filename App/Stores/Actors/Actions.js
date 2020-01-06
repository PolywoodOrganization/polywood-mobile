import { createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  getActor: ['token', 'id'],
  actorLoading: null,
  actorSuccess: ['data'],
  actorFailure: ['error'],
  setCurrentActor: ['actor']
})

export const ActorsType = Types
export default Creators
