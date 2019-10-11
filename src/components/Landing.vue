<template>
  <div>
      <section class="landingpg">

      </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ''
    }
  },
  methods: {
    sendName: () => {
      this.$emit('sendName', this.name)
    }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.landingpg{
    background:black;
    background-size: 100%;
    height: 100vh;
}
</style>