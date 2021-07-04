<template>
  <div id="app">
    <AddEmpMain />
  </div>
</template>

<script>
import AddEmpMain from "./components/AddEmpMain.vue";
export default {
  name: "App",
  components: {
    AddEmpMain,
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
</style>
