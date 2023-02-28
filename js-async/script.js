function operacao1() { 
    setTimeout(function teste() { 
        console.log("Chamou operacao1");
    }, 2000);}

function operacao2() { 
    operacao1();
    console.log("Chamou operacao2");
}
     
operacao2();