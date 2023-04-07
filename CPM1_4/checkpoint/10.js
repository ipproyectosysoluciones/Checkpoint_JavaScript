/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

const { BinarySearchTree } = require('../DS');

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

🔟 ***** EJERCICIO 10 - BINARYSEARCHTREE ***** - ingresar() 🔟

¡Atención! Está llegando nuestro primer cliente. Debemos venderle la entrada a
la película que quiere ver. Para esto tendrás que agregar al prototipo de
"BinarySearchTree" un método llamado "ingresar". Este recibirá por parámetro un
arreglo de objetos en los que se encuentran los horarios y nombres de las
películas.

Tendrás que recorre el árbol y agregar la propiedad "ticket" con el valor true
en cada uno de los nodos que coincida con los elementos del arreglo que recibes
por parámetro. De esta forma podremos identificar qué tickets tienen dueño y
cuántos quedan disponibles.


⛔️ IMPORTANTE ⛔️
1) Tanto los nodos del árbol como los elementos del array de objetos serán
   valores únicos.
2) Si el arreglo está vacío retornar false.


📝 EJEMPLO 📝 ÁRBOL         { nombre: "Chaplin", horario: 10 }
                             /                             \
       {nombre: "El Hobbit", horario: 7}     {nombre: "Masacre en Texas", horario: 22}
                         /                                       \
{nombre: "300", horario: 6}            {nombre: "Harry potter", horario: 23}


INPUT ---> [{ nombre: "Harry potter", horario: 23 }, { nombre: "300", horario: 6
}, { nombre: "El Hobbit", horario: 7 }]; OUTPUT -->
                            { nombre: "Chaplin", horario: 10 }
                             /                             \
       {nombre: "El Hobbit", horario: 7, ticket: true}     {nombre: "Masacre en Texas", horario: 22}
                         /                                       \
{nombre: "300", horario: 6, ticket: true}            {nombre: "Harry potter",
horario: 23, ticket: true}
*/
BinarySearchTree.prototype.ingresar = function (arregloDePeliculas) {
    // Tu código aquí:
    if (!arregloDePeliculas.length) return false;
    let tPeli = this.value.nombre;
    let tHora = this.value.horario;
    let found = arregloDePeliculas.reduce((acc, value) => {
        // console.log(tPeli)
        return acc || (value["nombre"] == tPeli && value["horario"] == tHora);
    }, false);
    // console.log(found, tPeli);
    if (found) {
        this.value.ticket = true;
    }
    if (this.left) this.left.ingresar(arregloDePeliculas);
    if (this.right) this.right.ingresar(arregloDePeliculas);
};

/*⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️*/
module.exports = BinarySearchTree;
