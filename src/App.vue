<template>
<div>
  <div v-if="!isLogin">
  <NavHome></NavHome>
  <Register ></Register>
  <Login></Login>
  </div>
  <div v-else>
    <Main></Main>
  </div>
</div>
</template>

<script>
import Landing from './components/Landing.vue'
import NavHome from './components/NavHome.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Main from './components/Main.vue'

export default {
  data() {
    return {
      message: 'Hello world',
      isLogin: true,
      page : 'login'
    }
  },
  components: {
    Landing, NavHome, Register,Login, Main
  }
};
// #49ACE9
// #B62F8A
// #F2D154
// balck
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>