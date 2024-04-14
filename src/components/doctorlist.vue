<template>
  <div>
     <el-row  class="row-bg">
        <el-col :span="8" v-for="item,index in doctor" :key="index">
            <!-- left -->
            <div class="avator">
                <img :src="item.image" alt="">
            </div>
            <!-- right -->
            <div class="info">
                <el-span>{{item.name}}</el-span>
                <p>{{item.post}}</p>
                <hr>
                <p v-for="title,index in item.titles" :key="index">
                {{ title }}</p>
               
            </div>
        </el-col>
         
        </el-row>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  data(){
    return{
      doctor:[]
    }
  },
  methods:{
    init(){
      request.get('/doctor/hot').then((res) =>{
        this.doctor = res.data;

      }).catch((e) =>{
        this.$message.error("查询失败")
      })
    }
  },
  mounted() {
    this.init()
  },
}
</script>

<style scoped>
    .el-row {
        margin: 20px;
        justify-content: space-between;
     }
    .el-col {
      border-radius: 4px;
      display: flex;
      padding: 20px; 
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .avator {
      width: 50%;
  }
  .avator img{
       width: 100%;
    height: 100%;
    object-fit:cover;
  }
  .info{
      width: 50%;
      text-align: center;
      margin-top: 10%;
  }
</style>