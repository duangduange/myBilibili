<template>
  <div class="login">
    <!-- 从register组件修改-->
    <login-top middleTop="登录bilibili">
      <!-- 使用插槽 -->
      <template v-slot:right>
        <div style="font-size: 3.611vw; color: #666;" @click="$router.push('/register')">
          注册
        </div>
      </template>
    </login-top>
    <login-text
      label="账号"
      style="margin: 4.167vw 0"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @collectDatas="res => model.username = res"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      type="password"
      @collectDatas="res => model.password = res"
    />
    <login-btn btntext="登录" @registerSubmit="registerSubmit"/>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop'
import LoginText from '@/components/common/LoginText'
import LoginBtn from '@/components/common/LoginBtn'
export default {
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  data () {
    return {
      model: {} // 记录输入信息
    }
  },
  methods: {
    registerSubmit () {
      if (this.model.username && this.model.password) {
        this.$toast.success('登录成功')
        setTimeout(() => {
          this.$router.push('/info')
        }, 1000)
      } else {
        this.$toast.fail('请填写正确账号信息')
      }
    }
  }
}
</script>

<style lang="less">

</style>
