<template>
    <div>
        <!-- 导航和轮播 -->
        <div>
            <NavigationVue/>
            <Carousel/>
        </div>
        <!-- 中间内容部分 -->
        <div class="mid">
            <!-- 人物介绍 -->
            <div>
                <Doctorlist/>

                <News/>
            </div>
        </div>
        <!-- 页脚 -->
        <div>
            <Myfooter/>
        </div>
    </div>
</template>

<script>
import NavigationVue from '@/components/navigation.vue'
import Carousel from '@/components/carousel.vue'
import Doctorlist from '@/components/doctorlist.vue'
import News from '@/components/news.vue'
import Myfooter from '@/components/myfooter.vue'

export default {
    components:{
        NavigationVue,
        Carousel,
        Doctorlist,
        News,
        Myfooter
    }
}
</script>

<style scoped>
    .mid{
        min-height: 300px;
    }    
</style>