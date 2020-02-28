<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from 'components/Index/Index.vue'
import Sign from 'components/Sign/Sign.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Index,
    Sign
  }
}
</script>

<style>
</style>
