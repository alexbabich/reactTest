import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import userPage from './userPage'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');


const PrimaryLayout = () => (
    <div>
        <main>
            <Route path="/" exact component={App} />
            <Switch>
                <Route path="/:userId" component={userPage}/>
            </Switch>
        </main>
    </div>
)

const Menu = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
)

ReactDOM.render(<Menu />, app);

registerServiceWorker();
