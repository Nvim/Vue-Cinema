<script setup>
import { useUserStore } from "@/stores/user.js"

const store = useUserStore();

const logUser = () => {
  console.log("Logging user:");
  console.log(store.user);
  console.log(store.loginStatus);
  console.log(store.token);
}
</script>

<template>
  <nav>
    <div class="flex bg-red-900 text-gray-200 font-bold ">
      <div class="flex py-8 space-x-4 px-8 w-4/5">
        <button @click="logUser" class="bg-green-400 p-6">Get user</button>
        <router-link to="/" class="hover:text-gray-400">Home</router-link>
        <br>
        <router-link to="/films" class="hover:text-gray-400">Films</router-link>
        <br>
        <router-link to="/cinemas" class="hover:text-gray-400">Cinemas</router-link>
      </div>
      <div class="flex py-8 justify-center space-x-4 w-1/5">
        <router-link to="/signup" v-if="!store.user">Sign Up</router-link>
        <router-link to="/login" v-if="!store.user">Log In</router-link>
        <router-link to="/profile" v-if="store.user">Profile</router-link>
      </div>
    </div>
  </nav>
  <div class="text-xl m-12">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <keep-alive>
          <Suspense>
            <component :is="Component"></component>
            <template #fallback>
              Loading...
            </template>
          </Suspense>
        </keep-alive>
      </template>
    </router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
