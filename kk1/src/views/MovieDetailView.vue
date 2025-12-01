
<template>
    <div>
        <h1>Todos los datos de la Pelicula seleccionado</h1>
        
        <!-- Mostrar datos si existen -->
        <div v-if="peliculaData">
            <div class="alumno-card">
                <p><strong>ID:</strong> {{ peliculaData.id }}</p>
                <p><strong>Nombre:</strong> {{ peliculaData.nombre }}</p>
                <p><strong>Director:</strong> {{ peliculaData.director }}</p>
                <p><strong>Año:</strong> {{ peliculaData.year }}</p>
                <p><strong>Genero:</strong> {{ peliculaData.genero }}</p>   
            </div>
            
            <router-link to="/peliculas">← Volver al listado</router-link>
            <router-link to="/favoritos">← Agregar a Favoritos</router-link>
        </div>
        
        <!-- Mensaje si no hay datos -->
        <div v-else>
            <p>No se han recibido datos de la Pelicula.</p>
            <router-link to="/peliculas">← Volver al listado</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '../components/MovieCard.vue';

// Recibir el objeto alumno completo desde history.state
const peliculaData = ref(null)

onMounted(() => {
    // Los datos vienen en history.state.alumno (pasados via 'state' en router-link)
    if (history.state.pelicula) {
        peliculaData.value = history.state.pelicula
        console.log('Datos de la pelicula recibido:', peliculaData.value)
    } else {
        console.warn('No se recibieron datos de la pelicula en history.state')
    }
})
</script>