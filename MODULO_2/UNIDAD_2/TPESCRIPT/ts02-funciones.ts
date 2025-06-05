function saludar(nombre: string): string{
    return `hola, ${nombre}`
}
console.log(saludar("betty"))

//Parametros opcionales
function obtenerApellido(spellido: string){
    return `mi apellido, ${spellido ?? "invitado"}`
}
console.log(obtenerApellido("picapiedra"))

//Parametros por defecto
function obtenerEdad(edad: number=18){
    return `mi edad, ${edad} años`
}
console.log(obtenerEdad(25));
console.log(obtenerEdad());

//funcion tipo flecha
const sumar=(a:number,b:number): number=>{
    return a+b;
}
console.log("La suma es:",sumar(5,4));

function mostrarInfo(informacion: string):void{
    console.log(informacion);
}
mostrarInfo("Suceso en norte de quito");

//tipar funciones como variables
let operacion: (x:number, y:number)=>number;
operacion = function(a,b){
    return a+b;
}
console.log("operacion suma:",operacion(15,14));

//funcion que recibe un arreglo string y saludar a cada persona
let nombres: Array<string> = ["andre","gordis","maria"];
function saludar(): string{
    return `hola, ${nombre}`
}
console.log(saludar())
