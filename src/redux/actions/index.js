import { CHANGE_PAGE } from "../constants/action-Types";

// export const addArticle = (payload)=> {
//     return { type: ADD_ARTICLE, payload };
// }

// export const changePage = () => dispatch => {
//     dispatch({
//         type: CHANGE_PAGE,
//         payload: 'employees_page'
//     })
// }

export const changePage = (val) => (
    {
     type: CHANGE_PAGE,
     value: val
    });