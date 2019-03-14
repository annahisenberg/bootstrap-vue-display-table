<template>
  <div id="app">
    <organization/>
  </div>
</template>

<script>
import Organization from "./components/Organization.vue";

export default {
  name: "app",
  components: {
    Organization
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 0.8rem;
}
</style>
