<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "@/stores/user.js"

const store = useUserStore();
const router = useRouter();
const error = ref("");
const data = ref([])

data.value = store.user
error.value = null

</script>

<template>
  <div class="text-2xl font-bold">
    Profile Page
  </div>
  <div v-if="error">
    Une erreur est survenue: {{ error }}
  </div>
  <div v-else-if="data">
    {{ data }}
  </div>
  <div v-else>
    Huh ??
  </div>
</template>
