import { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routeNames from '../../routes/names';
import { RootState } from '../../stores';
import { signOut } from '../../stores/auth/slice';
import './style.scss';

interface IProps {
    children: ReactElement,
}

const LayoutPrivate = ({ children }: IProps) => {
    const navigate = useNavigate();
    
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(signOut());
    };
    
    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate(routeNames.login);
        }
    }, [ auth.isAuthenticated, navigate])
    
    return (
        <main className="layout">
            { auth.isAuthenticated && <button type="button" onClick={ handleSignOut }>Sign out</button> }
            { auth.isAuthenticated ? children : null }
        </main>
    )
};

export default LayoutPrivate;
