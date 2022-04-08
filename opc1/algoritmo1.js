//la variable g equivale a 1 galon
let g = 3.785;
function calculaGanancia(l, pg)
{
  let tg = l / g ;
  let tgs = Math.round(tg);

  let ga = tgs * pg;
    return ga
}
let resultado = calculaGanancia(10,20);
console.log("Su ganancia es de ",resultado );

