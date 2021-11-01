<template>
  <div class="card">
    <div class="card-header">
      Exam02Watch
    </div>
    <div class="card-body">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">UserId</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="userId" />
        </div>
      </div>
      <hr />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" :class="`form-control ${bgRed}`" v-model.number="product.price" />
          </div>
        </div>
      </form>
      <hr />
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exam02Watch",
  components: {},
  data: () => ({
    userId: "user1",
    product: {
      name: "정장",
      company: "handsome",
      price: 100000,
    },
    bgRed:""
  }),
  methods: {
    handleButton() {
      this.product = {
        name: "정장2",
        company: "한섬",
        price: 200000,
      };
    },
  },
  watch: {
    userId(newVal, oldVal) { // userId의 값이 변경되면 실행된다.
      console.log(oldVal + " => " + newVal);
      console.log("현재 값 : ", this.userId);
      // 이 위치에서 validation 검증 가능
    },
    product : {
        deep : true, // 객체 요소 변경 확인 여부
        handler(newVal, oldVal){ // newVal와 oldVal은 product 객체를 참조해서 가져오기 때문에 항상 현재 데이터로 할당된다.
             //console.log(oldVal," => ",newVal);
        }

    },
    "product.name"(newVal, oldVal){ // 객체의 요소 변경 시 실행 방식
        console.log(oldVal + " => " + newVal);
        console.log("현재 값 : ", this.product.name);
    },
    "product.price"(newVal, oldVal){
        if(newVal < 0){
            this.bgRed = "bg-danger";
        }else if(newVal > 100000){
            this.bgRed ="bg-primary";
        }else{
            this.bgRed ="bg-success";
        }
    }
  },
};
</script>

<style scoped></style>
