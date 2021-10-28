<template>
  <div class="card">
    <div class="card-header">
        Exam06View
    </div>
    <div class="card-body">
        <h6>params(path variables)로 데이터 얻기</h6>
        <div>
            bno : {{$route.params.bno}} <!-- $route : url을 통해서 넘어오는 정보를 가지고 있는 객체 -->
        </div>
        <div>prop1 : {{bno}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name : "Exam06View",
    components: {
    },
    data: () => ({

    }),
    methods: {
    },
    created(){ // component 생성 시 동작
        console.log("create : component create");
        console.log(this.$route);
        console.log(this.$route.params.bno);
    },
    props: [
        "bno"
    ]
};
</script>

<style scoped>

</style>
