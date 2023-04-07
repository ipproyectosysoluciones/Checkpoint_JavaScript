/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

const { LinkedList } = require('../DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 3 Implementar el método count dentro del prototype de LinkedList que
  deberá retornar la suma de todos los valores dentro de la lista. En caso de
  que la lista esté vacía, retornar 0 Ejemplo: Dada esta lista: [4] --> [2] -->
  [7] -- > null LinkedList.count() --> 13
*/

LinkedList.prototype.count = function () {
    // Tu código aca:
    let suma = 0;
    let temp = this.head;
    while (temp) {
        suma += temp.value;
        temp = temp.next;
    }
    return suma;
}

// No modifiques nada debajo de esta linea //

module.exports = LinkedList;
