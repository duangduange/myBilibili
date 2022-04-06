<template>
  <div class="home">
    <!-- 固定导航栏 -->
    <nav-bar :turnto="1"></nav-bar>

    <!-- 标签栏中插入文章组件 -->
    <van-tabs v-model="active" title-active-color="#a6c1ee" line-height="1px" line-width="25px" swipeable animated>
      <van-tab v-for="(item, index) in category" :key="index" :title="item">
        <articles />
        <articles />
        <articles />
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import Articles from '@/components/articles/AlignArticles'
export default {
  components: {
    NavBar,
    Articles
  },
  data () {
    return {
      active: 0,
      category: ['首页', '动画', '番剧', '舞蹈', '影评', '鬼畜', '游戏', '植发指南']
    }
  }
}
</script>

<style lang="less" scoped>
</style>
