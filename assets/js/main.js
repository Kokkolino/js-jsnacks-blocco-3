// snack1
function snack1(){
    let array1 = [];
    while (array1.length < 50){
        array1.push(parseInt(prompt("inserisci un numero")));
    }
    alert(`il tuo vettore: ${array1}`);
    console.log(array1);
}
document.getElementById('snack1').addEventListener('click',snack1);

// snack2
function snack2(){
    let x1 = 0;
    for(i = 0; i < 5; ++i){
        x1 += parseInt(prompt("inserisci un numero"));
    }
    alert(` la somma é: ${x1}`);
    console.log(x1);
}
document.getElementById('snack2').addEventListener('click',snack2);
