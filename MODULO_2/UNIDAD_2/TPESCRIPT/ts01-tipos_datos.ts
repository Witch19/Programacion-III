let cantidad: number = 19;
//cantidad = "1223";
let nombre: string = "JOSE ZAMBRANO";
let opcion: boolean = true;
console.log("cantidad", cantidad);
console.log("nombre", nombre);
console.log("opcion", opcion);


let opcional: any = "comodin any";
opcional=100;

//Tipos de datos compuestos
let equipos: string[] = ["barcelona","real matrid","ecuador","vino tinto","liga"];
console.log("Equipos", equipos);

let edades: Array<number> = [10,12,23,46];
console.log("Edades", edades);

//tuplas
let persona: [string, number] =["UTE",4657467];
console.log("persona", persona);


//Enums
var Estados;
(function Estados {
    Estados[Estados["PENDIENTE"]=0]="PENDIENTE",
    Estados[Estados["ENVIADO"]=1]="ENVIADO",
    Estados[Estados["ENTREGADO"]=2]="ENTREGADO"
})(Estados || (Estados={}));
let miEstado: Estados = Estados.ENTREGADO;
console.log(miEstado);





