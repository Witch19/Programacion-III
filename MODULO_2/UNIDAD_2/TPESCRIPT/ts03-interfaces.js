var empleado = {
    nombre: "Bob",
    apellido: "Marley"
};
console.log("empleado", empleado);
function login(credencial) {
    console.log("Bienvenido", credencial.usuario);
}
var miUsuario = {
    clave: "123",
    usuario: "jesus"
};
login(miUsuario);
