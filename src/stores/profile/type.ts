import { IUserInfoPublic } from '../auth/type';
import { EActionStatus } from '../type';

export interface IProfile extends IUserInfoPublic {
    id: string,
}

export interface IProfileState {
    status: EActionStatus,
    data: IProfile | null,
}