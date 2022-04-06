<template>
  <div>
    <nav-bar :turnto="0" @click="$router.push('/')" />
    <div class="video">
      <video controls="controls" src="@/assets/7758258.mp4"></video>
    </div>
    <p class="title">
      <span>内涵TV</span>
      <span>消失的群体</span>
      <van-icon class="arr" name="arrow-down" @click="omg" />
    </p>
    <p class="information">
      <span>华语群星</span>
      <span>521次观看</span>
      <span>12弹幕</span>
      <span>04-22</span>
    </p>

    <div class="btns">
      <p>
        <van-icon name="star-o" />
        <span>收藏</span>
      </p>
      <p>
        <van-icon name="down" />
        <span>缓存</span>
      </p>
      <p>
        <van-icon name="guide-o" />
        <span>分享</span>
      </p>
      <p>
        <van-icon name="comment-o" />
        <span>6评论</span>
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  components: {
    NavBar
  },
  methods: {
    // 弹出提示，居然不能写标签里
    omg () {
      this.$toast('没有接口好难受555')
    }
  }
}

</script>

<style lang="less" scoped>
.video {
  width: 100%;
  video {
    width: 100%;
  }
}
.title {
  padding: 5px 10px;
  span:nth-child(1) {
    padding: 5px;
    margin-right: 10px;
    border-radius: 8px;
    background-color: #ddd;
    font-size: 10px;
    color: #a6c1ee;
  }
  .arr {
    float: right;
  }
}
.information {
  padding: 5px 10px;
  font-size: 12px;
  color: #999;
  span {
    margin: 5px;
  }
  span:nth-child(1) {
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
    color: #333;
  }
}
.btns p {
  display: inline;
  margin: 10px;
  &:last-child {
    float: right;
  }
  span {
    margin-left: 5px;
    font-size: 12px;
  }
}
</style>
