import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = configureStore({
    reducer: rootReducer,
    // middle: applyMiddleware(thunk)}
      
});

export default store
