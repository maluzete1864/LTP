function dividindoNumeros(numero1, numero2) {
    if (numero1 == 0 || numero2 == 0){
    throw new Error("Apenas números maiores que 0 são permitidos!");
    }
    return numero1/numero2
}


try{
    const numero = dividindoNumeros(2,2)
    console.log("O valor da divisão é:", numero)
}
catch (error){
    console.log("Ocorreu um erro.", error.message)
}
