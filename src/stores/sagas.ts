import { all } from 'redux-saga/effects';
import authWatcher from './auth/saga';
import profileWatcher from './profile/saga';

export default function* rootSaga() {
    yield all([
        authWatcher(),
        profileWatcher(),
    ]);
}
