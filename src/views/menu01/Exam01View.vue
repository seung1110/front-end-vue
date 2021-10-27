<template>
  <div class="card">
    <div class="card-header">
        Exam01
    </div>
    <div class="card-body">
        <h6>선언적 방식 화면 이동</h6>
        <router-link to="/menu01/exam02view" class="btn btn-sm btn-info">/menu01/exam02view</router-link><hr/>
        <router-link v-bind:to="`/menu01/exam02view`" class="btn btn-sm btn-info">/menu01/exam02view</router-link><hr/>
        <router-link :to="{path:'/menu01/exam02view'}" class="btn btn-sm btn-info">/menu01/exam02view</router-link><hr/>
        <router-link :to="{name:'menu01_exam02view'}" class="btn btn-sm btn-info">/menu01/exam02view</router-link>

    </div>
  </div>
</template>

<script>
export default {
    // component의 대표 이름(크롬의 devtools에 표시되는 이름), default 파일명
    name : "",
    // 추가하고 싶은 components 등록
    components: {
    },
    // component 데이터 정의
    data: () => ({

    }),
    // component method
    methods: {
    }
};
</script>

<style scoped>

</style>

