const CHANGE_TEXT_FIELD = 'CHANGE_TEXT_FIELD';

export const changeTextField = (text) => ({type: CHANGE_TEXT_FIELD, text});

const initalState = {
    text: '',
}

export default function textFieldReducer(state = initalState, action){
    switch(action.type){
        case CHANGE_TEXT_FIELD:
            return{
                ...state,
                text: action.text
            }

            default:
                return state;
    }

}
