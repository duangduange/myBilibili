<template>
  <div class="info">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png" alt="" class="bg">
    <user-detail />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import UserDetail from '@/components/users/UserDetail'
export default {
  components: {
    NavBar,
    UserDetail
  }
}
</script>

<style lang="less">
.info {
  .bg {
    width: 100%;
    height: 90px;
  }
}
</style>
