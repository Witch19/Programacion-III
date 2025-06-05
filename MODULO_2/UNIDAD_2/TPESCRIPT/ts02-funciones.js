function saludar(nombre) {
    return "hola, ".concat(nombre);
}
console.log(saludar("betty"));
//Parametros opcionales
function obtenerApellido(spellido) {
    return "mi apellido, ".concat(spellido !== null && spellido !== void 0 ? spellido : "invitado");
}
console.log(obtenerApellido("picapiedra"));
//Parametros por defecto
function obtenerEdad(edad) {
    if (edad === void 0) { edad = 18; }
    return "mi edad, ".concat(edad, " a\u00F1os");
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());
//funcion tipo flecha
var sumar = function (a, b) {
    return a + b;
};
console.log("La suma es:", sumar(5, 4));
function mostrarInfo(informacion) {
    console.log(informacion);
}
mostrarInfo("Suceso en norte de quito");
//tipar funciones como variables
var operacion;
operacion = function (a, b) {
    return a + b;
};
console.log("operacion suma:", operacion(15, 14));
//funcion que recibe un arreglo string y saludar a cada persona
var nombres = ["andre", "gordis", "maria"];
console.log("Edades", edades);
