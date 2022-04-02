<template>
  <div class="articles">
    <!-- 懒加载本地图片无果 -->
    <div class="container"><img v-lazy="require('../../assets/art1.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art2.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art3.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art4.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art5.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art6.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art7.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art8.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art9.png')"></div>
    <div class="container"><img v-lazy="require('../../assets/art10.png')"></div>
    <!-- <img v-for="item in itemList" v-lazy="require('')" :key="item.id" /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // itemList: [
      //   { id: 1, img: '../../assets/art1.png' },
      //   { id: 2, img: '../../assets/art2.png' },
      //   { id: 3, img: '../../assets/art3.png' },
      //   { id: 4, img: '../../assets/art4.png' },
      //   { id: 5, img: '../../assets/art5.png' },
      //   { id: 6, img: '../../assets/art6.png' }
      // ]
    }
  }
}
</script>

<style lang="less" scoped>
// flex布局究极解法？？
.articles {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .container {
      width: 40%;
      margin: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }

}
</style>
