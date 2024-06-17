<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log("Film n° " + route.params.id)
</script>
<template>
  <div>
    Film n° {{ $route.params.id }}
  </div>
</template>
