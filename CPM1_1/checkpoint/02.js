/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */

const { LinkedList } = require('../DS.js');
// No modifiques nada arriba de esta linea //

/*
EJERCICIO 2 Agregar el método simplifyList al prototipo de LinkedList. Este
método deberá filtrar los elementos repetidos de nuestra lista enlazada y crear
una nueva lista con los elementos extraídos para finalmente reemplazar la lista
original. Si la lista está vacía, debe retornar false Ejemplo: Suponiendo que la
lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
lista.simplifyList(); Ahora la lista resultante es: Head --> [2] --> [5] --> [1]
--> [7] --> null ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de
LinkedList
  */

LinkedList.prototype.simplifyList = function () {
    // Tu código aca:
    let uniques = [];
    let temp = this.head;
    if (!temp) return false;
    let newL = new LinkedList();
    while (temp) {
        if (!uniques.includes(temp.value)) {
            uniques.push(temp.value);
            newL.add(temp.value);
        }
        temp = temp.next;
    }
    this.head = newL.head;
}


// No modifiques nada debajo de esta linea //
module.exports = {
    LinkedList
};
