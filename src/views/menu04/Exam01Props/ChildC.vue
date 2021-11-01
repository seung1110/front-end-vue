<template>
  <div class="card">
    <div class="card-header">
      ChildC
    </div>
    <div class="card-body">
      <p>propA: {{propA + 10}}</p>
      <p>propB: {{propB + 10}}</p>
      <p>propC: {{propC + 10}}</p>
      <p>propD: {{propD}}</p>
      <p>propE: {{propE + 10}}</p>
      <p>propF: {{propF.message}}</p>
      <p>propG: 
        <ul>
          <li v-for="(value, index) in propG" :key="index">
            {{value}}
          </li>
        </ul>
      </p>
      <p>propI: {{propI}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildC",
  components: {},
  data: () => ({}),
  methods: {},
  props: {
    // 일치하지 않을 경우 console에 경고 메세지 출력
    propA: null, //어떤 타입이든 가능

    propB: Number, //숫자 타입만 가능

    propC: [String, Number], //여러 개의 타입이 가능(배열, 객체는 불가능)

    propD: {
      //문자 타입,
      type: String,
      required: true, // 필수 요소, 생략 시 console에 경고 메세지가 출력
    },

    propE: {
      //숫자 타입, 기본값은 5
      type: Number,
      default: 5, 
    },

    propF: {
      //객체 타입, 기본값은 {message: "Hello"}
      type: Object,
      default() {
        return { message: "Hello" };
      },
    },

    propG: {
      //배열 타입, 기본값은 ["black", "white"]
      type: Array,
      default() {
        return ["black", "white"];
      },
    },

    propI: {
      type : Number,
      validator(value) { //사용자 유효성 검사 가능
        return value > 0; // 
      },
    },
  },
};
</script>
