
    var i, altura, 
    sexo, maioraltura = 0, 
    menoraltura = 0, mulher = 0, 
    homem = 0, mediamulher = 0, 
    mediahomem = 0, contadormulher = 0, 
    contadorhomem= 0;
    
for(i = 1 ;i <= 15; i++) {		
    altura = parseFloat(prompt("Informe sua altura["+i+"]:"));
    sexo = prompt("Sexo: M ou F:").toUpperCase();
    

    if ( i == 1){
        menoraltura = altura;
    } if (altura > maioraltura) { 
        maioraltura = altura;
    } if (altura < menoraltura) { 
        menoraltura = altura;
    } if (sexo == 'F') {
        mulher += altura;
        contadormulher++;
    } else if(sexo == 'M') {
        homem += altura;
        contadorhomem++;
    }
}
mediamulher = mulher/contadormulher;
mediahomem= homem/contadorhomem;
console.log("A maior altura é: "+maioraltura); 
console.log("A menor altura é: "+menoraltura);
console.log("A média das mulheres é: "+mediamulher);
console.log("A média dos homens é: "+mediahomem);
console.log("O número de homens é: "+contadorhomem);
console.log("O número de homens é: "+contadormulher);