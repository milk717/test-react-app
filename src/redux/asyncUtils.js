import { call, put } from 'redux-saga/effects';
/**
 * @param type (액션타입)
 * @param promiseCreator (api 요청 메소드)
 * */
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (...param) => async dispatch => {
        // 요청 시작
        dispatch({ type, ...param });
        try {
            const payload = await promiseCreator(...param);
            dispatch({ type: SUCCESS, payload }); // 성공
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true }); // 실패
        }
    };
};

export const createPromiseSaga = (type, promiseCreator) =>{
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return function* saga(action) {
        try{
            const payload = yield call(promiseCreator, action.payload);
            yield put({type: SUCCESS, payload});
        }catch (e){
            yield put({type: ERROR, error: e, payload: e});
        }
    };
};

export const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null
    }),
    // 로딩중 상태. prevState 의 경우엔 기본값은 null 이지만 다른것을 변경가능
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    // 성공 상태
    success: payload => ({
        loading: false,
        data: payload,
        error: null
    }),
    // 실패 상태
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
};

//비동기 액션을 처리하는 리듀서
//type == 액션타입, key == 저장되는 상태의 key값
export const handleAsyncActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading()
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload)
                };
            default:
                return state;
        }
    };
};