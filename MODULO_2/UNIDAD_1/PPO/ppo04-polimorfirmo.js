//sibreescritura de metodos
class Figura {
    calcularArea(){
        return 0;
    }
}
class Circulo extends Figura{
    _radio;

    constructor(radio){
        super();
        this._radio=radio;
    }

    calcularArea(){
        return Math.PI * this._radio**2;
    }
}

class Rectangulo extends Figura{
    _ancho;
    _alto;

    constructor(ancho,alto){
        super();
        this._ancho = ancho;
        this._alto = alto;
    }

    calcularArea(){
        return Math.PI * this._alto;
    }
}

class Cuadrado extends Figura{
    _lado;

    constructor(lado){
        super();
        this._lado = lado;
    }

    calcularArea(){
        return this._lado*this._lado*this._lado*this._lado;
    }
}


const miCirculo = new Circulo(5);
console.log(miCirculo.calcularArea());

const miRectangulo = new Rectangulo(4,6);
console.log(miRectangulo.calcularArea());

const miCuadrado = new Cuadrado(2);
console.log(miCuadrado.calcularArea());

//sobrecarga
class Calculadora {
    suma(a,b,c){
        if(c === undefined){
            console.log(`suma de dos numeros: ${a+b}`);
        }else{
            console.log(`suma de dos numeros: ${a+b+c}`);
        }
    }

    multiplicar(x, y=1, z=3){
        console.log(`Resultados: ${x*y*z}`);
    }
}

const calc = new Calculadora();
calc.suma(5,3);
calc.suma(5,3,4);
calc.multiplicar(2);
calc.multiplicar(2,3);
calc.multiplicar(2,3,4);

