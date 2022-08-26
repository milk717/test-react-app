import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import videoReducer,{defaultSaga,getVideoDataFlow} from "./videoReducer";
import textFieldReducer from "./reduxStateChangeTest/textFieldReducer";

const rootReducer = combineReducers({
    videoReducer,
    textFieldReducer,
});

export function* rootSaga(){
    yield all([defaultSaga(),getVideoDataFlow()]);
}

export default rootReducer;
