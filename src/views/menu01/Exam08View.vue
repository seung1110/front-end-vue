<template>
  <div class="card">
    <div class="card-header">
        Exam08View
    </div>
    <div class="card-body">
        <div>kind : {{$route.query.kind}}</div>
        <div>color : {{$route.query.color}}</div>
        <div>kind : {{kind}}</div>
        <div>color : {{color}}</div>

        <hr/>

        <button class="btn btn-sm btn-info mr-2" @click="goHome">홈으로</button>
        <button class="btn btn-sm btn-info mr-2" @click="goBack">뒤로 이동</button>
    </div>
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
        goHome(){
            this.$router.push("/");
        },
        goBack : function(){
            this.$router.go(-1); // 직전 url로 이동
        }
    },
    props:[
        "kind",
        "color"
    ]
};
</script>

<style scoped>

</style>
