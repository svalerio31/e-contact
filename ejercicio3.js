function datosPersona(persona = {}) {

    const { nombre: nom, edad, altura} = persona;

    return `Esta persona se llama ${nom}, tiene ${edad}, años y su altura es de ${altura}`;
}

const datos_persona = datosPersona({nombre: "Silvio", edad: 33, altura: 1.65});
console.log(datos_persona);
