<script setup>

import { ref } from 'vue'

const places = ref([])

const newPlace = ref({
  name: "",
  realm: "",
  population: 0,
  safe: false,
})

const successMessage = ref("")

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

async function addPlace() {
  try {
    const response = await fetch("https://middle-earth-explorer-api.onrender.com/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlace.value)
    });

    if (!response.ok) {
      throw new Error("Something went wrong " + response.status);
    }

    const createdPlace = await response.json();
    places.value.push(createdPlace);
    successMessage.value = "Place added successfully!"

    newPlace.value = {
      name: "",
      realm: "",
      population: 0,
      safe: false
    };


  } catch(error) {
    console.log("error", error)
  }
}

async function deletePlace(id) {
  try {
    const response = await fetch(`https://middle-earth-explorer-api.onrender.com/places/${id}`, {
      method: "DELETE"
    });

    if(!response.ok){
      throw new Error("Something went wrong " + response.status);
    }

    places.value = places.value.filter(place => place.id !== id);

  } catch(error) {
    console.log("error", error)
  }
}



</script>

<template>
  <main>
    <h1>Explore the Places of Middle-earth</h1>

    <p>Explore the different places of Middle-earth and discover their names, realms and populations. From the peaceful Shire to the dark lands of Mordor, there is always something new to explore!</p>

    <h2>Add a New Place</h2>

    <form @submit.prevent="addPlace">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="newPlace.name" required>
      
      <label for="realm">Realm</label>
      <input type="text" name="realm" id="realm" v-model="newPlace.realm" required>

      <label for="population">Population</label>
      <input type="number" name="population" id="population" v-model.number="newPlace.population" required>

      <label for="safe">Is this place safe?</label>
      <input type="checkbox" name="safe" id="safe" v-model="newPlace.safe">

      <button type="submit">Add Place</button>
    </form>

    <p v-if="successMessage" class="success-message">
    {{ successMessage }}
    </p>

    <div class="list">
      <div v-for="place in places" :key="place.id" :class="['place-card', place.name.toLowerCase().replace('the ', '')]">
        <h2>{{ place.name }}</h2>
        <p>Realm: {{ place.realm }}</p>
        <p>Population: {{ place.population }}</p>
        <p>Safe: {{ place.safe }}</p>
        <button @click="deletePlace(place.id)">Delete</button>
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

form{
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: 20px 0;
  background-color: #DDE8C8;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

form label{
  color: #263D2B;
  font-weight: bold;
}

form input{
  padding: 10px;
  border: 1px solid #8B6B3F;
  border-radius: 6px;
  font-size: 1rem;
}

form label[for="safe"]{
  text-align: center;
}

form button{
  padding: 10px;
  margin-top: 10px;
  background-color: #263D2B;
  color: #E8E2D2;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

form button:hover{
  background-color: #38553D;
}

.place-card button{
  padding: 8px 14px;
  margin-top: 10px;
  background-color: #8B2525;
  color: #F1E5D0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.place-card button:hover{
  background-color: #A93636;
}

.success-message{
  color: #263D2B;
  background-color: #DDE8C8;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 1023px){
  main{
    max-width: 95%;
  }

  .place-card{
    width: 45%;
  }
}

@media (max-width: 600px){
  .place-card{
    width: 100%;
    margin: 10px 0;
  }

  form{
    width: 95%;
  }

  h1{
    font-size: 1.5rem;
  }

  main > p{
    padding: 0 10px;
  }
}

</style>