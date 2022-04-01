<template>
  <div>
    <van-field
      :type="type"
      :label="label"
      :placeholder="placeholder"
      :rule="rule"
      v-model="content" />
  </div>
</template>

<script>
export default {
  props: [
    'type',
    'label',
    'placeholder',
    'rule'
  ],
  data () {
    return {
      content: ''
    }
  },
  watch: {
    content () {
      this.handlerulg()
    }
  },
  methods: {
    handlerulg () {
      if (RegExp(this.rule).test(this.content)) {
        this.$emit('collectDatas', this.content)
      }
    }
  }
}
</script>

<style lang="less">
</style>
