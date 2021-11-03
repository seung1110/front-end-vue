import axios from "axios";

function join(user) {
  //Promise 객체 반환
  return axios.post("/member/join2", {
    mid: user.id,
    mname: user.name,
    mpassword: user.password,
    mrole: user.role,
    memail: user.email,
  });
}

function login(user) {
  return axios.post("/member/login1", 
  `mid=${user.id}&mpassword=${user.password}`); // queryString  방식
}

export default {
  join,
  login,
};
