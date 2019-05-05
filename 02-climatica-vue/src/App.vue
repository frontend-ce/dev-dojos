<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script>
import Weather from './components/Weather.vue';

export default {
  name: 'app',
  components: {
    Weather
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
   background-image: linear-gradient(to bottom, #ff8a00, #ff9600, #ffa100, #ffad00, #ffb800);
  background-size: cover;
  background-repeat: no-repeat;
  height:100%;
}


</style>
