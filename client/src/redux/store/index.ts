import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../slices';

export default configureStore({
    reducer:{
        appReducer
    }
})

