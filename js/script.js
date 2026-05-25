/* =====================================================
   OBTENER EL BOTÓN DEL FORMULARIO
   ===================================================== */

/* Se obtiene la referencia al botón mediante su ID */
const boton =
document.getElementById("btnCalcular");

/* =====================================================
   EVENTO DEL BOTÓN
   ===================================================== */

/* Cuando el usuario haga clic en el botón,
   se ejecutará la función calcularAhorro() */
boton.addEventListener(
    "click",
    calcularAhorro
);

/* =====================================================
   FUNCIÓN PARA VERIFICAR SI UN NÚMERO ES PRIMO
   ===================================================== */

/*
   Un número primo solamente tiene dos divisores:
   el 1 y él mismo.
*/
function esPrimo(numero){

    /* Los números menores que 2 no son primos */
    if(numero < 2){
        return false;
    }

    /* Contador de divisores encontrados */
    let divisores = 0;

    /* Recorre todos los números desde 1 hasta el valor ingresado */
    for(let i = 1; i <= numero; i++){

        /* Verifica si el número es divisible exactamente */
        if(numero % i === 0){

            divisores++;
        }
    }

    /* Si tiene exactamente 2 divisores es primo */
    return divisores === 2;
}

/* =====================================================
   FUNCIÓN PRINCIPAL DEL PROGRAMA
   CALCULA EL AHORRO UTILIZANDO FIBONACCI
   ===================================================== */

function calcularAhorro(){

    /* ===============================================
       OBTENER LOS DATOS DEL FORMULARIO
       =============================================== */

    /* Obtiene la cantidad de meses ingresada
       por el usuario y la convierte a entero */
    let meses =
    parseInt(
        document.getElementById("meses").value
    );

    /* Obtiene el contenedor donde se mostrarán
       los resultados */
    let resultado =
    document.getElementById("resultado");

    /* ===============================================
       VALIDACIÓN DE DATOS
       =============================================== */

    /* Verifica que el usuario haya ingresado
       un número válido */
    if(isNaN(meses) || meses <= 0){

        resultado.innerHTML =
        "Ingrese una cantidad válida.";

        return;
    }

    /* ===============================================
       VARIABLES PARA LA SERIE DE FIBONACCI
       =============================================== */

    /* Primer valor de apoyo */
    let a = 0;

    /* Segundo valor de apoyo */
    let b = 1;

    /* Acumulador para el ahorro total */
    let total = 0;

    /* Variable donde se almacenará el HTML generado */
    let html = "";

    /* ===============================================
       GENERAR LA SECUENCIA DE FIBONACCI
       =============================================== */

    for(let i = 1; i <= meses; i++){

        /* Variable que almacenará el valor del mes actual */
        let valor;

        /* Primer término de Fibonacci */
        if(i === 1){

            valor = 1;

        }

        /* Segundo término de Fibonacci */
        else if(i === 2){

            valor = 1;

        }

        /* A partir del tercer término */
        else{

            /* Suma de los dos valores anteriores */
            let c = a + b;

            /* Actualización de variables */
            a = b;
            b = c;

            /* Nuevo valor de Fibonacci */
            valor = c;
        }

        /* Acumula el ahorro total */
        total += valor;

        /* ===========================================
           VERIFICAR SI EL VALOR ES PRIMO
           =========================================== */

        if(esPrimo(valor)){

            /* Si es primo se agrega una clase especial
               para resaltarlo en color diferente */
            html +=
            `<div class="numero primo">
                Mes ${i}: ${valor} Bs
            </div>`;

        }else{

            /* Si no es primo se muestra normalmente */
            html +=
            `<div class="numero">
                Mes ${i}: ${valor} Bs
            </div>`;
        }
    }

    /* ===============================================
       MOSTRAR EL AHORRO TOTAL ACUMULADO
       =============================================== */

    html += `
    <div style="
        width:100%;
        margin-top:20px;
        font-size:1.2rem;
        font-weight:bold;
    ">
        💵 Ahorro total:
        ${total} Bs
    </div>
    `;

    /* ===============================================
       MOSTRAR RESULTADOS EN LA PÁGINA
       =============================================== */

    resultado.innerHTML = html;
}