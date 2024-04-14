<template>
  <div class="mycontent" >
      <p class="titlep">动态</p>
   <div class="newslist">
    <ul>
         
         <div class="top_title">
           
            <h1>猫猫知识</h1>
            <span >more>></span>
            
         </div>
        
            <li v-for="dog,index in catnews" :key="index">
              <span>{{dog.title}}</span>
              <p>{{dog.subtitle.slice(0,40)}}....</p>
              <hr style="border: dashed 1px ;">
            </li>
         
      </ul>
      <ul>
          <h1>狗狗知识</h1>
          <li v-for="dog,index in dognews" :key="index">
              <span>{{dog.title}}</span>
              <p>{{dog.subtitle}}....</p>
              <hr style="border: dashed 1px ;">
          </li>
          
      </ul>
      <ul>
          <h1>企业新闻</h1>
          <li v-for="dog,index in news" :key="index">
              <span>{{dog.title}}</span>
              <p>{{dog.subtitle}}....</p>
              <hr style="border: dashed 1px ;">
          </li>
         
      </ul>
   </div>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
    data(){
        return{
            catnews:[],
            dognews:[],
            news:[]
        }
    },
    methods:{
        init(){
            request.get('/illnews/1').then((res) =>{
                this.catnews = res.data;
                
            }).catch((e) =>{
                this.$message.error("查询失败");
            })
            request.get('/illnews/2').then((res) =>{
                this.dognews = res.data;
                
            }).catch((e) =>{
                this.$message.error("查询失败");
            })
            request.get("/news").then((res) =>{
                this.news = res.data
            }).catch((e) =>{
                this.$message.error("查询失败");
            })
        }
    },
    mounted(){
        this.init();
    }
}
</script>

<style scoped>
    .mycontent{
        background-color: #F5F5F5;
        margin-bottom: 50px;
    }
    .titlep{

        color: #B2D11C;
        font-size: 54px;
        margin-left: 50px;
        padding-top: 50px ;
    }
    .newslist{
        display: flex;
        justify-content: center;
        
    }
    .newslist ul {
        width: 20%;
        list-style: none;
        border: 1px solid black;
        padding: 10px;
        margin: 20px;
    }
    .newslist ul li{
        margin: 0px;
        
    }
    .newslist ul li span{
        display: block;
        font-size: 30px;
        
    }
    .newslist ul li p{
        max-height: 60px;
        overflow: hidden;
    }
    .top_title h1{
        margin: 0px;
        margin-bottom: 20px ;
    }
    .top_title{
        display: flex;
        align-items: flex-end;
        justify-content:space-between;
    }
</style>