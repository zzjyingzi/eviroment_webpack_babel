import {fork} from 'redux-saga/effects';

const  rootSaga  = function* (){
   yield fork(watchLoadZoneRequestData);
 };

 export default rootSaga
