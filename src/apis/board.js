import axios from "axios";

function getBoardList(pageNo=1){
    const promise = axios.get('/board/list',{params:{pageNo}}); //axios.get 방식에서 querystring을 사용하기 위해서는 params에 추가
    return promise;
}

function createBoard(multipartFormData){
    return axios.post('/board/create',multipartFormData);
}

function readBoard(bno, hit){
    return axios.get(`/board/${bno}`,{params:{hit}});  
}

function updateBoard(multipartFormData){
    return axios.post('/board/update',multipartFormData);  
}

function deleteBoard(bno){
    return axios.delete(`/board/${bno}`);  
}

export default {
    getBoardList,
    createBoard,
    readBoard,
    updateBoard,
    deleteBoard
}