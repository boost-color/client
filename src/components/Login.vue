<template>
  <div class="login">
    <div class="bg">
      <div class="formlogin pb-5">
        <form @submit.prevent="signMe">
          <h1>Log In</h1>
          <br />
          <div class="flexin mb-2">
            <label for="email">Email</label>
            <input type="email" name="email" id="inputemail" v-model="emaillog" />
          </div>
          <div class="flexin mb-2">
            <label for="password">Password</label>
            <input type="password" name id v-model="passwordlog" />
          </div>
          <div class="d-flex justify-content-center">
            <b-button variant="warning m-4" type="submit">Submit</b-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      emaillog: "",
      passwordlog: "",
      baseUrl: "http://localhost:3000/boost",
      // baseUrl: "http://34.70.15.199"
    };
  },
  methods: {
    signMe() {
      Swal.fire({
        title: `Loggin In ......`,
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "post",
        url: `${this.baseUrl}/user/login`,
        data: {
          email: this.emaillog,
          password: this.passwordlog
        }
      })
        .then(({ data }) => {
          console.log(data.token);
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.name);
          localStorage.setItem("id", data.id);
          this.$emit("changeLogin", true);
          Swal.close();
          Swal.fire("Success!", `Logged In Success`, "success");
        })
        .catch(err => {
          let msg = "Fail to Login";
          if (err.responseJSON) {
            msg = err.responseJSON.message;
          }
          Swal.fire("Error!", msg, "error");
        })
        .finally(() => {
          this.passwordlog = "";
          this.emaillog = "";
        });
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.login {
  display: flex;
  justify-content: flex-end;
  background-color: rgb(82, 33, 114);
}
.flexin {
  display: flex;
  flex-direction: column;
}
.bg {
  width: 100vw;
  background: url("/src/assets/colorize.png") no-repeat;
  background-position: right;
  background-size: 60%;
  height: calc(100vh - 69px);
}
.white {
  background: white;
}
.formlogin {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
form {
  padding: 50px;
  margin: 3%;
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
  color: white;
}
h1 {
  color: white;
}
</style>