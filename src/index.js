import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './configure-store';
import rootSaga from './sagas'
import BasicRoute from './routers';
const store = configureStore();
store.runSaga(rootSaga);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <BasicRoute/>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('root'));


if(module.hot){
  module.hot.accept();
}

