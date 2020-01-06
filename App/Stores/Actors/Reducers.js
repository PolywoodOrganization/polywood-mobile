import { INITIAL_STATE } from './InitialState'
import { ActorsType } from './Actions'
import { createReducer } from 'reduxsauce'

export const actorLoading = (state) => ({
  ...state,
  actorLoading: true,
  actorError: null,
})

export const actorFailure = (state, { error }) => ({
  ...state,
  actor: null,
  actorLoading: false,
  actorError: error,
})

export const actorSuccess = (state, { data }) => ({
  ...state,
  actor: data,
  actorLoading: false,
  actorError: null,
})

export const setCurrentActor = (state, { actor }) => ({
  ...INITIAL_STATE,
  currentActor: actor,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ActorsType.ACTOR_LOADING]: actorLoading,
  [ActorsType.ACTOR_SUCCESS]: actorSuccess,
  [ActorsType.ACTOR_FAILURE]: actorFailure,
  [ActorsType.SET_CURRENT_ACTOR]: setCurrentActor,
})