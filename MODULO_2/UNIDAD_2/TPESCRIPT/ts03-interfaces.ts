interface Persona {
    nombre:string,
    apellido: string,
}

let empleado: Persona ={
    nombre: "Bob",
    apellido: "Marley"
}
console.log("empleado", empleado);


interface Credenciales{
    clave:string,
    usuario: string,
}
function login(credencial: Credenciales): void{
    console.log("Bienvenido", credencial.usuario);
}
let miUsuario: Credenciales ={
    clave: "123",
    usuario: "jesus"
}
login(miUsuario);

//hacer una interface figura que tenga base y altura y lo pase a una funcion,(cuadrado y rectangulo)
