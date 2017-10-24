import { combineReducers } from 'redux';
import session from './session_reducer';
// import entities from './entities_reducer';


const RootReducer = combineReducers({
  // entities,
  session,
});

export default RootReducer;
