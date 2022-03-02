import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EActionStatus } from './../type';
import { IProfile, IProfileState } from './type';

const initialState: IProfileState = {
    status: EActionStatus.Idle,
    data: null,
};

const profileSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getProfile: (state: IProfileState) => {
            state.status = EActionStatus.Pending;
        },
        getProfileSuccess: (state: IProfileState, action: PayloadAction<IProfile>) => {
            state.status = EActionStatus.Succeeded;
            state.data = action.payload;
        },
    },
});

export const { getProfile, getProfileSuccess } = profileSlice.actions;

export default profileSlice.reducer;
