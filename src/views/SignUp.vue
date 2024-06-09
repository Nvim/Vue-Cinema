<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import { user, token } from "../user.js"

const nom = ref('');
const prenom = ref('');
const email = ref('');
const pwd = ref('');
const errors = ref([]);
const success = ref(false)

const formHandler = async (event) => {
  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify({ nom, prenom, email, pwd }),
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });

    if (response.status === 400) {
      errors.value = await response.json();
    } else if (response.status === 201) {
      const json = await response.json()
      const { user: userObject } = json;
      user.value = { ...userObject }
      success.value = true
      router.push('/');
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
</script>
<template>
  <div class="text-2xl font-extrabold py-8 px-2">
    Sign Up Page
  </div>
  <div>
    <form action="" id="signup" @submit.prevent="formHandler($event)">
      <label for="nom">Nom: </label>
      <br>
      <input type="text" v-model="nom" name="nom" class="bg-gray-100 rounded-lg">
      <br>
      <label for="prenom">Prénom: </label>
      <br>
      <input type="text" name="prenom" v-model="prenom" class="bg-gray-100 rounded-lg">
      <br>
      <label for="email">Email: </label>
      <br>
      <input type="text" name="email" v-model="email" class="bg-gray-100 rounded-lg">
      <br>
      <label for="pwd">Mot de passe: </label>
      <br>
      <input type="password" name="pwd" v-model="pwd" class="bg-gray-100 rounded-lg">
      <br>
      <br>
      <button type="submit" class="rounded-lg p-4 bg-red-700 text-gray-200 font-bold hover:bg-red-900">Valider</button>
    </form>
  </div>

  <div class="mt-8 bg-red-300 rounded-lg p-8 text-gray-700" v-if="errors.length > 0">
    <p class="font-bold text-gray-800">Une erreur est survenue!</p>
    <ul>
      <li v-for="err in errors">{{ err }}</li>
    </ul>
  </div>
  <div class="mt-8 bg-green-400 rounded-lg p-8 text-gray-700" v-if="success === true">
    Compte créé
  </div>
</template>
