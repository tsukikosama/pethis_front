<template>
    <div class="mycontent">
         <!-- 导航和轮播 -->
          <div>
              <NavigationVue/>
          </div>
        <div>
            <New/>
        </div>
        <div>
              <Myfooter/>
          </div>
    </div>
  </template>
  
  <script>
  import Tag from '@/components/article.vue'
  import NavigationVue from '@/components/navigation.vue'
  import Article from '@/components/article.vue'
  import Myfooter from '@/components/myfooter.vue'
  import New from '@/components/new.vue'
  export default {
    components: { Tag,NavigationVue, Article,Myfooter, New },
  
  }
  </script>
  
  <style scoped>
      .mycontent{
  
      }
  </style>