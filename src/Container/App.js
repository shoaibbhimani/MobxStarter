import React from 'react'
import { Provider } from 'mobx-react'
import { useStrict }  from 'mobx'
import AppComponent from '../component/App'
import stores from '../stores/index'
useStrict(true);

const App = () => (
  <div>
    <Provider todoStore={stores.todoStore}>
      <AppComponent />
    </Provider>
  </div>
);

export default App;