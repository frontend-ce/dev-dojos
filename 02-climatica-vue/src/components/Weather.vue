<template>
  <div class="weather-container">
    <h1>Previsão do tempo</h1>
    <div class="weather-container-content">
      <div class="weather-city">
        <p>{{ currentWeather.name }}, {{ currentWeather.sys.country }}</p>
        <h2>{{ currentWeather.weather[0].description }}</h2>
        <span class="min-weather">↓ {{ currentWeather.main.temp_min.toFixed() }}°</span>
        <span class="max-weather">↑ {{ currentWeather.main.temp_max.toFixed() }}°</span>
        <br>
        <span class="max-weather">Vento: {{ currentWeather.wind.speed.toFixed() }}km/h</span>
        <span class="max-weather">Umidade: {{ currentWeather.main.humidity }}%</span>
      </div>
    </div>
    <div>
      <input
        class="search-city"
        type="text"
        v-model="searchInput"
        placeholder="Insira aqui o nome da cidade"
        @keyup.enter="getCityInfo"
      >
    </div>
    <ul>
      <li
        v-for="city in cities"
        :key="city.id"
        @click="getWeatherByCity(city.cidade)"
      >{{ city.cidade }}, {{city.estadoId}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",

  components: {},

  data: () => {
    return {
      searchInput: "",
      city: "Niterói, Rj - Brasil",
      formattedCelsius: "20C Nublado",
      minTemperature: "16°",
      maxTemperature: "25°",
      windChill: "",
      wind: "",
      humidity: "",
      lat: "",
      lng: "",
      currentWeather: {
        sys: { country: "" },
        weather: [
          {
            id: "",
            main: "",
            description: "",
            icon: ""
          }
        ],
        main: {
          temp: 0,
          pressure: 0,
          humidity: 0,
          temp_min: 0,
          temp_max: 0
        },
        wind: {
          speed: 0,
          deg: 0
        }
      },
      cities: []
    };
  },

  methods: {
    getUserCurrentLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getWeatherByLocation(this.lat, this.lng);
      });
    },

    getWeatherByLocation(lat, lng) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?APPID=e26ac13ac93e35d3f18a0fe899791d93&lat=${lat}&lon=${lng}&units=metric&lang=pt`
        )
        .then(response => (this.currentWeather = response.data));
    },

    getWeatherByCity(city) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?APPID=e26ac13ac93e35d3f18a0fe899791d93&lang=pt&units=metric&q=${city},BR`
        )
        .then(response => (this.currentWeather = response.data));
    },

    getCityInfo() {
      axios
        .get(
          `https://br-cidade-estado-nodejs.glitch.me/cidades?_page=1&_limit=5&q=${
            this.searchInput
          }`
        )
        .then(response => {
          this.cities = response.data;
        });
    }
  },

  beforeMount() {
    this.getUserCurrentLocation();
  }
};
</script>