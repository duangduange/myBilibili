<template>
  <!-- 中间搜索框使用响应式布局,两边图标固定大小 -->
  <div class="navbar">
    <div>
      <img src="../../assets/logo.png" @click="turnto? $router.push('/info'): $router.push('/')">
    </div>
    <div>
      <p>
        在这里输入内容哦
        <van-icon class="iptico" name="search" />
      </p>
    </div>
    <div>
      <img src="../../assets/fifoo.jpg" @click="$router.push('/info')">
      <p>下载App</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'turnto'
  ]
}
</script>

<style scoped lang="less">
.navbar {
  // 固定顶部
  position: sticky;
  top: 0;
  z-index: 9;

  height: 45px;
  background-color: white;
  display: flex;
  div:nth-child(1) {
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 45%;
      height: 100%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    p {
      position: relative;
      background-color: #f4f4f4;
      padding: 1.111vw 0 1.111vw 15px;
      width: 85%;
      border-radius: 3.333vw;
      font-size: 3.333vw;
      text-align: center;
      color: #aaa;
    }
    .iptico {
      position: absolute;
      left: 2.778vw;
      top: 1.944vw;
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    p {
      padding: 5px 10px;
      margin: 0 10px;
      background-color: #a6c1ee;
      color: white;
      font-size: 13px;
      border-radius: 6px;
    }
  }
}
</style>
