import { Cookies } from 'react-cookie';
import { IUserInfoPublic } from '../stores/auth/type';

const cookies = new Cookies();

const USER_INFO_STORAGE_KEY = 'label_nft_usr';
const USER_TOKEN_STORAGE_KEY = 'label_nft_usr_tk';

const serviceUser = {
    storeInfo: (user: IUserInfoPublic | null) => {
        if (user) {
            cookies.set(USER_INFO_STORAGE_KEY, JSON.stringify(user), { path: '/' });
            return;
        }
        cookies.remove(USER_INFO_STORAGE_KEY, { path: '/' });
    },
    storeAccessToken: (token: string | null) => {
        if (token) {
            cookies.set(USER_TOKEN_STORAGE_KEY, JSON.stringify(token), { path: '/' });
            return;
        }
        cookies.remove(USER_TOKEN_STORAGE_KEY, { path: '/' });
    },
    getInfoStorage: (): IUserInfoPublic | null => {
        const userInfo = cookies.get(USER_INFO_STORAGE_KEY);
        return userInfo ? userInfo : null;
    },
    getAccessTokenStorage: (): string | null => {
        const tokenString = cookies.get(USER_TOKEN_STORAGE_KEY);
        return tokenString ? tokenString : null;
    },
};

export default serviceUser;
