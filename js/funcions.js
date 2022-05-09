// document.body.onload=function(){

//     alert("hola mundo")
// }

function suma() {
    var A = 0;
    var B = 0;
    var suma = 0;

    alert ("A continuacion encontrara un algorimo para una suma donde tiene que ingrsar 2 valores");

    A = parseInt(prompt("Por favor ingrese el primer valor a sumar: "));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar: "));

    suma = A + B;

    alert( "El resultado de la suma es"+ suma)
} 

function OPER() {
    var NUM1 = 0
    var NUM2 = 0
    var suma = 0
    var rest = 0
    var mult = 0
    var divi = 0
    
    alert("A continuacion encontraraun algoritmo para recibir el resultado de: ´sumar restar multiplicar y dividir dos valores´")

    NUM1 = parseInt(prompt("Por favor ingrese el primer valor:"));
    NUM2 = parseInt(prompt("Por favor ingrese el segundo valor:"));

    suma = NUM1 + NUM2
    rest = NUM1 - NUM2
    mult = NUM1 * NUM2
    divi = NUM1 / NUM2

    alert ("El valor "+NUM1+" y el valor "+NUM2+"\nSumados dan: "+suma+"\nRestados: "+rest+"\nMultiplicados: "+mult+"\nDivididos: "+divi);

      
}

function MAYORD2N(){
var A = 0
var B = 0

alert(" A continuacion el algoritmo le ayudara a encontrar el numero mayor de dos digitos ingresados")

A = parseInt(prompt("Por favor dijite el primer digito: "))
B = parseInt(prompt("Por Favor digite el segundo digito:"))

if (A>B) {alert("EL NUMERO MAYOR ES:"+A);
} else if (A<B) {alert("EL NUMERO MAYOR ES: "+B);
} else if (A=B) {alert("LOS NUMEROS SON IGUALES ");  
}
}

function MENORD3N(){
    var A=0
    var B=0
    var C=0


    alert("Este algoritmo le ayudara a encontrar el digito mayor de 3 numeros ingrsados.")

    A = parseInt(prompt("Por favor dijite el primer digito: "))
    B = parseInt(prompt("Por Favor digite el segundo digito:"))
    C = parseInt(prompt("Por favor dijite el tercer digito: "))

    if ((A>B) && (B>C)) {alert("EL NUMERO MENOR ES: "+C);
    } else if ((A>B) && (C>B)) {alert("EL NUMERO MENOR ES: "+B);
    } else if ((A<B) && (A<C)) {alert("EL NUMERO MENOR ES: "+A);
    } else if ((A==B)&&(B==C)) {alert("LOS NUMEROS SON IGUALES");

}
}

function PAROIMP(){
    var NUM = 0

    alert("Este algoritmo le ayudara a saver si un digito es par o impar:")

    NUM = parseInt(prompt("Por favor dijite un numero: "))

    if (NUM %2 ==0 ) {alert("Su numero es PAR");
    } else {alert("Su numero es IMPAR");
}
}

function NUMER2(){
    var NUM = 0
    var RESPU = 0
    alert("Aqui le ayudaran a sacar el cuadrado de un numero.")

    NUM = parseFloat(prompt("Por favor dijite  el numero a levar: "));
    RESPU=NUM **2
    
    alert("El numero elevado al cuadrado da como resltado: "+RESPU)
}

function AREDT(){
    var BASE = 0
    var ALTU = 0
    var AREA = 0

    alert("Aqui le ayudara a sacar el Area de un triangulo")

    BASE = parseInt(prompt("Dijite la base del triangulo"))
    ALTU = parseInt(prompt("Dijite la altura del triangulo"))

    AREA = (BASE*ALTU) /2

    alert("EL AREA DE SU TRIANGULO ES; "+AREA)
}

function METRA(){
    var METRO = 0
    var CENT = 0
    var PULG = 0
    var KILO = 0

    alert("Este algoritmo le ayudara a pasar una cantidad que esta en metros convertilos en centimetros, pulgadas y kilometros.")

    METRO =parseFloat(prompt("Digite la cantidad de metros a comvertir:"));

    CENT = METRO *100
    PULG = METRO *39.0
    KILO = METRO /1000

    alert ("los "+METRO+" Metros a:\nCentimetros es: "+CENT+" centimetros\nEn pulgadas es: "+PULG+" Pulgadas\nEn kilometros es: "+KILO+" kilometros");
}

function NACIO(){
    var EDAD  = 0
    var NACI = 0

    alert("Este algoritmo le ayudara a saver en  que año nacio con solo digitar su edad.")

    alert("Si usted no a cumplido años este año, dijite cuantos años vas cupmplir. \n Si ya los cumplio digitelos normal")

    EDAD = parseInt(prompt("Si usted no a cumplido años este año, dijite cuantos años vas cupmplir. \n Si ya los cumplio digitelos normal. \n\n ¿Usted que edad tiene?"));
    NACI = 2022-EDAD
    alert("Usted nacio en el año: "+NACI)
}

function INVER(){
    var INVER     = 0
    var ANUALINV  = 0
    var GANAMES   = 0
    var GANATOTAL = 0
    var MESES     = 0

    alert("Este algoritmo le ayudara a saver cuanto dinero ganara usted por invertir en un banco durante los años que tendra su dinero alli \n y cuanto recibira en total.\n\n  Si el banco paga un interes del 2% por invercion.")

    INVER    = parseInt(prompt("Cuanto dinero va invertir en el banco: "));
    ANUALINV = parseInt(prompt("Durante cuantos años va a dear su dinero al banco: "));

    MESES = ANUALINV *12
    GANAMES = (INVER*2)/100
    GANATOTAL = GANAMES*MESES
    alert("Usted por su invercion al mes va a recibir: "+GANAMES+"\n Y en total va a recibir: "+GANATOTAL)

}

function PROM(){
    var NOTA1 = 0
    var NOTA2 = 0
    var NOTA3 = 0 
    var NOTA4 = 0
    var NOTA5 = 0
    var PROME = 0

    alert("Aqui te ayudaran a sacar el promedio de 5 calificaciones para un estudiante. ")

    NOTA1 = parseFloat(prompt("DIgijite la primera calificacion: "));
    NOTA2 = parseFloat(prompt("DIgijite la segunda calificacion: "));
    NOTA3 = parseFloat(prompt("DIgijite la tercera calificacion: "));
    NOTA4 = parseFloat(prompt("DIgijite la cuarta calificacion: "));
    NOTA5 = parseFloat(prompt("DIgijite la quinta calificacion: "));

    PROME = (NOTA1+NOTA2+NOTA3+NOTA4+NOTA5)/5

    if (PROME<3) {alert("El promedio del alumno es: "+PROME+"\nEl estudiante REPROBO la materia.");
        
    } else {alert("El promedio del alumno es: "+PROME+"\nEl estudiante APROVO la materia.");    
        
    }



}

function KILO(){
    var CANT  = 0
    var DESC1 = 0
    var DESC2 = 0
    var DESC3 = 0
    var TOTAL = 0

    alert("Este algoritmo nos ayudara a saver cuanto tiene que pagar un cliente en un super mercado por unos kilos de manzana. ")

    CANT = parseFloat(prompt("Si compro de 1 a 2 kilos NO tiene descuento.\nSi compro de 3 a 5 kilos tiene un 10% de descuento.\nSi compro de 6 a 10 kilos tiene un 15% de descuento.\nSi compro 10 o mas kilos tiene un 20% de descuento.\n\n ¿Cuantos kilos de manzana va a llevar?"));

    TOTAL = CANT*4500 
    DESC1 = TOTAL-((TOTAL*10)/100)
    DESC2 = TOTAL-((TOTAL*15)/100)
    DESC3 = TOTAL-((TOTAL*20)/100)

    if (CANT<3) {alert("No tiene ningun descuento su tatal a pagar es: "+TOTAL);
        
    } else if (CANT <=5) {alert("Tiene un 10% de descuento en su compra, Su total a pagar es: "+DESC1);
    } else if (CANT <=10) {alert("Tiene un 15% de descuento en su compra, Su total a pagar es: "+DESC2);
    } else if (CANT >10) {alert("Tiene un 20% de descuento en su compra, Su total a pagar es: "+DESC3);
    }

}
