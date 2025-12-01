<template>
  <h1>Vista de Catalogo</h1>
  <h3>Listado de Peliculas</h3>
  <MovieCard v-for="pelicula in peliculas" :key="pelicula.id" :pelicula="pelicula"/>
</template>
<script setup>
import MovieCard from '../components/MovieCard.vue';
const peliculas = [
  {
    id: 1,
    nombre: "AnaBelle",
    year: 2015,
    director: "Juanjo",
    genero: "Terror",
    puntuacion: 4,
    sipnosis: "todo ocurrio una noche en la que no podia cagar",
  },
  {
    id: 2,
    nombre: "Joker",
    year: 2020,
    director: "Batman",
    genero: "Comedia",
    puntuacion: 2,
    sipnosis: "todo ocurrio una noche en la que no podia cagar",
  },
  {
    id: 3,
    nombre: "Mary Poppins",
    year: 1999,
    director: "Jacinta",
    genero: "Musica",
    puntuacion: 3,
    sipnosis: "todo ocurrio una noche en la que no podia cagar",
  },
  {
    id: 4,
    nombre: "Mickye Mouse",
    year: 2010,
    director: "Heisenberg",
    genero: "Musica",
    puntuacion: 1,
    sipnosis: "todo ocurrio una noche en la que no podia cagar",
  },
];
</script>
