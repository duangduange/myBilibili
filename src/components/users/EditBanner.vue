<template>
  <div>
    <div class="banner">
      <span>{{left}}</span>
      <span><slot name="right" /></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['left']
}
</script>

<style lang="less">
.comtainer {
  margin: 5.556vw 0;
}
.banner {
  padding: 4.167vw;
  background-color: white;
  border-bottom: 1px solid #fafafa;
  color: #666;
  display: flex;
  justify-content: space-between;
}
</style>
