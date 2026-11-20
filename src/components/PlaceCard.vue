<script setup>
const props = defineProps ({
    place: Object
})
const emit = defineEmits(['delete'])
</script>

<template>
    <div :class="['place-card', place.name.toLowerCase().replace('the ', '')]">
      <h2>{{ place.name }}</h2>
      <p>Realm: {{ place.realm }}</p>
      <p>Population: {{ place.population }}</p>
      <p>Safe: {{ place.safe }}</p>
      <button @click="emit('delete', place.id)">Delete</button>
    </div>
</template>

<style scoped>
h2{
  font-size: 1.4rem;
  text-align: center;
}

p{
  line-height: 1.6;
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

@media (max-width: 1023px){
  .place-card{
    width: 45%;
  }
}

@media (max-width: 600px){
  .place-card{
    width: 100%;
    margin: 10px 0;
  }
}
</style>