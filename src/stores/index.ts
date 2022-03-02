import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from "@redux-saga/core";
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from './sagas';

const initialState = {};

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ sagaMiddleware ];

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['connector'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, initialState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

store.subscribe(() => {
	console.log('store', store.getState());
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;