<template>
<div>
  <div v-if="!isLogin">
    <Landing></Landing>
  </div>
  <div v-else>
  </div>
</div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  data() {
    return {
      message: 'Hello world',
      isLogin: false,
      page : 'landing'
    }
  },
  components: {
    Landing
  }
}
// #49ACE9
// #B62F8A
// #F2D154
// balck
</script>

<style>

</style>