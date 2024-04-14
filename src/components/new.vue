<template>
  <div class="mycontent">
    <div class="bg">
        <img src="../assets/dt.png" alt="">
    </div>
   <div class="check">
    <span  @click="newstype(1)">新闻资讯  NEWS</span>
    <span  @click="newstype(2)">品牌活动  BRAND</span>
   </div>
    <div class="newscontent">
        <div class="news" v-for="item,index in news" :key="index">
            <img :src="item.image" alt="">
            <p>
                <h1>{{item.title}}</h1>
                <span>{{ item.createtime }}</span>
                <p>{{item.subtitle}}</p>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
    data(){
        return{
            news:[]
        }
    },
    methods:{
        init(){
            request.get('/news/list').then((res) =>[
                this.news = res.data
            ]).catch((e) =>{
                this.$message.error("查询失败")
            })
        },
        newstype(type){
            request.get('/news/type?type='+type).then((res) =>{
                this.news  = res.data
            }).catch((e) =>{
                this.$message.error("查询失败")
            })
        }
    },
    mounted(){
        this.init()
    }
}
</script>

<style scoped>
    .mycontent{
        min-height: 500px;
        width: 100%;
        /* background: gray; */
        margin: 5px auto;
    }
    .bg img{
        width: 100%;
    }
    .newscontent{
        width: 100%;
        /* margin: 5px auto; */
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        /* text-align: center; */
    }
    .news{
        width: 20%;
        margin: 30px;
        /* height: 210px; */
    }
    .news img{
        width: 279px;
        height: 210px;
    }
    .news h1 {
        margin: 0px;
    }
    .new p{
        margin: 5px;
    }
    .check{
        display: flex;
    }
    .check span{
        background-color: #ABCD03;
        padding: 10px;
        color: white;
        width: 50%;
        display: block;
    }
    .check span:hover{
        background-color: #738421;
        cursor: pointer;
    }
</style>