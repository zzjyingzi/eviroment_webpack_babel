import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// import 'normalize'
import BasicRoute from './routers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootSaga from './sagas'
import configureStore from './configure-store';
const store = configureStore();
import printMe from './print.js';
store.runSaga(rootSaga);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <BasicRoute/>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    //printMe();
  })
}
