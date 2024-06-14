<script setup>
import axios from 'axios';
import { ref, watch } from 'vue'
import { useUserStore } from "@/stores/user.js"

let loading = ref(false)
let error = ref(null)
let cinemas = ref([]);
let films = ref([]);
const store = useUserStore();

loading.value = true;
try {
  axios.get('http://localhost:3000/cinemas')
    .then(response => {
      cinemas.value = response.data;
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
  axios.get("http://localhost:3000/films")
    .then(response => {
      films.value = response.data;
    })
    .catch(error => {
      console.error("Error fetching: ", error);
    });
} catch (err) {
  error.value = err.toString();
}
finally {
  loading.value = false;
}
</script>

<template>
  <div>
    <div class="text-2xl font-extrabold p-2">
      <div v-if="!store.user">Accueil</div>
      <div v-if="store.user">Bienvenue, {{ store.user.NomClient }}</div>
    </div>

    <div class="bg-gray-100 rounded-lg p-4">
      <div class="font-bold text-lg p-2"> Cinémas </div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>

      <div v-if="cinemas" class="flex overflow-x-auto space-x-4">
        <div v-for="cinema in cinemas" :key="cinema.idCine" class="bg-gray-200 rounded-xl">
          <div class="p-2">
            <img :src="`/src/assets/${cinema.ImageCine}`" alt="img" class="max-h-52 max-w-52 rounded-lg">
            <router-link :to="`/cinema/${cinema.IdCine}`" id="cinema.IdCine">{{ cinema.NomCine }}</router-link>
          </div>
        </div>
      </div>
    </div>

    <br><br>

    <div class="bg-gray-100 rounded-lg p-4">
      <div class="font-bold text-lg p-2"> Films </div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>

      <div v-if="films" class="flex overflow-x-auto space-x-4">
        <div v-for="film in films" :key="films.IdFilm" class="bg-gray-200 rounded-xl">
          <div class="p-2">
            <!-- <img :src="`src/assets/${film.ImageFilm}`" alt="img" class="max-h-52 max-w-52 rounded-lg"> -->
            <img :src="`src/assets/${film.ImageFilm}`" alt="img" class="max-h-52 max-w-52 rounded-lg">
            <router-link :to="`/film/${film.IdFilm}`">{{ film.NomFilm }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
