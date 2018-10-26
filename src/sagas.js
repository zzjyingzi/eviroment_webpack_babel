import {fork} from 'redux-saga/effects';
import watchMaintainTodoListRequestData from './components/home/sagas'

const  rootSaga  = function* (){
   yield fork(watchMaintainTodoListRequestData);
 };

 export default rootSaga
