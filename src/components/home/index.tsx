import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { RootState } from '../../stores';
import { getProfile } from '../../stores/profile/slice';

const Home = () => {
    const profile = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, []);
    
    return (
        <div>
            <p>Home</p>
            <p>{ profile.status }</p>
            <p>{ JSON.stringify(profile) }</p>
        </div>
    )
};

export default Home;
