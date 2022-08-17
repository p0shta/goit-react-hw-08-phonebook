import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/es/integration/react';
import { HashRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>
);