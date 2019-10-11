<template>
  <div>
    <form enctype="multipart/form-data">
      <input type="file" ref="image" accept="image/*" @change="handleimage" required />
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      image: null
    };
  }
};
</script>

<style>
</style>