<template>
  <div class="register">
    <!-- 传标题字符串，不需要加 : -->
    <login-top middleTop="注册bilibili">
      <!-- 使用插槽 -->
      <template v-slot:right>
        <div style="font-size: 3.611vw" @click="$router.push('/login')">
          登录
        </div>
      </template>
    </login-top>
    <login-text
      label="姓名"
      style="margin: 4.167vw 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @collectDatas="res => name = res"
    />
    <login-text
      label="账号"
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
    <login-btn btntext="注册" @registerSubmit="registerSubmit"/>
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
  data () {
    return {
      name: '',
      username: '',
      password: ''
    }
  },
  methods: {
    registerSubmit () {
      alert('由于国家网络安全审查,暂时停止开放注册,感谢您的谅解！')
      // if (this.name && this.username && this.password) {
      //   this.$http.post('/register', {//发送axios请求
      //     name: this.name,
      //     username: this.username,
      //     password: this.password
      //   })
      // }
    }
  }
}
</script>

<style lang="less">

</style>
