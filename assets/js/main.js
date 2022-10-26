// snack1
function snack1(){
    let array1 = [];
    while (array1.length < 50){
        array1.push(parseInt(prompt("inserisci un numero")));
    }
    console.log(array1);
}
document.getElementById('snack1').addEventListener('click',snack1);

// snack2
