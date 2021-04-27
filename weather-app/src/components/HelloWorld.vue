<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <select @change="getCities()" v-model="selectedCountry">
      <option v-for="country in countries" :key="country">
        {{ country }}
      </option>
    </select>

    <select @change="getWeather()" v-model="selectedCity">
      <option v-for="(city, index) in cities[0]" :key="city + index">
        {{ city }}
      </option>
    </select>
  </div>
  <weather :city="cityWeather"></weather>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Weather from "./WeatherComponent.vue";

@Options({
  props: {
    msg: String
  },
  components: {
    Weather
  }
})
export default class HelloWorld extends Vue {
  apikey = "b1827e0da926bd7cf8d378edf0afba7e";
  msg!: string;
  selectedCountry = "";
  selectedCity = "";
  fulldata = [];
  countries: string[] = [];
  cities: string[][] = [];
  cityWeather: {} | undefined;

  mounted() {
    this.getCountries();
  }

  getCountries() {
    fetch("https://countriesnow.space/api/v0.1/countries", {
      method: "GET"
    })
      .then(response => {
        response.json().then(body => {
          this.fulldata = body.data;
          this.countries = body.data.map((country: Country) => country.country);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getCities() {
    this.cities = this.fulldata
      .filter((country: Country) => country.country === this.selectedCountry)
      .map((country: Country) => country.cities);
  }

  getWeather() {
    fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${this.selectedCity}&appid=${this.apikey}&units=metric`,
      {
        method: "GET"
      }
    )
      .then(response => {
        response.json().then(body => (this.cityWeather = body));
      })
      .catch(error => console.error(error));
  }
}

interface Country {
  country: string;
  cities: string[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

select {
  text-align: center;
}
</style>
