import { EActionStatus } from './../type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import serviceUser from '../../services/user';
import { IAuthState, ISignInAction, IUserInfoPublic } from './type';

const initialState: IAuthState = {
    status: EActionStatus.Idle,
    user: serviceUser.getInfoStorage(),
    accessToken: serviceUser.getAccessTokenStorage(),
    isAuthenticated: !!serviceUser.getAccessTokenStorage() && !!serviceUser.getInfoStorage(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state: IAuthState, _: PayloadAction<ISignInAction>) => {
            state.status = EActionStatus.Pending;
        },
        signInSuccess: (state: IAuthState, action: PayloadAction<IUserInfoPublic>) => {
            const { accessToken, ...user } = action.payload;
            state.status = EActionStatus.Succeeded;
            state.accessToken = accessToken ?? '';
            state.user = user;
            state.isAuthenticated = true;
        },
        signInFail: (state: IAuthState) => {
            state.status = EActionStatus.Failed;
            state.isAuthenticated = false;
        },
        signOut: (state: IAuthState) => {
            state.status = EActionStatus.Idle;
        },
        signOutSuccess: (state: IAuthState) => {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.user = null;
        },
    },
});

export const {
    signIn,
    signInSuccess,
    signInFail,
    signOut,
    signOutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
