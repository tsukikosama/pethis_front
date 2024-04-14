<template>
  <div class="mycontent">
       <!-- 导航和轮播 -->
        <div>
            <NavigationVue/>
        </div>
   
      <!-- 内容 -->
      <div>
        <Article/>
      </div>
      <div>
            <Myfooter/>
        </div>
  </div>
</template>

<script>

import NavigationVue from '@/components/navigation.vue'
import Article from '@/components/article.vue'
import Myfooter from '@/components/myfooter.vue'
export default {
  components: { NavigationVue, Article,Myfooter },

}
</script>

<style scoped>
    .mycontent{

    }
</style>