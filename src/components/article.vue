<template>
    <div class="mycontent">
        <h1 style="text-align: center;color: #B5D32D;">动物小课堂</h1>
       <div class="tag">
            <h3 style="text-align: center;color: #B5D32D;">这里是病状</h3>
            <el-button v-for="t,index in tag" @click="change(t.id)" :key="index">{{ t.diseaseName }}</el-button>
       </div>
    <div class="content">
        <h1 style="color: #B5D32D;">病例新闻</h1>
        <ul>
            <li v-for="item,index in news" :key="index">{{item.title}}</li>
        </ul>
       </div>
    </div>
</template>

<script>
import request from '@/utils/request';

export default {
    data(){
        return{
            tag:[],
            news:[]
        }
    },
    methods:{
        init(){
            request.get("/disease/list").then((res) =>{
                this.tag = res.data
            }).catch((e) =>{
                this.$message.error("服务器异常")
            })
            this.change(1)
        },
        change(t){
            request.get('/illnews/'+t).then((res) =>{
                this.news = res.data
            }).catch((e) =>{
                this.$message.error("查询失败");
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
        
        width: 90%;
        margin: 5px auto;
    }
    .tag{
        border: 1px solid orange;
        padding: 10px;
        min-height: 200px;
        width: 90%;
        margin: 5px auto;
    }
    .content{
        min-height: 500px;
        width: 80%;
        margin: 5px auto;
    }
    ul{
        list-style: none;
        
    }
    li{
        padding:8px;
        margin: 5px;
    }
    li:hover{
        text-decoration: underline;
        list-style: grey;
        list-style: none
    }
    li::marker{
        color: #CCD524;
        }
</style>