<template>
  <div>
    <nav>
      <a id="logo" heref="#">LOGO</a>
      <button> 
        Log Out
      </button>
    </nav>
    <main>
      <div class="container">

      </div>
    </main>
  </div>
</template>

<script>
export default {

}
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
    height: calc(100vh - 68px);
    background: aqua;
  }

  .container {
    background: yellow;
    width: 75%;
    height: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
</style>