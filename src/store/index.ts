import { configureStore } from '@reduxjs/toolkit';

import {useDispatch, useSelector} from 'react-redux';

import counter from './slices/counterSlice';
import {TypedUseSelectorHook} from 'react-redux';

import userSlice from './slices/userSlice';


const store = configureStore({
    reducer: {
        counter,
        user: userSlice
    }
});


export type RootState = ReturnType<typeof store.getState>;

export type TDispatch = typeof store.dispatch;


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;

export default store;














