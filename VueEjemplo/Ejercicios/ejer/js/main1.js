const vm1 = {
  setup() {
    const nombre = Vue.ref("");
    const aula = Vue.ref("");
    const incidencias = Vue.ref([{nombre:"caida" ,aula:"2B",estado:"pendiente"}]);

    // Filtro actual
    const filtro = Vue.ref("todas");

    const agregarIncidencia = () => {
      incidencias.value.push({
        nombre: nombre.value,
        aula: aula.value,
        estado: "pendiente" // SIEMPRE inicia en pendiente
      });

      // reset
      nombre.value = "";
      aula.value = "";
  
    };

    // Cambiar el estado de una incidencia
    const actualizarEstado = (index, nuevoEstado) => {
      incidencias.value[index].estado = nuevoEstado;
    };

    // Propiedad computada para filtrar la lista
    const incidenciasFiltradas = Vue.computed(() => {
      switch (filtro.value) {
        case "pendiente":
          return incidencias.value.filter(i => i.estado === "pendiente");

        case "proceso":
          return incidencias.value.filter(i => i.estado === "proceso");

        case "resuelta":
          return incidencias.value.filter(i => i.estado === "resuelta");

        default:
          return incidencias.value;
      }
    });

    // Contador computado (pendiente + en proceso)
    const totalActivas = Vue.computed(() =>
      incidencias.value.filter(i =>
        i.estado === "pendiente" || i.estado === "proceso"
      ).length
    );

    return {
      nombre,
      aula,
      incidencias,
      filtro,
      agregarIncidencia,
      actualizarEstado,
      incidenciasFiltradas,
      totalActivas
    };
  }
};

Vue.createApp(vm1).mount("#app");
