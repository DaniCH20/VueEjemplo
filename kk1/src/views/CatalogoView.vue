<template>
  <h1>Vista de Catálogo</h1>
  <h3>Listado de Películas</h3>

  <MovieCard
    v-for="pelicula in peliculas"
    :key="pelicula.id"
    :pelicula="pelicula"
  />
</template>

<script setup>
import MovieCard from "../components/MovieCard.vue";

const peliculas = [
  { id: 1, nombre: "AnaBelle", year: 2015, director: "Juanjo", genero: "Terror", puntuacion: 4, sipnosis: "..." },
  { id: 2, nombre: "Joker", year: 2020, director: "Batman", genero: "Comedia", puntuacion: 2, sipnosis: "..." },
  { id: 3, nombre: "Mary Poppins", year: 1999, director: "Jacinta", genero: "Musica", puntuacion: 3, sipnosis: "..." },
  { id: 4, nombre: "Mickey Mouse", year: 2010, director: "Heisenberg", genero: "Musica", puntuacion: 1, sipnosis: "..." },
];
</script>
