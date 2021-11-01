<template>
  <div class="card">
    <div class="card-header">
      Exam05ForRepeatBinding
    </div>
    <div class="card-body">
      <h6>범위 반복</h6>
      <span v-for="n in 3" :key="n" class="mr-2"><!-- 현재 태그를 3번 반복(n은 1부터 시작), :key는 항상 필수값 -->
        <img :src="require(`@/assets/photos/photo${n}.jpg`)" height="150" />
      </span>

      <hr />

      <h6>배열 항목 반복</h6>
      <div>
        <span v-for="(photo, index) in photos" :key="index" class="mr-2"><!-- index 추가, 0부터 시작 -->
          {{ index }}
          <img :src="require(`@/assets/photos/${photo}`)" height="150" />
        </span>
      </div>

      <hr />

      <h6>객체 배열 항목 반복</h6>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="board in boards" :key="board.bno"> <!-- :key의 목적은 새롭게 추가된 항목이 있는지 확인하기 위해 -->
                <td>{{board.bno}}</td>
                <td>{{board.btitle}}</td>
                <td>{{board.bwriter}}</td>
                <td>{{board.bdate}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import d from "@/data/exam05_data"
export default {
  name: "Exam05ForRepeatBinding",
  components: {},
  data: () => ({
    ...d
  }),
  methods: {},
};
</script>

<style scoped></style>
