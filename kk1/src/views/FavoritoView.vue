<template>
    <div>
        Hola esta es la pagina de favoritos
    </div>
    <MovieCard v-for="pelicula in peliculas" :key="pelicula.id" :pelicula="pelicula"/>
</template>
