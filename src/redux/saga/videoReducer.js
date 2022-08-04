import {createPromiseSaga, createPromiseThunk, handleAsyncActions, reducerUtils} from "../lib/asyncUtils";
import * as videoAPI from "../apis/api/video";
import {take, takeEvery, select, put,takeLatest} from 'redux-saga/effects';

const API_ACTION = {
    GET_MEDIA_LIST: 'GET_MEDIA_LIST',
    GET_MEDIA_LIST_SUCCESS: 'GET_MEDIA_LIST_SUCCESS',
    GET_MEDIA_LIST_ERROR: 'GET_MEDIA_LIST_ERROR',

    GET_MEDIA: 'GET_MEDIA',
    GET_MEDIA_SUCCESS: 'GET_MEDIA_SUCCESS',
    GET_MEDIA_ERROR: 'GET_MEDIA_ERROR',

    POST_VIDEO: 'POST_VIDEO',
    POST_VIDEO_SUCCESS: 'POST_VIDEO_SUCCESS',
    POST_VIDEO_ERROR: 'POST_VIDEO_ERROR',

    CLEAR_VIDEO: 'CLEAR_VIDEO',
};
const ACTIONS = {
    SET_VIDEO_MENU_PATH: 'SET_VIDEO_INFO_DATA',
    SET_VIDEO_POST_DATA: 'SET_VIDEO_POST_DATA'
};

Object.freeze(API_ACTION);

//api 관련
export const getMediaList = createPromiseThunk(API_ACTION.GET_MEDIA_LIST, videoAPI.getMediaList);
export const getVideo = id => ({type: API_ACTION.GET_MEDIA, payload: id, meta: id});
export const postVideo = (videoData) => ({type: API_ACTION.POST_VIDEO, payload: videoData});
export const clearVideo = () => ({type: API_ACTION.CLEAR_VIDEO});
//상태 저장용
export const setMenuPath = menu => ({type: ACTIONS.SET_VIDEO_MENU_PATH, menu});
export const setVideoPostData = ({...videoData},hashtags) => ({type: ACTIONS.SET_VIDEO_POST_DATA, payload:{...videoData,hashtags}})

const getVideoSaga = createPromiseSaga(API_ACTION.GET_MEDIA, videoAPI.getMedia);
const postVideoSaga = createPromiseSaga(API_ACTION.POST_VIDEO, videoAPI.postVideo);

export function* getVideoDataFlow() {
    yield takeEvery(API_ACTION.GET_MEDIA, getVideoSaga);    //영상 정보 가져오고
    while (true) {
        yield take(API_ACTION.GET_MEDIA_SUCCESS);               //영상 정보 가져오는거 성공하길 기다림
        const menu = yield select(state => state.videoManageReducer.video.data.menu);
        yield put(setMenuPath(menu));
    }
}

export function* postVideoDataFlow() {
    while(true){
        yield take(ACTIONS.SET_VIDEO_POST_DATA);
        const postVideoData = yield select(state=>state.videoManageReducer.postVideoData);
        yield put(postVideo(postVideoData));
        yield takeEvery(API_ACTION.POST_VIDEO, postVideoSaga);
    }
    //todo - 타임라인, 등등 기타정보 연달아 올릴 예정
}

const initialState = {
    videoList: reducerUtils.initial(),
    video: reducerUtils.initial(),
    menuPath: {menu1: {id: 2, menuNm: 'KFA 경기'}}
}

export default function videoManageReducer(state = initialState, action) {
    switch (action.type) {
        case API_ACTION.GET_MEDIA_LIST:
        case API_ACTION.GET_MEDIA_LIST_SUCCESS:
        case API_ACTION.GET_MEDIA_LIST_ERROR:
            return handleAsyncActions(API_ACTION.GET_MEDIA_LIST, 'videoList')(state, action);

        case API_ACTION.GET_MEDIA:
        case API_ACTION.GET_MEDIA_SUCCESS:
        case API_ACTION.GET_MEDIA_ERROR:
            return handleAsyncActions(API_ACTION.GET_MEDIA, 'video')(state, action);

        case API_ACTION.POST_VIDEO:
        case API_ACTION.POST_VIDEO_SUCCESS:
        case API_ACTION.POST_VIDEO_ERROR:
            return handleAsyncActions(API_ACTION.POST_VIDEO, 'upload')(state, action);

        case ACTIONS.SET_VIDEO_MENU_PATH: {
            const menu = action.menu;
            const menuStack = [];
            menuStack.push(menu);
            menu.parent && menuStack.push(menu.parent);
            menu.parent.parent && menuStack.push(menu.parent.parent);

            return {
                ...state,
                menuPath: {
                    menu1: menuStack.pop(),
                    menu2: menuStack.pop(),
                    menu3: menuStack.pop(),
                    complete: true,
                }
            }
        }

        case ACTIONS.SET_VIDEO_POST_DATA:{
            return{
                ...state,
                postVideoData: action.payload
            }
        }
        case API_ACTION.CLEAR_VIDEO:
            return {
                ...state,
                video: reducerUtils.initial(),
                menuPath: {menu1: {id: 2, menuNm: 'KFA 경기'}},
            }

        default:
            return state;
    }
}