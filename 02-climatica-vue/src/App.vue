<template>
  <div id="app">
    <Weather/>
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";

export default {
  name: "app",
  components: {
    Weather
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

body {
  min-height: 100vh;
}
body {
  padding: 15px;
  background: #606c88; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f4c6b,
    #606c88
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3f4c6b,
    #606c88
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
body * {
  box-sizing: border-box;
}
h1 {
  color: white;
}
.weather-container-content h2 {
  margin: 0;
  margin-bottom: 10px;
}
.weather-container-content p {
  margin: 0;
}
.weather-container-content span {
  display: inline-block;
  margin: 5px;
}

.weather-container-content {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

.search-city {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  font-size: 1.2rem;
  margin-top: 20px;
  border-radius: 5px;
  color: #606c88;
  border: none;
}

::placeholder {
  color: #606c88;
}

ul {
  list-style-type: none;
  max-width: 595px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

li {
  border: 1px solid #fff;
  width: 100%;
  padding: 10px;
  text-align: left;
  margin: 0 auto;
  background: none;
  cursor: pointer;
}

li:hover {
  border: 1px solid white;
  background: #fff;
  color: #606c88;
}
</style>
