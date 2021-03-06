import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import configureStore from './redux/store/index';
import * as serviceWorker from './serviceWorker';
const ReduxConnect = (
    <Provider store={configureStore()}>
        <App/>
    </Provider>
)

ReactDOM.render(ReduxConnect, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
