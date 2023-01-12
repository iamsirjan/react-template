import { all } from 'redux-saga/effects'
import userDetails from '../redux/userRedux/saga'


export function* rootSaga() {
  yield all([userDetails()])
}