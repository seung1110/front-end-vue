<template>
  <div class="card">
    <div class="card-header">
        Exam04FormBinding
    </div>
    <div class="card-body">
        <form v-on:submit.prevent="handelSubmit"> <!-- 기본 form의 submit은 refresh가 된다.(spa 방식이 아님) -->
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.name"/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Company</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.company"/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" v-model.number="product.price"/> <!-- 입력 값을 숫자형태로 변환 -->
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Info</label>
                <div class="col-sm-10">
                    <textarea class="form-control" v-model="product.info"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Madein</label>
                <div class="col-sm-10">
                    <select class="form-control" v-model="product.madein"> <!-- product.madein에 설정된 값이 default 값으로 설정 -->
                        <option value="한국">한국</option>
                        <option value="미국">미국</option>
                        <option value="독일">독일</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Colors</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="black" v-model="product.colors" />
                        <label class="form-check-label">black</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="white" v-model="product.colors" />
                        <label class="form-check-label">white</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="red" v-model="product.colors" />
                        <label class="form-check-label">red</label>
                    </div>
                </div>
            </div>
             <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sale1</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="product.sale1" /> <!-- value 생략 시 true,false -->
                        <label class="form-check-label">판매 여부</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sale2</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" value="yes" 
                             v-model="product.sale2" true-value="yes" false-value="no"/>
                        <label class="form-check-label">판매 여부</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Sex</label>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" value="man" v-model="product.sex"/>
                        <label class="form-check-label mr-4">Man</label>
                        <input type="radio" class="form-check-input" value="woman" v-model="product.sex"/>
                        <label class="form-check-label">Woman</label>
                    </div>
                </div>
            </div>

            <div>
                <button class="btn btn-info btn-sm mr-3" v-bind:disabled="disabledRegBtn">등록</button>
                <router-link to="/" class="btn btn-info btn-sm">취소</router-link>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    name : "Exam04FormBinding",
    components: {
    },
    data: () => ({
        product : {
            name : "홍길동",
            company : "",
            price : 0,
            colors :[], // checkbox와 같이 다중 선택되는 값은 배열로 선언
            info:"",
            madein : "한국",
            sale1 : false,
            sale2 : "no",
            sex : "woman"
        }
    }),
    methods: {
       handelSubmit(){
          console.log(this.product);
       }
    },
    computed:{ // data 변경 시 자동 계산되는 속성
        disabledRegBtn(){ // data 변경 시 method의 return 값이 다시 계산된다.
            var result = this.product.name === "" || this.product.company === "";
            return result;
        }
    } 
};
</script>

<style scoped>

</style>
