/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

/* 4️⃣ ***** EJERCICIO 4 - RECURSIÓN ***** - seleccionarPelicula() 4️⃣

¡Felicitaciones! Te han asignado el rol de manejar nuestro cine recién
inagurado. Junto con este rol también te asignaron un objeto con los nombres de
varias películas que tenemos dentro de Henry Buster. El público te dirá qué
película quieren ver. Tu tarea es buscarla de forma recursiva y devolverla.


⛔️ IMPORTANTE ⛔️
1) Debes utilizar recursión.
2) Si el objeto está vacío retornar el string: 'por favor indicar las peliculas
   a buscar'.
3) Si no se encuentra la pelicula retornar el string: 'no tenemos la pelicula:
   "nombrePelicula"'.
4) Si encuentras la película retornar el string: 'se encontro la pelicula:
   "nombrePelicula"'.


📝 EJEMPLO 📝

LISTA
{
 0: "El padrino", 1: "Iron Man", 2: "Terminator", 3: "Rambo", 4: "Creed"
}

INPUT ---> (LISTA, "Terminator") OUTPUT --> 'se encontro la pelicula:
Terminator'

💡 TIP 💡 Puedes definir un default-parameter para ayudarte.
*/

function seleccionarPelicula(peliculas, nombrePelicula, i = 0) {
    // Tu código aquí:
    if (!peliculas.hasOwnProperty(0))
        return "por favor indicar las peliculas a buscar";

    if (!peliculas.hasOwnProperty(i))
        return `no tenemos la pelicula: ${nombrePelicula}`;

    if (peliculas[i] == nombrePelicula)
        return `se encontro la pelicula: ${nombrePelicula}`;

    return seleccionarPelicula(peliculas, nombrePelicula, i + 1);
}


/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = seleccionarPelicula;
