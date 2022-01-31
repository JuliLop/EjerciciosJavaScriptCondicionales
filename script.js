//let valor = 25

//for (let i=1 ; i < valor; i=i+2){
//    console.log(i + ", ")
//}
//let ultimoValor = 25;
//let i = 1;

//while ( i <= ultimoValor) {    
// 
//    if (i < 10)
//        console.log(`0${i},`)
//    else if ( i < ultimoValor)
//        console.log(i + ",")
//    else console.log(`${i}`)
//    i++
//}

for(let y=0; y<=10 ; y++){
let a=" ";
for(let x=0; x<=16 ; x++){
  if(y==0||y==10 || x==0||x==16){
    a = a + "*"
  } else {
    a= a + " ";
  }
}
console.log(a)
}