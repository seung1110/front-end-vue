<template>
  <div class="card">
    <div class="card-header">
        Exam02Directives
    </div>
    <div class="card-body">
        <div>
            <img class="mr-2" src="@/assets/photos/photo1.jpg" width="300"/>
            <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300"/>
        </div>
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
        photoFileName:"photo2.jpg"
    }),
    methods: {
        changeData(){
            if(this.photoFileName == "photo2.jpg"){
                this.photoFileName = "photo3.jpg";
            }else{
                this.photoFileName ="photo2.jpg";
            }
        }
    }   
};
</script>

<style scoped>

</style>
