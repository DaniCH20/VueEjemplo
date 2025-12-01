<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><RouterLink to="/">Ir a Home</RouterLink></li>
      <li><RouterLink to="/peliculas">Ir a Peliculas</RouterLink></li>
      <li><RouterLink to="/favoritos">Ir a Favoritos</RouterLink></li>
      <li><RouterLink to="/about">Ir a About</RouterLink></li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 0.5em 1em;
    color: white;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1em;
    margin: 0;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #00bcd4;
}
</style>
