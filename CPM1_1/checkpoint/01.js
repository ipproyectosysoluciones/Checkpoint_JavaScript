/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

const { LinkedList } = require('../DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1 Agregar el método sortList al prototipo de LinkedList. Este método
   deberá ordenar los elementos de nuestra lista enlazada de mayor a menor. Si
   la lista está vacía, debe retornar false; Ejemplo: Suponiendo que la lista
   actual es: Head --> [8] --> [12] --> [3] --> [16] LinkedList.sortList();
   Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
    // Tu código aca:
    let values = [];
    let temp = this.head;
    while (temp) {
        values.push(temp.value);
        temp = temp.next;
    }
    if (!values.length) return false;
    values.sort((a, b) => b - a);
    temp = this.head;
    index = 0;
    while (temp) {
        temp.value = values[index];
        temp = temp.next;
        index++;
    }
};
// No modifiques nada debajo de esta linea //

module.exports = {
    LinkedList
};
