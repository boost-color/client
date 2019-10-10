<template>
<div class="login">
  <div class="bg">
    <div class="formsignup">
      <form>
        <div class="flexin">

<label for="email">Email</label>
 <input type="email" name="email" id="inputemail">
        </div>
        <div class="flexin">

 <label for="password">Password</label>
 <input type="password" name="" id="">
        </div>
  <b-button variant="warning">Button</b-button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login'

}
</script>

<style scoped>
.login{
    display: flex;
    justify-content: flex-end;
  background-color: rgb(82, 33, 114)
}
.flexin{
  display: flex;
  flex-direction: column
}
.bg{
    width: 100vw;
    background: url('/src/assets/colorize.png') no-repeat;
     background-position: right;
    background-size: 60%; 
    height: calc(100vh - 60px);
}
.white{
background: white
}
.formsignup{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%
}
form{
  margin: 5%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30%;
}
input{
  height: 21pt
}
label{
  font-size: 18pt;
  text-align: center;
  margin-bottom: 5px;
  color: white
}

</style>