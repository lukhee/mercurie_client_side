
import { ADD_ARTICLE } from "../constants/action-Types";

const initialState = {
    articles: "from reduces"
};

const rootReducer= (state = initialState, action)=> {
    if (action.type === ADD_ARTICLE) {
        state.articles.push(action.payload);
    }
    return state;
}

export default rootReducer;