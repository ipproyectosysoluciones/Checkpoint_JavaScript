/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
const { BinarySearchTree } = require("../DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// EJERCICIO 09 Implementar el método insertWord en el prototype de
// BinarySearchTree El método será similar al método insert ya implementado,
// pero en lugar de agregar valores numéricos al árbol, se encargará de insertar
// palabras que tomarán posición basándose en la cantidad de caracteres que
// posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una
// cantidad de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!: ✔️ Si el método recibe un string vacío, debe retornar false ✔️
// Si el método recibe una palabra de tamaño igual a una palabra ya existente,
// debe retornar false. ✔️ La palabra debe insertarse en el lugar
// correspondiente y, de ser así, retornar el string que ha sido insertado

BinarySearchTree.prototype.insertWord = function (string) {
    // Tu código acá
    let n = string.length;
    if (n == this.value.length || !n) {
        return false;
    }
    else if (n < this.value.length) {
        if (this.left) {
            return this.left.insertWord(string);
        } else {
            this.left = new BinarySearchTree(string);
            return string;
        }
    }
    else {
        if (this.right) {
            return this.right.insertWord(string);
        } else {
            this.right = new BinarySearchTree(string);
            return string;
        }
    }
};

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { BinarySearchTree };
