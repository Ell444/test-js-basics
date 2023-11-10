//Esercizio 2 -> Crea una funzione riempiArray che genera un array di numeri casuali.
//La funzione deve accettare tre argomenti: numeroElementi, valoreMinimo e valoreMassimo.
//numeroElementi determina la lunghezza dell'array, valoreMinimo deterimina il valore minimo
//che può assumere ogni numero casuale, mentre valoreMassimo deterimina il valore massimo
//che può assumere ogni numero casuale (Uso Math.random e Math.floor)
//Dopo aver generato l'array, scrivi una funzione che conta pari e dispari
//che deve accettare l'array come argomento e restituisce un oggetto con due proprità: pari e dispari,
//che rappresentano rispettivamente il numero di elementi per pari e dispary nell'array.



//Funzione che riempie l'array

function riempiArray(numeroElementi, valoreMinimo, valoreMassimo){
    let array = [];
    for (i = 0; i < numeroElementi; i++){
        let n = (Math.floor(Math.random() * (valoreMassimo - valoreMinimo + 1)) + valoreMinimo);
        array.push(n);
    };
    return array;
}

let arrayCasuale = riempiArray(10, 2, 50);
console.log(arrayCasuale);


//Funzione che crea l'oggetto

const contaPariDispari = (array) => {
    let object = {
        pari: 0,
        dispari: 0
    }
    for(i = 0; i < array.length; i++){
        if (arrayCasuale[i] % 2 === 0){
            object.pari ++;
        }else {
            object.dispari ++;
        }
    }
    return object;
}

let conteggio = contaPariDispari(arrayCasuale);
console.log (conteggio);

