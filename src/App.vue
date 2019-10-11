<template>
<div>
  <div v-if="!isLogin">
  <NavHome></NavHome>
  <Register ></Register>
  <Login></Login>
  </div>
  <div v-else>

  </div>
</div>
</template>

<script>
import Landing from './components/Landing.vue'
import NavHome from './components/NavHome.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'

export default {
  data() {
    return {
      message: 'Hello world',
      isLogin: false,
      page : 'login'
    }
  },
  components: {
    Landing, NavHome, Register,Login
  }
}
// #49ACE9
// #B62F8A
// #F2D154
// balck
</script>

<style>
*{
  margin: 0;
  padding: 0
}

</style>