<template>
  <div class="info">
    <nav-bar :turnto="0" />
    <img src="@/assets/bannerTop_new.png" alt="" class="bg">
    <user-detail />
    <user-article />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import UserDetail from '@/components/users/UserDetail'
import UserArticle from '@/components/users/UserArticle'
export default {
  components: {
    NavBar,
    UserDetail,
    UserArticle
  }
}
</script>

<style scoped lang="less">
.info {
  .bg {
    width: 100%;
    height: 90px;
  }
  img {
    vertical-align: bottom;
  }
}
</style>
