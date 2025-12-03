import { defineStore } from "pinia";

// Usando la sintaxis de Composition API (recomendado para Vue 3)
export const useFavoritos  = defineStore("favorito", () => {
  // Estado reactivo
  const peliculas = ref([]);
  const data = ref(null);

  // Acciones (métodos)
  function increment($pelicula) {
    peliculas.splice(0, 0, $pelicula);
  }

  return {
    // Estado
    peliculas,
    data,
    // Acciones
    increment,
  };
});
