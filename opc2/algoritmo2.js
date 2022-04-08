let TI = prompt("Tenemos hambuguesas sensilla, doble y triple ¿Que tipo de Hamburguesa Elije");
let TP = prompt("¿Paga con tarjeta de credito o efectivo?")
let CA = 0.05;

function calculaPago()
{
     if (TI == 'sencilla' &&  TP == 'credito'){
         let PA = 20;
         console.log("Se le agregará 5% por ser compra al crédito"); 
         PAC = PA + (PA * CA)
         console.log("EL precio de su Hamburguesa es de ", PAC);   
         let N = prompt("¿Cuantas hamburguesas desea llevar?") 
         let TOT = (PA + (PA * CA)) * N
         console.log("El precio total de su compra es de ", TOT); 
    }
    else if (TI == 'sencilla' &&  TP == 'efectivo'){
        let PA = 20;
        console.log("EL precio de su Hamburguesa es de ", PA);
        let N = prompt("¿Cuantas hamburguesas desea llevar?") 
        let TOT = PA * N;
        console.log("El precio total de su compra es de ", TOT); 
    } 

    //
    else if (TI == 'doble' &&  TP == 'credito'){
        let PA = 25;
        console.log("Se le agregará 5% por ser compra al crédito"); 
        PAC = PA + (PA * CA)
        console.log("EL precio de su Hamburguesa es de ", PAC);   
        let N = prompt("¿Cuantas hamburguesas desea llevar?") 
        let TOT = (PA + (PA * CA)) * N
        console.log("El precio total de su compra es de ", TOT); 
    }
    else if (TI == 'doble' &&  TP == 'efectivo'){
        let PA = 25;
        console.log("EL precio de su Hamburguesa es de ", PA);
        let N = prompt("¿Cuantas hamburguesas desea llevar?") 
        let TOT = PA * N;
        console.log("El precio total de su compra es de ", TOT); 
        }
    //
    else if (TI == 'triple' &&  TP == 'credito'){
        let PA = 28;
        console.log("Se le agregará 5% por ser compra al crédito"); 
        PAC = PA + (PA * CA)
        console.log("EL precio de su Hamburguesa es de ", PAC);   
        let N = prompt("¿Cuantas hamburguesas desea llevar?") 
        let TOT = (PA + (PA * CA)) * N
        console.log("El precio total de su compra es de ", TOT); 
    }
    else if (TI == 'triple' &&  TP == 'efectivo'){
        let PA = 28;
        console.log("EL precio de su Hamburguesa es de ", PA);
        let N = prompt("¿Cuantas hamburguesas desea llevar?") 
        let TOT = PA * N;
        console.log("El precio total de su compra es de ", TOT); 
        } else {
        console.log("No elijió las opciones correctas");
    }
  
}
let resultado = calculaPago();
console.log("Resultado es ",resultado );