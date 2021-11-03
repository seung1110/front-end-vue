<template>
  <div class="card">
    <div class="card-header">
      게시물 목록
    </div>
    <div class="card-body">
      <router-link class="btn btn-success btn-sm mb-2" to="/menu07/board/writeform">생성</router-link>
      <div v-if="page">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width:70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width:90px">글쓴이</th>
              <th class="text-center" style="width:120px">날짜</th>
              <th class="text-center" style="width:70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boardList" :key="board.bno">
              <td class="text-center" style="width:70px">{{ board.bno }}</td>
              <td><router-link :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`">{{board.btitle}}</router-link></td>
              <td class="text-center" style="width:90px">{{ board.mid }}</td>
              <td class="text-center" style="width:120px">{{ new Date(board.bdate).toLocaleDateString()}}</td>
              <td class="text-center" style="width:70px">{{ board.bhitcount }}</td>
            </tr>
            <tr>
              <td colspan="5" style="text-align : center;">
                <button class="btn btn-outline-primary btn-sm mr-1" @click="changePageNo(1)">처음</button>
                <button class="btn btn-outline-info btn-sm mr-1" @click="changePageNo(page.pager.startPageNo-1)" 
                  v-if="page.pager.groupNo > 1">이전</button>

                <button v-for="pageNo in range(page.pager.startPageNo,page.pager.endPageNo)" :key="pageNo"
                  @click="changePageNo(pageNo)" :class="`btn btn-sm mr-1 ${(page.pager.pageNo != pageNo) ? 'btn-outline-success':'btn-success'}`">
                  {{pageNo}}
                </button>
                <button class="btn btn-outline-info btn-sm mr-1" @click="changePageNo(page.pager.endPageNo+1)" 
                  v-if="page.pager.groupNo < page.pager.totalGroupNo">다음</button>
                <button class="btn btn-outline-primary btn-sm" @click="changePageNo(page.pager.totalPageNo)">마지막</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <alert-dialog
      :message="errorMessage"
      v-if="alertFlag"
      @close="alertFlag = false"
      :loading="loading"
    />
  </div>
</template>

<script>
import board from "@/apis/board";
import AlertDialog from "@/components/menu07/AlertDialog.vue";
export default {
  name: "List",
  components: {
    AlertDialog,
  },
  data: () => ({
    errorMessage: "",
    alertFlag: false,
    loading: true,
    page: null,
  }),
  methods: {
    changePageNo(pageNo){
      this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(()=>{});
      this.getBoardList(pageNo);
    },
    getBoardList(pageNo) {
      this.loading = true;
      this.alertFlag = true;
      board
        .getBoardList(pageNo)
        .then(response => {
          this.loading = false;
          this.alertFlag = false;
          this.page = response.data;
        })
        .catch(error => {
          if (!error.response) {
            this.loading = false;
            this.errorMessage = "네트워크 오류";
          } else if (error.response.status == 403) {
            this.alertFlag = false;
            this.$router.push("/menu07/auth/jwtauth");
          }
        });
    },
    range(n1,n2){
    var obj = [];
    for(var i = n1; i <= n2; i++){
      obj.push(i);
    }
    return obj;
  }
  },
  created() {
    var pageNo = this.$route.query.pageNo;
    this.getBoardList(pageNo);
  },
  watch:{
    $route(to, from){
      this.getBoardList(to.query.pageNo);
    }
  }
  
};
</script>

<style scoped></style>
