/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
// 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 4️⃣
//
//
// Implementar la función 👨‍👨‍👦 atenderClientes() 👨‍👨‍👧, la cual recibirá
// por parámetros un objeto de clientes que estarán esperando ser atendidos.
// Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS: Dado el siguiente objeto de clientes:
// {
//  1: "Franco", 2: "María", 3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS: 🟢 Vaciar recursivamente el objeto de clientes y retornar el
//  objeto vacío
//
// Tip: Podés usar el operador delete para los objetos.

function atenderClientes(clientes) {
    // Tu código aquí:
    let keys = Object.keys(clientes);
    if (!keys.length) return clientes;
    let first_key = keys[0];
    delete clientes[first_key];
    return atenderClientes(clientes);
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    atenderClientes,
};
