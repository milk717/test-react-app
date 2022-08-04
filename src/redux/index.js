import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import videoReducer,{defaultSaga,getVideoDataFlow} from "./videoReducer";

const rootReducer = combineReducers({
    videoReducer,
});

export function* rootSaga(){
    yield all([defaultSaga(),getVideoDataFlow()]);
}

export default rootReducer;
