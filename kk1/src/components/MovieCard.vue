<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <ul class="nav-links">
      {{
        pelicula.nombre
      }}
      -
      <!-- Enlace que envía todos los datos del alumno mediante 'state' -->
      <router-link
        :to="{
          name: 'pelicula',
          params: { id: pelicula.id },
          state: { pelicula: pelicula },
        }"
      >
        Ver Detalles Completos
      </router-link>
    </ul>
  </nav>
</template>
<script> 
    export default{
        name: 'MovieCard.vue',
        components: {},
        props:['key', 'pelicula'], //propiedades que recibo del componente padre
        data(){
            return{

            }
        },
        mounted(){
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff8585;
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
  color: #58d400;
}
</style>
