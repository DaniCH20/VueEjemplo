<template>
  <h1>Detalles de la Película</h1>

  <MovieCard
    v-if="peliculaData"
    :pelicula="peliculaData"
    :detalle="true"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "../components/MovieCard.vue";

onMounted(() => {
  if (history.state.pelicula) {
    peliculaData.value = history.state.pelicula;
  }
});



</script>
