<template>
  <div class="register">
    <div class="bg">
      <div class="formsignup">
        <form>
          <h1>Register</h1>
          <br>
          <div class="flexin mb-2">
            <label for="name">Name</label>
            <input type="text" name="name" id="inputname" />
          </div>
          <div class="flexin mb-2">
            <label for="email">Email</label>
            <input type="email" name="email" id="inputemail" />
          </div>
          <div class="flexin mb-2">
            <label for="password">Password</label>
            <input type="password" name id />
          </div>
          <div class="d-flex justify-content-center">
          <b-button variant="dark m-4" class="purpleme">Submit</b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>

<style scoped>
.register {
  background-color: rgb(250, 216, 94);
  height: calc(100vh - 68px);
}
.flexin {
  display: flex;
  flex-direction: column;
}
.bg {
  background: url("/src/assets/photo.png") no-repeat;
  background-size: 62.5%;
  height: calc(100vh - 68px);
}
.white {
  background: white;
}
.formsignup {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.purpleme{
  background-color: #65298d
}
.purpleme:hover{
  background-color:#7d46a1;
  border:  1px solid #7d46a1;
}

form {
  padding: 50px;
  margin: 5%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30%;
}
input {
  height: 21pt;
}
label {
  font-size: 18pt;
  text-align: left;
  margin-left: 5px;
  margin-bottom: 5px;
}
</style>