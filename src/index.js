import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DetalheProjetos from './pages/detalheProjeto/index'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Simulador from './pages/simulador';
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/projetos/:tipo" component={DetalheProjetos} />
            <Route path="/projetos" component={DetalheProjetos} />
            <Route path="/simulador" component={Simulador} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
