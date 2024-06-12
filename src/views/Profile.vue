<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "@/stores/user.js"

const store = useUserStore();
const router = useRouter();
const data = ref("");
try {
  const response = await fetch("http://localhost:3000/protected", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });

  if (response.status === 400) {
    errors.value = await response.json();
  }
  else if (response.status === 403) {
    data.value = "Invalid Token! Please log in again";
  }
  else if (response.status === 401) {
    data.value = "No Token! Please log in or sign up";
  }
  else if (response.status === 201) {
    const json = await response.json()
    const res = json;
    data = JSON.stringify(json);
    success.value = true;
  }
} catch (error) {
  console.error('Fetch error:', error);
}
</script>

<template>
  <div class="text-2xl font-bold">
    Profile Page
  </div>
  {{ data }}
</template>
