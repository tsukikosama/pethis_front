<template>
  <div class="mycontent">
    <img src="../assets/image.png" class="top" alt="">

    <div class="block">
        
        <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
        </el-carousel>
    </div>
    
    <div class="bottom">
        <h1>精良设备</h1>
        <img src="../assets/sb.png" class="mid" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .mycontent{

    }
    .top{
        width: 100%;
    }
    .mid{
        width: 100%;
    }
    .bottom h1{
        width: 80%;
        margin: 10px auto;
        color: #ABCD03;
    }
</style>