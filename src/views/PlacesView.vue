<script setup>

import { ref } from 'vue'

const places = ref([])

async function getData() {
  try{
    const response = await fetch("https://middle-earth-explorer-api.onrender.com/places");
    if (!response.ok){
      throw new Error("Something went wrong " + response.status);
    }
    const data = await response.json();
    places.value = data;
  } catch(error){
    console.log("error", error);
  }
}

getData();
</script>

<template>
  <main>
    <h1>Explore the Places of Middle-earth</h1>

    <p>Explore the different places of Middle-earth and discover their names, realms and populations. From the peaceful Shire to the dark lands of Mordor, there is always something new to explore!</p>

    <div class="list">
      <div v-for="place in places" :key="place.id" :class="['place-card', place.name.toLowerCase().replace('the ', '')]">
        <h2>{{ place.name }}</h2>
        <p>Realm: {{ place.realm }}</p>
        <p>Population: {{ place.population }}</p>
        <p>Safe: {{ place.safe }}</p>
      </div>
    </div>

  </main>
</template>

<style scoped>
main{
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

h1{
  color: #263D2B;
  text-align: center;
  padding-bottom: 10px;
}

p{
  max-width: 35em;
  text-align: left;
  color: #292820;
  font-size: 1rem;
  line-height: 1.6;
}

.list{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.place-card{
  width: 30%;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin: 15px;
}

.place-card h2{
  color: #6B5030;
}

h2{
  color: #263D2B;
  font-size: 1.4rem;
  text-align: center;
}

.mordor{
  background-color: #211C1C;
  color: #F1E5D0;
  border: 2px solid #8B2525;
}

.mordor p{
  color: #F1E5D0;
}

.mordor h2{
  color: #C65A36;
}

.shire{
  background-color: #DDE8C8;
  color: #293D25;
}

.shire h2{
  color: #365C32;
}

.rivendell{
  background-color: #D5E8ED;
  color: #243C4A;
  border: 2px solid #82B9C5;
}

.rivendell h2{
  color: #397C91;
}

</style>