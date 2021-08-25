<template>
  <div class="body">
      <router-link to="/">Home</router-link> |
    <router-link to="/Hello">Hello</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu01",
};
</script>

<style scoped>
.body{
  position: absolute;
  top: 0;
}
</style>