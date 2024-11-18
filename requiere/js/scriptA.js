
/*Codigo patrones sintactico */


document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    body.addEventListener('click', listener);
});


const listener = (event) => {
    
    if(event.target && event.target.id == 'generateContra') start();

}


function start(){
    let contr = document.getElementById("contrasenia").value;
    verificarContraseña(contr);
}




function verificarContraseña(contraseña) {
    //Expresión regular para verificar la complejidad de la contraseña
    const longitudMinima = 8;
    const tieneLetraMayuscula = /[A-Z]/.test(contraseña);
    const tieneLetraMinuscula = /[a-z]/.test(contraseña);
    const tieneNumero = /\d/.test(contraseña);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);

    // Verificar si cumple con todos los requisitos
    if (contraseña.length >= longitudMinima && tieneLetraMayuscula && tieneLetraMinuscula && tieneNumero && tieneCaracterEspecial) {
        console.log("Contraseña segura");
        return true;
    } else {
        console.log("Contraseña insegura");
        recomendarContraseñas(contraseña);
        return false;
    }
}

function recomendarContraseñas(contraseña) {
    // Sugerir contraseñas similares (ejemplo simple)
    const recomendadas = [
        contraseña + "123!",
        "Mi" + contraseña + "2024",
        "Contraseña_" + contraseña,
        contraseña.split('').reverse().join('') + "@",
        contraseña + "_seguro"
    ];

    console.log("Recomendaciones de contraseñas similares:");
    recomendadas.forEach((recomendacion) => {
        console.log(recomendacion);
    });
}
