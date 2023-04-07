/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
const { BinarySearchTree } = require("../DS");

/*
  Importante:
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas.
  No comentar la funcion
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
    // tu código acá:
    let max1, max2;
    if (this.right) {
        let temp = this.right;
        let prev = null;
        while (temp.right) {
            prev = temp;
            temp = temp.right;
        }
        max1 = temp.value;
        if (prev) max2 = prev.value;
        else max2 = this.value;
    } else {
        max1 = this.value;
        if (this.left) {
            if (this.left.right) {
                max2 = this.left.right.value;
            } else {
                max2 = this.left.value;
            }
        }
    }
    return [max1, max2];
};

// No modifiques nada debajo de esta linea //

module.exports = {
    BinarySearchTree,
};
