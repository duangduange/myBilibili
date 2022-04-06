<template>
  <div class="userdetail">
    <div>
        <!-- 头像 -->
      <img src="@/assets/fifoo.jpg" alt="">

      <!-- 资料 -->
      <div class="profile">
        <div>
          <p>
            <span>21</span>
            <span class="userdata">粉丝</span>
          </p>
          <p>
            <span>255</span>
            <span class="userdata">关注</span>
          </p>
          <p>
            <span>666</span>
            <span class="userdata">获赞</span>
          </p>
        </div>

        <!-- 编辑按钮 -->
        <div>
          <div class="editbtn" @click="$router.push('/edit')">编辑资料</div>
        </div>
      </div>
    </div>

    <!-- 介绍 -->
    <div class="intro">
      <div>
        <h2>秃头大兄弟</h2>
      </div>
      <p>这个人太懒了,什么都不想写</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
.userdetail {
  background-color: white;
  padding: 5px 10px;
  :nth-child(1) {
    display: flex;
  }
  img {
    margin-right: 20px;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    transform: translateY(-10px) scale(1.1) // 头像突出效果
  }
  .profile {
    flex: 1;
    margin: 2.778vw 0;
    div:nth-child(1) {
      display: flex;
      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        // 让标签内容纵向排列
        flex-direction: column;
        font-size: 3.611vw;
      }
      p:nth-child(1), p:nth-child(2) {
        border-right: 1px solid #aaa;
      }
      .userdata {
        font-size: 3.889vw;
        color: #666;
      }
    }

    // 编辑资料按钮
    .editbtn {
      flex: 1;
      padding: 1.389vw 0;
      margin: 1.667vw 5.556vw 0 5.556vw;
      border: 1px solid #a6c1ee;
      border-radius: 1.667vw;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a6c1ee;
    }
  }

  // 用户介绍
  .intro {
    padding: 0 0 10px 10px;
    h2 {
      margin: 10px 0;
    }
    p {
      color: #aaa;
      font-style: italic;
    }
  }
}
</style>
