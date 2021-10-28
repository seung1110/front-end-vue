<template>
  <div class="card">
    <div class="card-header">
      Exam01Expressions
    </div>
    <div class="card-body">
        <h5>상품 정보</h5>
        <p>번호 : {{no}}</p>
        <p>이름 : {{name}}</p>
        <p>회사 : {{company}}</p>
        <p>가격 : {{price}}</p>
        <p>가격 : {{getPrice()}}</p>
        <p>판매 여부 : {{sale?"판매":"품절"}}</p>
        <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam01Expressions",
  components: {},
  data: () => ({
    no: 1,
    name: "미니백",
    company: "클레인",
    price: 300000,
    sale: true,
  }),
  methods: {
      getPrice(){
          return this.price;
      },
      changeData(){
          this.price += 1000;
          this.sale = !this.sale;
      }
  },
};
</script>

<style scoped></style>
