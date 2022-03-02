import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import './styles/global.scss';
import store, { persistor } from './stores';

function App() {
    return (
        <BrowserRouter>
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <Routes />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
