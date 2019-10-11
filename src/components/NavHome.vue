<template>
  <nav>
    <div class="logo">
      <img src="../assets/logobc.png" alt srcset />
    </div>
    <div class="click">
      <h2 @click="toRegist">Register</h2>
      <h2 @click="toLogin">Login</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavHome",
  data() {
    return {
      
    }
  },
  methods: {
    toRegist(){
      this.$emit('changePage', 'register')
    },
    toLogin(){
      this.$emit('changePage', 'login')
    }
  },
}
</script>

<style scoped>
nav {
  background-color: rgb(50, 48, 70);
  height: 68px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
img {
  height: 61px;
}
.logo {
  margin-left: 14px;
  display: flex;
  align-items: center;
}

.logo:hover {
  cursor: pointer;
}
.click {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
h2 {
  font-family: "proximanova";
  color: white;
  font-weight: 300px;
  margin: 13px;
  font-size: 21pt;
}
h2:hover {
  cursor: pointer;
  color: rgb(250, 219, 81);
}
</style>