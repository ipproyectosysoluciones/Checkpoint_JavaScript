const { Stack } = require("../DS");

/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

 2️⃣ ***** EJERCICIO 2 - STACK ***** - acomodarPeliculas() 2️⃣

La función "acomodarPeliculas" recibirá dos datos por parámetro. Por un lado
recibe un arreglo de películas, y por lado un string con el nombre de una
película.

El objetivo de este ejercicio es que crees un Stack en el cuál guardes las
películas del arreglo. Sólo debes guardar aquellas películas cuyo nombre no
coincida con el string que recibes por parámetro. Si además la película tiene
una duración menor a una hora, tampoco debe estar incluida en el Stack.
Finalmente, retorna el Stack.

⛔️ IMPORTANTE ⛔️
1) Retornar un Stack.
2) Respetar la condición LIFO a la hora de agregar películas al Stack.


📝 EJEMPLO 📝 INPUT ---> ([{ nombre: "Spider-Man: Sin camino a casa", estreno:
2022, duracion: "2:30 hs",
            }, {
                nombre: "Batman",
                estreno: 2022,
                duracion: "1:45 hs",
            }],
            "Top Gun: Maverick")


OUTPUT ---> Stack [
      {
        nombre: "Spider-Man: Sin camino a casa",
        estreno: 2022,
        duracion: "2:30 hs",
      },
      {
        nombre: "Batman",
        estreno: 2022,
        duracion: "1:45 hs",
      }]
*/
function acomodarPeliculas(listaDePeliculas, nombre) {
    // Tu código aquí:
    let stack = new Stack();
    for (let pelicula of listaDePeliculas) {

        let duracion = pelicula["duracion"];
        let nombrePeli = pelicula["nombre"];
        let estreno = pelicula["estreno"];

        if (nombre !== nombrePeli && duracion >= 1) {
            let obj = {
                "nombre": nombrePeli,
                estreno,
                duracion,
            }
            stack.push(obj);
        }
    }
    return stack;
}

/* ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️*/
module.exports = acomodarPeliculas;
