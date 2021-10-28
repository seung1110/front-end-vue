<template>
  <div class="card">
    <div class="card-header">
      Exam05View
    </div>
    <div class="card-body">
      <h6>params(path variables)로 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
        <li><router-link :to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
        <li><router-link :to="{ path: `/menu01/exam06view/${bno2}` }">exam06view/5</router-link></li>
        <li><router-link :to="{ name: 'menu01_exam06view', params: { bno: bno3 } }">exam06view/7</router-link></li>
      </ul>

      <h6>정적 prop 객체 전달</h6>
      <ul>
          <li><router-link to="/menu01/exam07view">exam07view</router-link></li>
      </ul>

      <h6>QueryString 방식 전달</h6>
      <ul>
          <li><router-link to="/menu01/exam08view?kind=freeboard&color=blue">exam08view?kind=freeboard&color=blue</router-link></li>
          <li><router-link :to="`/menu01/exam08view?kind=${kind1}&color=${color1}`">exam08view?kind=freeboard&color=red</router-link></li>
          <li><router-link :to="{ path: `/menu01/exam08view?kind=${kind2}&color=${color2}` }">exam08view?kind=album&color=white</router-link></li>
          <li><router-link :to="{ name: 'menu01_exam08view',query:{kind : kind3, color : color3} }">exam08view?kind=qa&color=green</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam05View",
  components: {},
  data: () => ({ // data는 항상 function 형태로 작성!!, return 값이 component의 data가 된다.
    bno1: 3,
    bno2: 5,
    bno3: 7,
    kind1: "freeboard",
    color1:"red",
    kind2: "album",
    color2:"white",
    kind3: "qa",
    color3:"green",
  }),
  methods: {},
};
</script>

<style scoped></style>
