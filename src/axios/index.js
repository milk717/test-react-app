import axios from 'axios';

const BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
const MOCKUP_URL = process.env.REACT_APP_MOCKUP_JSON_SERVER_API_URL;

export default axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const useMockApi =  axios.create({
    baseURL: MOCKUP_URL,
    timeout: 2000,
})