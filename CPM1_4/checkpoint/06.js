/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

/* 6️⃣ ***** EJERCICIO 6 - ORDENAMIENTO ***** - ordenarPorAño() 6️⃣

En Henry Buster nos dimos cuenta que nuestro catálogo de películas sestá
desordenado. Necesitamos que nos ayudes a resolver este problema. Para esto
deberás ordenar todas las películas por año, tanto las que están en nuestro
catálogo como las que están por ingresar. Es decir que recibirás dos listas de
películas y tendrás que ordenarlas a todas.


⛔️ IMPORTANTE ⛔️
1) Tienes que ordenar todas las películas a partir de su propiedad AÑO, y de
   MENOR a MAYOR.

📝 EJEMPLO 📝

--> catalogo
[
  {
    nombre: 'Avengers: La era de Ultrón',
    añoDeEstreno: 2015,
    genero: 'Fantasia/Aventura/Acción',
    taquillera: true,
   },
  {
    nombre: 'Toy Story 3',
    añoDeEstreno: 2010,
    genero: 'Infantil/Animación',
    taquillera: true,
   }
 ]

--> nuevasPeliculas
[
  {
    nombre: 'Sonic',
    añoDeEstreno: 2012,
    genero: 'Aventura',
    taquillera: false,
   }
 ]

INPUT ---> (catalogo, nuevasPeliculas) OUTPUT --->
[
  {
    nombre: 'Toy Story 3',
    añoDeEstreno: 2010,
    genero: 'Infantil/Animación',
    taquillera: true,
   },
  {
    nombre: 'Sonic',
    añoDeEstreno: 2012,
    genero: 'Aventura',
    taquillera: false,
   },
  {
    nombre: 'Avengers: La era de Ultrón',
    añoDeEstreno: 2015,
    genero: 'Fantasia/Aventura/Acción',
    taquillera: true,
   }

 ]

💡TIP 💡
1) Te sugerimos que investiges métodos de objetos. Tal vez el "assign" te podría
   servir...

*/

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function insertionSort(array) {
    let n = array.length;
    for (let i = 1; i < n; ++i) {
        let j = i;
        while (j > 0 &&
            array[j]["añoDeEstreno"] < array[j - 1]["añoDeEstreno"]) {
            swap(array, j, j - 1), j--;
        }
    }
}

function ordenarPorAño(catalogo, nuevasPeliculas) {
    let all_movies = catalogo.concat(nuevasPeliculas);
    insertionSort(all_movies);
    return all_movies;
}


/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = ordenarPorAño;
