/*Crea una función que recibe como argumento una frase que contenga
letras y números. La función debe de leer todos los números y devolver
la suma de todos ellos.*/
let frase="Est4 3s una F54se y4 tu s4b35";
let suma=0;
for(let i =0;i<frase.length;i++ ){
    let caracter=frase.charAt(i);
    if(Number(caracter)){
        console.log(caracter);
        suma+=caracter;
    }

}