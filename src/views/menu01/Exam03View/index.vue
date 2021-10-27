<template>
  <div class="card">
    <div class="card-header">
        Exam03View
    </div>
    <div class="card-body">
        <div>
          <h6>선언적 방식 component 전환</h6>
          <router-link to="/menu01/exam03view/subacomponent" class="btn btn-info btn-sm mr-2">SubAComponent</router-link>
          <router-link to="/menu01/exam03view/subbcomponent" class="btn btn-info btn-sm mr-2">SubBComponent</router-link>
          
          <h6>프로그래밍 방식 component 전환</h6>
          <button @click="goUrl('a')" class="btn btn-info btn-sm mr-2">SubAComponent</button>
          <button @click="goUrl('b')" class="btn btn-info btn-sm mr-2">SubBComponent</button>
        </div>

      <div class="mt-2">
        <router-view></router-view> <!--/menu01/exam03view/component 가 표시된다. -->
      </div>
    </div >
  </div>
</template>

<script>
export default {
    name : "",
    components: {
    },
    data: () => ({

    }),
    methods: {
      goUrl(kind){
        this.$router.push(`/menu01/exam03view/sub${kind}component`);
      }
    }
};
</script>

<style scoped>

</style>
