import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import Contact from '../components/Contact';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';

// stateless functional component 

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            {/* switch will move through route definitions in order and look for matches and will always match with 404 because there is no route matching as there is no path prop */}
            <Switch>
                <Route component={HomePage} exact={true} path="/" />
                <Route component={Portfolio} exact={true} path="/portfolio" />
                <Route component={PortfolioItem} path="/portfolio/:id" />
                <Route component={Contact} path="/contact" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter;