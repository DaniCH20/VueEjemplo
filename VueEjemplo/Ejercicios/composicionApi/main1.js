// App 1: Campos básicos con validación en vivo y contadores
// nombre, bio, genero, aceptaCondiciones

const vm1 = {
  setup() {
    // Estado básico
    const nombre = Vue.ref("");
    const email = Vue.ref("");
    const pass = Vue.ref("");
    const rol = Vue.ref("gato");
    const genero = Vue.ref("x");
    const aceptaCondiciones = Vue.ref(false);

    // Reglas y errores
    const rules = Vue.reactive({
      nombre: { required: true, min: 2, max: 30 },
      pass: { required: true, min: 9, max: 15 },
    });
    // Computamos los mensajes de error directamente (sin watch)
    const errors = Vue.computed(() => {
      const nombreLength = (nombre.value ?? "").length;
      const passLength = (pass.value ?? "").length;
      const mail = "@gmail.com";
      let eEmail = "";
      let eNombre = "";
      let epass = "";
      //trim() quita los espacios en blanco al inicio y al final.
      //rules.nombre.required && !nombre.value.trim() es para que no se envie si no hay nombre
      if (rules.nombre.required && !nombre.value.trim()) {
        eNombre = "El nombre es obligatorio";
      } else if (nombreLength < rules.nombre.min) {
        eNombre = `Mínimo ${rules.nombre.min} caracteres`;
      } else if (nombreLength > rules.nombre.max) {
        eNombre = `Máximo ${rules.nombre.max} caracteres`;
      }
      if (passLength < rules.pass.min) {
        epass = `Minimo ${rules.pass.min} caracteres `;
      } else if (passLength > rules.pass.max) {
        epass = `Máximo ${rules.pass.max} caracteres `;
      }
      if (!email.value.includes(mail)) {
        eEmail = `el email no contiene ${mail} `;
      }
      if (eNombre != "" || epass != "" || eEmail!="") {
        console.log(eNombre + "para el nombre");
        console.log(epass + "para el password");
         console.log(eEmail);
      }
      
      return { nombre: eNombre, pass: epass, email: eEmail };
    });

    // Contadores
    //con nombre.value?? es para que no de error si no hay valor.
    // Si no es null o undefined, devuelve la cadena de la izquierda;
    // si no la cadena vacia. Asi .length no da errores
    const nombreLength = Vue.computed(() => (nombre.value ?? "").length);
    const passLength = Vue.computed(() => (pass.value ?? "").length);

    const isFormValid = Vue.computed(() => {
      //Object.values(errors.value) devuelve un array con los valores de errors.value
      const noErrors = Object.values(errors.value).every((e) => !e);
      //every() devuelve true si todos los elementos del array cumplen la condicion.
      // es decir, si no hay errores=> los valores estan vacios
      return noErrors && aceptaCondiciones.value;
    });

    const handleSubmit = () => {
      if (!isFormValid.value) {
        alert("Revisa los errores y acepta las condiciones");
        return;
      }
      console.log("[App1] Datos: ", {
        nombre: nombre.value,
        pass: pass.value,
        genero: genero.value,
        email: email.value,
        rol: rol.value,
        aceptaCondiciones: aceptaCondiciones.value,
      });
      alert("[App1] Enviado. Mira la consola.");
    };

    const resetForm = () => {
      nombre.value = "";
      pass.value = "";
      genero.value = "x";
      email.value = "";
      rol.value = "";
      aceptaCondiciones.value = false;
    };

    return {
      nombre,
      pass,
      genero,
      email,
      rol,
      aceptaCondiciones,
      rules,
      errors,
      nombreLength,
      passLength,
      isFormValid,
      handleSubmit,
      resetForm,
    };
  },
};

Vue.createApp(vm1).mount("#app");
