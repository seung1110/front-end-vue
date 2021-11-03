import axios from "axios";

// 기본 경로 설정
axios.defaults.baseURL = "http://localhost";

// 요청 http의 authorization header 추가, 값은 JWT로 설정
function addAuthHeader(authToken){
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

// 요청 http의 authorization header 제거
function removeAuthHeader(authToken){
    delete axios.defaults.headers.common['Authorization']; // 객체의 요소 제거
}

//객체 내보내기
export default {
    addAuthHeader,
    removeAuthHeader
}