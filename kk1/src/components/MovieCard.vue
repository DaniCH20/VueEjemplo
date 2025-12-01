<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  pelicula: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <nav class="movie-card">
    <div v-if="peliculaData==true">
      <div class="pelicula-card">
        <p><strong>ID:</strong> {{ pelicula.id }}</p>
        <p><strong>Nombre:</strong> {{ pelicula.nombre }}</p>
        <p><strong>Director:</strong> {{ pelicula.director }}</p>
        <p><strong>Año:</strong> {{ pelicula.year }}</p>
        <p><strong>Genero:</strong> {{ pelicula.genero }}</p>
      </div>

      <router-link to="/peliculas">← Volver al listado</router-link>
      <RouterLink class="btn-fav" to="/favoritos">Favoritos </RouterLink>
    </div>
    <div v-else>
      <div class="movie-title">
        {{ pelicula.nombre }}
      </div>

      <div class="movie-actions">
        <RouterLink
          class="btn-details"
          :to="{
            name: 'pelicula',
            params: { id: pelicula.id },
            state: { pelicula },
          }"
        >
          Ver Detalles
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.movie-card {
  width: 100%;
  background: #1b1b1b;
  border: 1px solid #333;
  padding: 1rem 1.5rem;
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(255, 80, 80, 0.4);
}

.movie-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffdfdf;
  text-shadow: 0 0 5px rgba(255, 150, 150, 0.4);
}

.movie-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

/* Botones */
.movie-actions a {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;

  transition: background 0.25s, transform 0.2s;
}

/* Botón Detalles */
.btn-details {
  background: #ff6b6b;
  color: white;
}

.btn-details:hover {
  background: #ff8787;
  transform: scale(1.05);
}

/* Favoritos */
.btn-fav {
  background: #ffd93d;
  color: #222;
}

.btn-fav:hover {
  background: #ffe05c;
  transform: scale(1.05);
}

/* Home */
.btn-home {
  background: #4d96ff;
  color: white;
}

.btn-home:hover {
  background: #75b3ff;
  transform: scale(1.05);
}
</style>
