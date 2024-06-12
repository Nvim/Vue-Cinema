<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import { useUserStore } from "@/stores/user.js"

const emit = defineEmits(["loggedIn", "test"]);
const router = useRouter();
const store = useUserStore();

const email = ref("");
const pwd = ref("");
const errors = ref([])
const success = ref(false)

const formHandler = async (event) => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({ email, pwd }),
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    });
    if (response.status === 400) {
      let oui = await response.json();
      errors.value = oui;
      console.log("Errors: " + oui)
      emit("test")
    } else if (response.status === 201) {
      const json = await response.json()
      const { user: userObject } = json;
      store.setUser(userObject);
      store.login();
      success.value = true;
      router.push('/');
    }
  } catch (error) {
    console.log('Login Error: ', error);
  }
}

</script>

<template>
  <div class="text-2xl font-extrabold py-8 px-2">
    Login Page
  </div>
  <div>
    <form action="" id="login" @submit.prevent="formHandler($event)">
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
    Succès
  </div>
</template>
