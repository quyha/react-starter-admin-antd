import { put, takeLeading, delay } from 'redux-saga/effects';
import apiUser from '../../apis/user';
import { DataResponse } from '../../services/request.type';
import { getProfile, getProfileSuccess } from './slice';
import { IProfile } from './type';

function* getProfileWorker() {
    yield delay(2000);
    const [ response ]: DataResponse<IProfile> = yield apiUser.getProfile();
    if (response) {
        console.log(response);
        yield put({ type: getProfileSuccess.toString(), payload: response });
    }
};

function* profileWatcher() {
    yield takeLeading(getProfile.toString(), getProfileWorker);
};

export default profileWatcher;
