import { createStore } from 'redux'
import rootReducer from "../reducers/index";

// const store = createStore(rootReducer, window.STATE_FROM_SERVER);

export default function configureStore() {
    return createStore(
     rootReducer,
    //   applyMiddleware(thunk)
    );
   }

// export default store;