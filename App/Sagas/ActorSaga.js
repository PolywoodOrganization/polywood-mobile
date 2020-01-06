import { call, put } from 'redux-saga/effects'
import ActorsActions from 'App/Stores/Actors/Actions'
import { DropDownHolder } from 'App/Services/DropDownHolder'
import { ActorService } from 'App/Services/ActorService'

export function* getActor({ token, id }) {
  yield put(ActorsActions.actorLoading())
  const response = yield call(ActorService.getActorById, token, id)
  if (response) {
    yield put(ActorsActions.actorSuccess(response))
  } else {
    yield put(ActorsActions.actorFailure('Error fetching actors'))
    DropDownHolder.dropDown.alertWithType('error', 'Error', 'A problem occurred while fetching actors')
  }
}
