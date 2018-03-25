import React from 'react'
import { Switch, Route } from "react-router-dom";

import AppComponent from '../component/App'

const App = () => (
  <div>
      <Switch>
        <Route path="/" component={AppComponent} />
      </Switch>
  </div>
);

export default App;