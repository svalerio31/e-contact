function verificarClave(objeto = {},clave) {

    let result = Object.prototype.hasOwnProperty.call(objeto,clave)
    return result;

}
console.log(verificarClave({nombre: 'Silvio', edad: 33, profesion: 'Ingeniero Redes'},'altura'))