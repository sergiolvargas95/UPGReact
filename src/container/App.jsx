import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import WeAre from '../Pages/WeAre';
import Ministeries from '../Pages/Ministries';
import Services from '../Pages/Services';
import Quote from '../Pages/Quote';
import Contact from '../Pages/Contact'
import Layout from '../components/Layout';


import '../styles/App.scss';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/quienessomos" component={WeAre} />
                <Route exact path="/ministerios" component={Ministeries} />
                <Route exact path="/servicios" component={Services} />
                <Route excat path="/citadeldia" component={Quote} />
                <Route exact path="/Contactanos" component={Contact} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;