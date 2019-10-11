<template>
  <div>
    <nav>
      <a id="logo" heref="#">
        <img src="../assets/logobc.png" alt="Logo" style="height: 61px" />
      </a>
      <button>Log Out</button>
    </nav>
    <main>
      <div class="container-main">
        <div id="upload">
          <div id="main-text">
            <p>Welcome to boostcolor!</p>
            <button @click.prevent="uploadImg()">Upload Image!</button>
          </div>
        </div>
        <div id="container-img">
          <div class="box-card">
            <div class="card" v-for="(p, i) in foto" :key="i">
              <img src="../assets/photo.png" alt="Avatar" style="width:100%; height : 293px" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: function() {
    return {
      foto: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style scoped>
nav {
  height: 68px;
  width: 100%;
  display: flex;
  background-color: black;
  color: white;
  justify-content: space-between;
}

main {
  width: 100%;
  padding-top: 30px;
  min-height: calc(100vh - 68px);
  background: #f5f5f5;
}

.container-main {
  background: #f5f5f5;
  width: 90%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

#upload {
  background: #f5f5f5;
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#container-img {
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  padding: 2rem;
}

#main-text {
  text-align: center;
}

#main-text p {
  font-size: 40px;
  width: 100%;
  text-align: center;
}

#main-text button {
  font-size: 20px;
  width: 5rem;
  height: 2rem;
  text-align: center;
}

.box-card {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  width: 1000px;
  padding-top: 10px;
  margin: 0 auto;
  justify-content: flex-start;
}
.card {
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 293px;
  height: 293px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(250, 250, 250, 0.2);
}
.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
}
</style>