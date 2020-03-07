import axios from 'axios';

// an action is an object with up to two properties 
//- a type property and an optional payload property
// type property is a string that explains what interaction just happened
// payload property is data that goes along with that interaction

export const FETCH_ANSWER = 'FETCH_ANSWER';
export const FETCH_ANSWER_SUCCESS = "FETCH_ANSWER_SUCCESS";
export const FETCH_ANSWER_FAIL = 'FETCH_ANSWER_FAIL';

export const getResponse = () => dispatch => {
    dispatch({ type: FETCH_ANSWER });
    
    axios
        .get('https://yesno.wtf/api')
        .then(respond => {
            console.log("respond", respond);
            dispatch({ type: FETCH_ANSWER_SUCCESS, payload: respond.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_ANSWER_FAIL, payload: error })
        });
}; 