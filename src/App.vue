<template>
<div>
  <div v-if="!isLogin">
    <NavHome @changePage="changeTo"></NavHome>
    <transition name="slide-fade">
      <Register v-if="page==='register'" @changePage="changeTo"></Register>
      <Login v-if="page==='login'" @changeLogin="changeStatus"></Login>
    </transition>
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
  },
  methods:{
    changeTo(input){
      this.page = input
    },
    changeStatus(input){
      this.isLogin = input
    }
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
body{
  background-image: url(./assets/miring.png);
  background-size: 15%
}
.slide-fade-enter-active {
  animation: rotateInUpLeft 0.5s;
}
.slide-fade-leave-active {
  animation: rotateInDownLeft 0.5s reverse;
}
</style>