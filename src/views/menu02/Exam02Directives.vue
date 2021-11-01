<template>
  <div class="card">
    <div class="card-header">
        Exam02Directives
    </div>
    <div class="card-body">
        <!-- 데이터 바인딩 -->
        <div>
            <img class="mr-2" src="@/assets/photos/photo1.jpg" width="300"/>
            <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300"/>
        </div>

        <hr/>
        <!-- 요소 숨김 여부 -->
        <span v-if="sale" class="mr-2"> <!-- false면 현재 태그 삭제 -->
            <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300"/>
        </span>

        <span v-show="sale"> <!-- false면 현재 태그 삭제 -->
            <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300"/>
        </span>

        <hr/>  

        <!-- html 태그 처리 -->
        <p>정보 : {{info}}</p>
        <p>정보 : <span v-html="info"></span></p>
        <hr/>
        <button class="btn btn-info btn-sm" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
    name : "Exam02Directives",
    components: {
    },
    data: () => ({
        photoFileName:"photo2.jpg",
        sale:true,
        info : `<div style="background-color : #eeeeee">스타일 적용 확인</div>`
    }),
    methods: {
        changeData(){
            if(this.photoFileName == "photo2.jpg"){
                this.photoFileName = "photo3.jpg";
            }else{
                this.photoFileName ="photo2.jpg";
            }
            this.sale = !this.sale;
        }
    }   
};
</script>

<style scoped>

</style>
