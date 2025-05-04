import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../Store/TransctionSlice.jsx';

const store = configureStore({
    reducer: {
        transactions: transactionReducer,
    },
});

export default store;
