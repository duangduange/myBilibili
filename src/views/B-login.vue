<template>
  <div class="login">
    <!-- 从register组件修改-->
    <login-top middleTop="登录bilibili">
      <!-- 使用插槽 -->
      <template v-slot:right>
        <div style="font-size: 3.611vw" @click="$router.push('/register')">
          注册
        </div>
      </template>
    </login-top>
    <login-text
      label="账号"
      style="margin: 4.167vw 0"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @collectDatas="res => name = res"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      type="password"
      @collectDatas="res => name = res"
    />
    <login-btn btntext="登录" @registerSubmit="registerSubmit"/>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods: {
    registerSubmit () {
      // 么得请求
    }
  }
}
</script>

<style lang="less">

</style>
