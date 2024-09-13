const menor = (n1, n2, n3) => {
    if (n1 <= n2 && n1 <= n3) return n1;
    if (n2 <= n1 && n2 <= n3) return n2;
    return n3;
};


const iguales = (n1, n2, n3) => {
    if (n1 === n2 || n1 === n3) return n1;
    if (n2 === n3) return n2;
    return null;
};

const procesar = (n1, n2, n3) => 
    new Promise(resolve => {
        const menorNumero = menor(n1, n2, n3);
        const numeroIgual = iguales(n1, n2, n3);
        const mensaje = numeroIgual
            ? `El menor es: ${menorNumero}. Números iguales: ${numeroIgual}`
            : `El menor es: ${menorNumero}`;
        resolve(mensaje);
    });

document.getElementById("formNumeros").addEventListener("submit", e => {
    e.preventDefault();
    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);
    const n3 = parseInt(document.getElementById("num3").value);

    procesar(n1, n2, n3).then(resultado => {
        document.getElementById("resultado").textContent = resultado;
    });
});

