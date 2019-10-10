<template>
  <nav>
    <div class="click">
    <h2>Register</h2>
    <h2>Login</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavHome'

}
</script>

<style scoped>
nav{
  background-color: rgb(50, 48, 70);
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
}
.click{
  display: flex;
  margin-right: 15px;
}
h2{
font-family: 'proximanova';
color: white;
margin-top: 13px; 
margin-left: 12px;
margin-right: 12px;
font-size: 21pt;
}
</style>