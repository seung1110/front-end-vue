<template>
  <div class="card">
    <div class="card-header">
        게시물 내용
    </div>
    <div class="card-body">
      <div v-if="board != null">
        <div class="d-flex">
          <div>
            <p>bno: {{board.bno}}</p>
            <p>btitle: {{board.btitle}}</p>
            <p>bcontent: {{board.bcontent}}</p>
            <p>mid: {{board.mid}}</p>
            <p>bdate: {{new Date(board.bdate).toLocaleDateString()}}</p>
            <p>bhitcount: {{board.bhitcount}}</p>
            <p v-if="board.battachoname">
                battachoname: 
                <a :href="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`"> <!-- axios 사용 안해서 header에 jwt 값이 없음 -->
                  {{board.battachoname}}
                </a>
            </p>
          </div>
          <div class="d-flex align-items-center ml-5">
            <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="300"/>
          </div>
        </div>

        <div>
          <router-link :to="`/menu07/board/list?pageNo=${$route.query.pageNo}`" 
            class="btn btn-info btn-sm mr-2">목록</router-link>
          <router-link :to="`/menu07/board/updateform?bno=${$route.query.bno}&pageNo=${$route.query.pageNo}`" 
            class="btn btn-info btn-sm mr-2">수정</router-link>
          <button class="btn btn-info btn-sm mr-2" @click="handleRemove">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiBoard from "@/apis/board"

export default {
    name : "Read",
    components: {
    },
    data: () => ({
      board : null,
      baseURL : axios.defaults.baseURL
    }),
    methods: {
      async handleRemove(){
        try{
          const response = await apiBoard.deleteBoard(this.board.bno);
          this.$router.push(`/menu07/board/list?pageNo=${this.$route.query.pageNo}`);
        }catch(error){
          console.log(error);
        }
      }
    },
    created(){
      apiBoard.readBoard(this.$route.query.bno,this.$route.query.hit)
        .then((response)=>{
          this.board = response.data;
        }).catch((error)=>{

        });
    }
};
</script>

<style scoped>

</style>
