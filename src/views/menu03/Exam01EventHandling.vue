<template>
  <div class="card">
    <div class="card-header">
        Exam01EventHandling
    </div>
    <div class="card-body">
      <div>
        <h6>[Event Handling]</h6>
        <button v-on:click="handleBtn1" class="btn btn-sm btn-info mr-2">버튼1</button>
        <button @click="handleBtn2('vue is good', $event)" class="btn btn-sm btn-info mr-2" name="btn2">버튼2</button>
        <button @click="handleBtn2('vue is good', $event)" class="btn btn-sm btn-info mr-2" name="btn3">버튼3</button>
        <hr/>
        <a href="/" @click.prevent="handleLink">link</a> <!-- prevent는 event.preventDefault()와 같은 역할-->
        <hr/>
        <form @submit.prevent="handleSubmit">
          <div class="d-flex align-items-center"> <!-- flext 정렬 후 수직 정렬 수직정렬 : align-items-center-->
            <input type="submit" value="제출" class="btn btn-info btn-sm mr-2"/>
            <button class="btn btn-info btn-sm mr-2">제출2</button>
            <input type="image" :src="require('@/assets/logo.png')" height="30"/>
          </div>
        </form>
        <hr/>
        <button @click.ctrl="handleBtn3" class="btn btn-sm btn-info mr-2" name="btn3">버튼3</button> <!--ctrl키 누르고 클릭 시 이벤트 발생 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "Exam01EventHandling",
    components: {
    },
    data: () => ({

    }),
    methods: {
      handleBtn1(){
        console.log("handleBtn1 run");
      },
      handleBtn2(arg,event){
        console.log("args : ",arg);
        console.log("event : ",event);
        // tag에 지정한 name을 event 객체를 통해 얻을 수 있다.
        if(event.target.name === "btn2"){
          console.log("btn2 클릭");
        }else if(event.target.name === "btn3"){
          console.log("btn3 클릭");
        }

      },
      handleSubmit(){
        console.log("AJAX 통신");
      },
      handleBtn3(){
        console.log("btn3 event");
      }
    }
};
</script>

<style scoped>

</style>
