><template>
  <div id="app">
    <ad-box />
    <router-view />
  </div>
</template>

<script>
import AdBox from '@/components/common/AdBox'
export default {
  components: {
    AdBox
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
    p {
      margin: 0;
      padding: 0;
    }
  }
</style>
