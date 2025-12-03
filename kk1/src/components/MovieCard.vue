<script setup>
import { RouterLink } from "vue-router";
import { useFavoritos } from "@/stores/favoritos";
import { storeToRefs } from "pinia";
const peliculaData = ref(null);

const props = defineProps({
  pelicula: {
    type: Object,
    required: true,
  },
  detalle: {
    type: Boolean,
    default: false,
  },
});

const store = useFavoritos();
const loading = ref(false);
const error = ref(null);

// Desestructuración reactiva del estado y getters
const { peliculas } = storeToRefs(store);

// Desestructuración de acciones
const { increment } = store;
</script>

<template>
  <div class="movie-card">
    <!-- 🎬 MODO DETALLE -->
    <template v-if="detalle">
      <div class="content">
        <h2>{{ pelicula.nombre }}</h2>

        <p><strong>ID:</strong> {{ pelicula.id }}</p>
        <p><strong>Director:</strong> {{ pelicula.director }}</p>
        <p><strong>Año:</strong> {{ pelicula.year }}</p>
        <p><strong>Género:</strong> {{ pelicula.genero }}</p>
        <p><strong>Sinopsis:</strong> {{ pelicula.sipnosis }}</p>

        <div class="actions">
          <RouterLink class="btn home" to="/peliculas">Volver</RouterLink>
           <button @click="increment(pelicula)">Favoritos</button>
        </div>
      </div>
    </template>

    <!-- 🎞️ MODO CATÁLOGO -->
    <template v-else>
      <div class="content">
        <h2>{{ pelicula.nombre }}</h2>

        <RouterLink
          class="btn details"
          :to="{
            name: 'pelicula',
            params: { id: pelicula.id },
            state: { pelicula },
          }"
        >
          Ver Detalles
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<style scoped>
.movie-card {
  background: #1b1b1b;
  border: 1px solid #333;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  color: white;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s;
}

.details {
  background: #ff6b6b;
  color: white;
}
.details:hover {
  background: #ff8787;
}

.fav {
  background: #ffd93d;
  color: #222;
}
.fav:hover {
  background: #ffe05c;
}

.home {
  background: #4d96ff;
  color: white;
}
.home:hover {
  background: #75b3ff;
}
</style>
