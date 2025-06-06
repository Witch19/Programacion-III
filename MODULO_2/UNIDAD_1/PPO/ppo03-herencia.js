class Animal {
    _nombre;
    constructor(nombre) {
        this._nombre = nombre;
    }

    hacerSonido() {
        console.log("Sonido Gnerico");
    }
}

class Perro extends Animal{
    caminar(){
        console.log("Perro caminando")
    }
}

const miPerro = new Perro("Martin");
miPerro.hacerSonido();
miPerro.caminar();

const miGato = new Animal ("Hello kitty");
miGato.hacerSonido();
//miGato.caminar();
