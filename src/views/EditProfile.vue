<template>
  <div class="edit" v-if="model">
    <nav-bar style="margin-bottom: 2.778vw" :turnto="1"></nav-bar>
    <div class="uploadimg">
      <!-- 插槽上传图片 -->
      <van-uploader class="port" :after-read="afterRead" preview-size="100vw"/>
      <edit-banner left="头像">
        <template v-slot:right>
          <img src="@/assets/fifoo.jpg" alt="" style="width: 35px; height: 35px; border-radius: 50%">
        </template>
      </edit-banner>
    </div>
    <edit-banner left="昵称">
      <!-- 居然直接调用数据吐了 -->
      <template v-slot:right>{{model.name}}</template>
    </edit-banner>
    <edit-banner left="UID">
      <template v-slot:right>{{model.uid}}</template>
    </edit-banner>
    <edit-banner left="性别">
      <template v-slot:right>{{model.gender}}</template>
    </edit-banner>
    <edit-banner left="出生日期">
      <template v-slot:right>{{model.bothday}}</template>
    </edit-banner>
    <edit-banner left="个性签名">
      <template v-slot:right>{{model.signature}}</template>
    </edit-banner>

    <!-- 返回按钮 -->
    <div class="backpage" @click="$router.back()">
      <p>返回</p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
import EditBanner from '@/components/users/EditBanner'
export default {
  components: {
    NavBar,
    EditBanner
  },
  data () {
    return {
      uid: '21',
      model: {
        name: '',
        uid: '',
        gender: '',
        bothday: '',
        signature: ''
      }
    }
  },
  methods: {
    submitEdit () {
      this.model.name = '秃头大兄弟'
      this.model.uid = '123454321'
      this.model.gender = 'unknown'
      this.model.bothday = '2001.03'
      this.model.signature = '我签不大你不用怕'
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  },
  // 在created中加载数据
  created () {
    this.submitEdit()
  }
}
</script>

<style lang="less">
.uploadimg {
  position: relative;
  overflow: hidden;
  .port {
    position: absolute;
    opacity: 0;
  }
}
.backpage {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 5.556vw;
    padding: 1.389vw 2.778vw;
    border: 0.278vw solid #fb7299;
    border-radius: 1.667vw;
    color: #fb7299;
    font-size: 5.556vw;
    font-weight: bold;
  }
}
</style>
