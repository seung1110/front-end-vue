<template>
  <div class="card">
    <div class="card-header">
        글쓰기
    </div>
    <div class="card-body">
      <form @submit.prevent="handleAdd">
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
        <div class="form-group row">
          <div class="col-sm-12 d-flex justify-content-center">
            <input type="submit" class="btn btn-primary btn-sm mr-2" value="추가"/>
            <input type="button" class="btn btn-primary btn-sm" value="취소" v-on:click="handleCancel"/>
          </div>
        </div>
      </form>
    </div>
    <alert-dialog :message="errorMessage" v-if="alertFlag" @close="alertFlag = false" :loading="loading"/>
  </div>
</template>

<script>
import apiBoard from "@/apis/board"
export default {
    name : "WriteForm",
    components: {
    },
    data: () => ({
        board : {btitle : "", bcontent : ""},
        errorMessage: "",
        alertFlag: false,
        loading: true,
    }),
    methods: {
        async handleAdd(){
            try{
                const multipartFormData = new FormData();
                multipartFormData.append("btitle",this.board.btitle);
                multipartFormData.append("bcontent",this.board.bcontent);
                multipartFormData.append("mid",this.$store.state.userId);
                const battach = this.$refs.battach;
    
                if(battach.files.length != 0){ // 파일 첨부 케이스
                    multipartFormData.append("battach",battach.files[0]);
                }

                this.loading = true;
                this.alertFlag = true;
                const response =  await apiBoard.createBoard(multipartFormData);
                this.loading = false;
                this.alertFlag = false;
                console.log(response);
                this.$router.push("/menu07/board/list");
               console.log(response);
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
            this.$router.push("/menu07/board/list");
        }
    }
};
</script>

<style scoped>

</style>
