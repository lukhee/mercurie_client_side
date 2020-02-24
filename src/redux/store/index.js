import { createStore } from 'redux'
import rootReducer from "../reducers/index";

const configureStore = ()=> createStore(
     rootReducer,
    //   applyMiddleware(thunk)
    );

   
export default configureStore