<template>
  <img alt="logo Atech" src="./assets/Logo_Atech.png">
  <Matrix />
</template>

<script>
import Matrix from './components/Matrix.vue';

export default {
  name: "App",
  components: {
    Matrix,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


img {
  margin-bottom: 5%;
}
</style>
