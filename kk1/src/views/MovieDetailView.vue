<template>
  <div>
    <h1>Todos los datos de la Pelicula seleccionado</h1>

    <MovieCard v-for="pelicula in peliculas" :key="pelicula.id" :pelicula="peliculaData" :peliculaData="true"/>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MovieCard from '../components/MovieCard.vue';


// Recibir el objeto alumno completo desde history.state
const peliculaData = ref(null);

onMounted(() => {
  // Los datos vienen en history.state.alumno (pasados via 'state' en router-link)
  if (history.state.pelicula) {
    peliculaData.value = history.state.pelicula;
    console.log("Datos de la pelicula recibido:", peliculaData.value);
  } else {
    console.warn("No se recibieron datos de la pelicula en history.state");
  }
});
</script>
