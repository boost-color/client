<template>
  <div>
    <nav>
      <a id="logo" heref="#">LOGO</a>
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
          <b-row>
            <b-col><b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
              <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-card-group></b-col>
            <b-col><b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
              <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-card-group></b-col>
            <b-col><b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
              <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-card-group></b-col>
            <b-col><b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            </b-card>
          </b-card-group></b-col>
            <b-col><b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            </b-card>
          </b-card-group></b-col>
            <b-col><b-card-group deck>
            <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
            </b-card>
          </b-card-group></b-col>
          </b-row>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Main"
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
  padding-top: 100px;
  min-height: calc(100vh - 68px);
  background: #f5f5f5;
}

.container-main {
  background: #f5f5f5;
  width: 80%;
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

#main-text  {
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
</style>