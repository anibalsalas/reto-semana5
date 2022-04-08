let total = Number(prompt("Ingrese cantidad total de Productos"));
let cantToner = +prompt("Ingrese la cantidad de toner contabilizada");
let cantCabezal = +prompt("Ingrese la cantidad de cabezales contabilizada");
let cantTinta = +prompt("Ingrese la cantidad de tinta contabilizada");


let cantContabilizado = [cantToner, cantCabezal, cantTinta];


function cantTotal(){
  
        console.log(`la cantidad contabilizada de toner es ${cantContabilizado[0]} `);
        console.log(`la cantidad contabilizada de Cabezales es ${cantContabilizado[1]} `);
        console.log(`la cantidad contabilizada de Tinta es ${cantContabilizado[2]} `);

        let contabilizado = Number(cantToner + cantCabezal + cantTinta);
        console.log("Total Productos que deben haber: ", total);
        console.log("Total Productos contabilizados", contabilizado);
        if (total === contabilizado){
            console.log("No falta materiales ¡Felicidades!: hay un total de ", contabilizado , " contabilizados de un total de ", total);
        }else if(contabilizado < total){
            console.log("Falta materiales: hay un total de ", contabilizado , " contabilizados de un total de ", total );
        }else{
            console.log("Sobran materiales"); 
        }
    
}

let resultado = cantTotal();
    
  
