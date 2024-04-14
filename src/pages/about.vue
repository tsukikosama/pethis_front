<template>
    <div class="mycontent">
         <!-- 导航和轮播 -->
          <div>
              <NavigationVue/>
          </div>
        <div>
            <About/>
        </div>
        <div>
              <Myfooter/>
          </div>
    </div>
  </template>
  
  <script>
  import Tag from '@/components/article.vue'
  import NavigationVue from '@/components/navigation.vue'
  import About from '@/components/about.vue'
  import Myfooter from '@/components/myfooter.vue'
  import New from '@/components/new.vue'
  export default {
    components: { Tag,NavigationVue, About,Myfooter, New },
  
  }
  </script>
  
  <style scoped>
      .mycontent{
  
      }
  </style>