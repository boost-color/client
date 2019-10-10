<template>
<div class="register">
  <div class="bg">
    <div class="formsignup">
      <form>
        <div class="flexin">

        <label for="name">Name</label>
      <input type="text" name="name" id="inputname">
        </div>
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
  name: 'Register'

}
</script>

<style scoped>
.register{
  background-color: rgb(250, 216, 94);
         height: calc(100vh - 60px);
}
.flexin{
  display: flex;
  flex-direction: column
}
.bg{
    background: url('/src/assets/photo.png') no-repeat;
    background-size: 62.5%; 
    height: calc(100vh - 60px);
}
.white{
background: white
}
.formsignup{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
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
  margin-bottom: 5px
}

</style>