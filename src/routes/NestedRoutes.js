import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import IntroOrHome from '../Views/Dashboard/Components/MainContent/IntroOrHome';

const NestedRoutes = () => {
  const route = useRouteMatch();
  console.log(route);
    return (
          <Switch>
            <Route path={`${route.url}/home`} component={IntroOrHome}/>
            <Route path={`${route.url}/catelog`} component={IntroOrHome}/>
            <Route path={`${route.url}/orders`} component={IntroOrHome}/>
            <Route path={`${route.url}/customers`} component={IntroOrHome}/>
            <Route path={`${route.url}/discounts`} component={IntroOrHome}/>
            <Route path={`${route.url}/translations`} component={IntroOrHome}/>
            <Route path={`${route.url}/configuration`} component={IntroOrHome}/>
          </Switch>
    );
}

export default NestedRoutes;
