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
  }
  .profile {
    flex: 1;
    margin: 10px 0;
    div:nth-child(1) {
      display: flex;
      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        // 让标签内容纵向排列
        flex-direction: column;
        font-size: 13px;
      }
      p:nth-child(1), p:nth-child(2) {
        border-right: 1px solid #aaa;
      }
      .userdata {
        font-size: 14px;
        color: #666;
      }
    }

    // 编辑资料按钮
    .editbtn {
      flex: 1;
      padding: 5px 0;
      margin: 6px 20px 0 20px;
      border: 1px solid #fb7a9f;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fb7a9f;
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
