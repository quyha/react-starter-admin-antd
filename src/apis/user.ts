import { get } from '../services/fetcher';
import { DataResponse } from '../services/request.type';
import { IUserInfoPublic } from '../stores/auth/type';

interface ISignIn {
    email: string,
    password: string,
}

const apiUser = {
    async signIn(payload: ISignIn): Promise<DataResponse<IUserInfoPublic | null>> {
        try {
            const user = { email: payload.email, accessToken: new Date().toString() };
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([ user, null ]);
                }, 2000);
            })   
        } catch (error) {
            return [ null, error ];
        }
    },
    async getProfile(): Promise<unknown> {
        try {
            const profile = await get('/nft/explore?page=1&size=12');
            return [ profile, null ];
        } catch (error) {
            return [ null, error ];
        }
    },
};

export default apiUser;
