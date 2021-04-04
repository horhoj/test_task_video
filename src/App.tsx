import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import routes from "./router/routes";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => (
            <Route path={route.path} exact={route.exact} key={route.name}>
              <route.component/>
            </Route>
          ))
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
