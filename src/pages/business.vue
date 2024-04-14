<template>
  <div class="mycontent">
         <div>
            <NavigationVue/>
        </div>
      <img class="top_img" src="../assets/hxyw1.jpg" alt="">
      <div class="view">
        
        <h1>医疗诊疗</h1>
            <div class="images">
               
                <img src="../assets/ylzl.jpg" alt="" srcset="">
                <img src="../assets/ylzl3.jpg" alt="" srcset="">
                <img src="../assets/ylzl1.jpg" alt="" srcset="">
            </div>
        
      </div>
      <div class="view bg"  >
        
        <h1>医疗诊疗</h1>
        <div class="images">
            
            <img src="../assets/ylzl.jpg" alt="" srcset="">
            <img src="../assets/ylzl3.jpg" alt="" srcset="">
            <img src="../assets/ylzl1.jpg" alt="" srcset="">
        </div>
    
     </div>

     <div class="view">
        
        <h1>宠物用品</h1>
            <div class="images">
               
                <img src="../assets/ylzl.jpg" alt="" srcset="">
                <img src="../assets/ylzl3.jpg" alt="" srcset="">
                <img src="../assets/ylzl1.jpg" alt="" srcset="">
            </div>
        
      </div>

      <div>
        <Myfooter/>
      </div>
  </div>
</template>

<script>
import NavigationVue from '@/components/navigation.vue'
import Myfooter from '@/components/myfooter.vue'
export default {
    components: { NavigationVue, Myfooter,  },
}
</script>

<style scoped>
    .mycontent{
        width: 100%;
        max-width: 100%;
        /* overflow: hidden; */
    }
    .top_img{
        max-width: 100%;
        width: 100%;
    }
    .view{
        width:100%;
        max-width: 100%;
        margin: 50px 0px;
        overflow: hidden;
        /* display: flex; */
    }
    .view h1{
        color: #abcd03;
        margin-left:12% ;
    }
    .view .images{
        margin: 50px auto;
        display: flex;
        justify-content: center;
    }
    .view .images img{
        overflow: hidden;
        
        width: 280px;
        height: 300px;
    }
    .view .images img:nth-child(2){
        overflow: hidden;
        
        width: 580px;
        height: 300px;
    }
    .bg{
        background-image: url('../assets/lbj.png');
        width:100%;
        overflow: hidden;
    }
    .bg h1{
        color: white;
        margin-left:12% ;
    }
</style>