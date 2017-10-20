///<reference path="declarations.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {store} from './store';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
