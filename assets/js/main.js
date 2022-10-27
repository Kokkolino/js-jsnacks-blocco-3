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

// snack3 
function snack3(){
    let x2 = parseInt(prompt("quanti vettori vuoi creare?"));
    for(let i = 1; i <= x2; ++i){
        eval('var ' + 'arrayN'+ i + ' = ' + '['+']'+';');
        eval('console' + '.' + 'log' + '('+ 'arrayN' + i +')' + ';')

        for(k=0; k < 10; ++k){
            let random = Math.round(Math.random() * 99) + 1;
            eval('arrayN' + i + '.push' + `(${random});`);
        }
        eval('alert(arrayN' + i +');')
    }
    console.log(x1);
}
document.getElementById('snack3').addEventListener('click',snack3);

// snack4
function snack4(){
    let nomiInvitati = ["gianni", "carlo", "silvio", "zlatan", "giulio"];
    console.log(nomiInvitati);
    let x4 = prompt('nome invitato');
    console.log(x4)
    let z4 = 0;
    let y4 = nomiInvitati.length;
    while(z4 < y4){

        if(x4 == nomiInvitati[z4]){
            alert(`${x4} é invitato alla festa`);
            console.log(`${x4} é invitato alla festa`);
            break;
        }
        else
        {
            z4++
        }

    }
    if(z4 === 5){
        alert(`${x4} non é stato invitato`)
        console.log(`${x4} non é stato invitato`)

    }
}
document.getElementById('snack4').addEventListener('click',snack4);
