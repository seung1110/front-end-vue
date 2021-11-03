<template>
  <div class="card">
    <div class="card-header">
      JwtAuth
    </div>
    <div class="card-body">
      <div class="card">
        <div class="card-header">
          회원 가입
        </div>
        <div class="card-body">
          <div class="form-group">
            <label class="form-label">User ID</label>
            <input type="text" class="form-control" v-model="user.id" />
          </div>
          <div class="form-group">
            <label class="form-label">User Name</label>
            <input type="text" class="form-control" v-model="user.name" />
          </div>
          <div class="form-group">
            <label class="col-form-label">User Password</label>
            <input type="text" class="form-control" v-model="user.password" />
          </div>
          <div class="form-group">
            <label class="col-form-label">User Role</label>
            <select class="form-control" name="mrole" v-model="user.role">
              <option value="ROLE_ADMIN">ROLE_ADMIN</option>
              <option value="ROLE_MANAGER">ROLE_MANAGER</option>
              <option value="ROLE_USER" selected>ROLE_USER</option>
            </select>
          </div>
          <div class="form-group">
            <label class="col-form-label">User Email</label>
            <input type="text" class="form-control" v-model="user.email" />
          </div>
          <button class="btn btn-info btn-sm" v-on:click="handleJoin">가입</button>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-header">
          JWT 인증
        </div>
        <div class="card-body">
            <div v-if="$store.state.userId === ''">
              <div class="form-group">
                <label class="form-label">User ID</label>
                <input type="text" class="form-control" id="userId" v-model="user.id"/>
              </div>
              <div class="form-group">
                <label for="userPassword" class="col-form-label">User Password</label>
                <input type="text" class="form-control" v-model="user.password"/>
              </div>
              <button class="btn btn-info btn-sm" v-on:click="handleLogin">로그인</button>
            </div>
            <div v-if="$store.state.userId !== ''">
              <button class="btn btn-info btn-sm mr-2" v-on:click="handleLogout">로그아웃</button>
            </div>
        </div>
      </div>
    </div>
    <alert-dialog :message="alertDialogMessage" v-if="alertFlag" @close="alertFlag = false" :loading="loading"/>

  </div>
</template>

<script>
import auth from "@/apis/auth";
import AlertDialog from "@/components/menu07/AlertDialog";
export default {
  name: "",
  components: {
    AlertDialog,
  },
  data: () => ({
    user: {
      id: "user",
      name: "사용자",
      password: "12345",
      role: "ROLE_USER",
      email: "user@mycompany.com",
    },
    alertDialogMessage: "",
    alertFlag: false,
    loading : false
  }),
  methods: {
    async handleJoin() {
      try {
        this.alertFlag = true;
        this.loading = true;

        const response = await auth.join(this.user);
        this.loading = false;
        if (response.data.result == "success") {
          this.alertDialogMessage = "회원가입 성공";
          console.log("회원가입 성공");
        }else if(response.data.result == "duplicated"){
          throw {message:"아이디 중복"};
        }else if(response.data.result == "fail"){
          throw {message:"서버측 오류 있음"};
        }
      } catch (error) {
        this.loading = false;
        this.alertDialogMessage = `회원가입 실패(${error.message})`;
      } 
    },
    async handleLogin(){
      try {
        const response = await auth.login(this.user);
        console.log(response);
        this.$store.dispatch("saveAuth", {authToken : response.data.jwt, userId : response.data.mid});
      } catch (error) {
        try {
          if(error.reponse.status == 401){
              this.alertFlag = true;
              this.alertDialogMessage = "로그인 실패(잘못된 아이디 또는 패스워드)";
          }
        }catch(err){
          this.alertFlag = true;
          this.alertDialogMessage = "로그인 실패(네트워크 에러)";
        }

      } 
    },
    handleLogout(){
      this.$store.dispatch("deleteAuth");
    }
  },
};
</script>

<style scoped></style>
