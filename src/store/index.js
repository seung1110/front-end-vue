import Vue from "vue";
import Vuex from "vuex";

import counter from "./counter";

import axiosConfig from "@/apis/axiosConfig"

Vue.use(Vuex);

export default new Vuex.Store({
  // 루트 상태 정의
  state: {
    userId: "",
    authToken: ""
  },
  // 루트 상태값을 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state){
      return state.authToken;
    }
  },
  // 루트 상태값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload){
      state.authToken = payload;
    }
  },
  // 루트 상태값을 변경하는 비동기 메소드 정의(Setter)
  actions: {
    setUserIdByAsync(context, payload) { // payload = {userId: xxx, duration: 3000}
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          // 상태 추적이 가능하도록 트랜잭션인 변이(mutation)을 commit해야 한다.
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration);
      })
        .then(data => {
          console.log("userId 상태 변경 성공: ", data);
        })
        .catch(error => {
          console.log("userId 상태 변경 실패: ", error);
        });
    },

    saveAuth(context, payload){
      //상태 저장 
      context.commit("setUserId",payload.userId);
      context.commit("setAuthToken",payload.authToken);

      //브라우저 새로고침 후에 다시 가져오기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId",payload.userId);
      sessionStorage.setItem("authToken",payload.authToken);

      //다음 요청 시 authorization 헤더 추가 후 요청이 가도록 설정
      axiosConfig.addAuthHeader(payload.authToken);
    },

    loadAuth(context, payload){
      //session storage에 저장된 내용을 읽어 상태 복원
      context.commit("setUserId",(sessionStorage.getItem("userId") !== null)? sessionStorage.getItem("userId") :"");
      context.commit("setAuthToken",sessionStorage.getItem("authToken") || "");

      //authToken이 있을 경우 authorization 헤더 추가
      if(context.state.authToken != ""){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload){
      context.commit("setUserId","");
      context.commit("setAuthToken","");

      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");

      axiosConfig.removeAuthHeader();
    }
  },
  // 루트가 아닌 자식 상태를 정의한 모듈 정의
  modules: {
    counter
  },
});