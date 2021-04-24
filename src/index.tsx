import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './prooviders/App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchPopularTags } from './api/Tags';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducer, composedEnhancer);

store.dispatch(fetchPopularTags);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </ Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
