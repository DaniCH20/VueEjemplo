<template>
  <section>
    <div id="app" class="app">
      
      <button @click="loadCharacters" :disabled="loading">
        {{ loading ? "Cargando..." : "Cargar personajes" }}
      </button>

      <button @click="nextPage" :disabled="!links.next">Next</button>

      <button @click="prevPage" :disabled="!links.previous">Previous</button>

      <div v-if="error" class="error">{{ error }}</div>

      <div v-else-if="characters.length > 0" class="character-list">
        <div v-for="character in characters" :key="character.id" class="character-card">

          <img :src="character.image" class="character-card__image" alt="personaje" />

          <h3 class="character-card__name">
            {{ character.id }} - {{ character.name }}
          </h3>

          <label><b>Raza:</b> {{ character.race }}</label>
          <label><b>Género:</b> {{ character.gender }}</label>
          <label><b>Afiliación:</b> {{ character.affiliation }}</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
 import { ref, onMounted } from 'vue';

 const characters = ref([]);
 const isLoading = ref(false);
 const error = ref(null);

 async function loadPage(url) {
    loading.value = true;
    error.value = null;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error HTTP " + response.status);

        const data = await response.json();
        characters.value = data.items;
        links.value = data.links;

    } catch (err) {
        error.value = "No se pudieron cargar los personajes.";
    } finally {
        loading.value = false;
    }
 };
 function fetchPosts() {
            loadPage("https://dragonball-api.com/api/characters");
          }

         
          function nextPage() {
            if (links.value.next)
              loadPage(links.value.next);
          }

          
          function prevPage() {
            if (links.value.previous)
              loadPage(links.value.previous);
          }

 onMounted(() => {
   loadCharacters();
 });
</script>

