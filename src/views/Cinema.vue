<!-- TODO: to sql everytime, cache parent data as prop if coming from homepage -->
<script setup>
import axios from 'axios';
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({ id: { required: true }, });

let loading = ref(false)
let error = ref(null)
let cinema = ref(null);

loading.value = true;
console.log("IdCine: ", props.id)
try {
  axios.get(`http://localhost:3000/cinema/${route.params.id}`)
    .then(response => {
      cinema.value = response.data;
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
} catch (err) {
  error.value = err.toString();
}
finally {
  loading.value = false;
}
</script>

<template>
  <div v-if="cinema">
    <div class="w-full">
      <img :src="`/src/assets/${cinema.ImageCine}`" alt="img" class="">
    </div>
    <div class="text-2xl font-extrabold">{{ cinema.NomCine }}</div>
    <div>
      {{ cinema.Ville }}
    </div>
    {{ cinema }}
  </div>
</template>
