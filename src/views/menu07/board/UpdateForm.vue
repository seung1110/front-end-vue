<template>
  <div class="card">
    <div class="card-header">
        글 수정
    </div>
    <div class="card-body">
        <form v-if="board" v-on:submit.prevent="handleUpdate">
            <div class="form-group row">
            <label class="col-sm-2 col-form-label">제목</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="board.btitle"/>
            </div>
            </div>
            <div class="form-group row">
            <label class="col-sm-2 col-form-label">내용</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="board.bcontent"/>
            </div>
            </div>
            <div class="form-group row">
            <label class="col-sm-2 col-form-label">첨부그림</label>
            <div class="col-sm-10">
                <input type="file" class="form-control-file" ref="battach"/>
            </div>
            </div>
            <div>
                <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="200"/>
            </div>
            <div class="form-group row mt-3">
            <div class="col-sm-12 d-flex justify-content-center">
                <input type="submit" class="btn btn-info btn-sm mr-2" value="수정"/>
                <input type="button" class="btn btn-info btn-sm" value="취소" v-on:click="handleCancel"/>
            </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiBoard from "@/apis/board"
export default {
    name : "UpdateForm",
    components: {
    },
    data: () => ({
        board : null,
        baseURL : axios.defaults.baseURL
    }),
    methods: {
        async handleUpdate(){
            try{
                const multipartFormData = new FormData();
                multipartFormData.append("btitle",this.board.btitle);
                multipartFormData.append("bcontent",this.board.bcontent);
                multipartFormData.append("bno",this.board.bno);
                const battach = this.$refs.battach;
    
                if(battach.files.length != 0){ // 파일 첨부 케이스
                    multipartFormData.append("battach",battach.files[0]);
                }

                this.loading = true;
                this.alertFlag = true;
                const response =  await apiBoard.updateBoard(multipartFormData);
                this.loading = false;
                this.alertFlag = false;
                console.log("수정 성공");
                this.$router.push(`/menu07/board/read?bno=${this.board.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);

            }catch(error){
                if (!error.response) {
                    this.loading = false;
                    this.errorMessage = "네트워크 오류";
                } else if (error.response.status == 403) {
                    this.alertFlag = false;
                    this.$router.push("/menu07/auth/jwtauth");
                }
            }

        },
        handleCancel(){
            this.$router.push(`/menu07/board/read?bno=${this.$route.query.bno}&pageNo=${this.$route.query.pageNo}&hit=false`);
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
