//Esercizio 1 -> Crea una funzione che accetta una stringa come argomento
//e restituisce un oggetto con diverse proprietà.
//Originale, minuscolo, senza spazi, numero caratteri, che contenga JS e invertita.




//Creo la funziona che restituisce l'oggetto modificato

const analizzaTesto = function (stringa) {
   const risultato = {
        originale: stringa,
        minuscolo: stringa.toLowerCase(),
        senzaSpazi: stringa.trim(),
        numeroCaratteri: stringa.length,
        contieneJS: stringa.includes(stringa),
        invertita: invertiStringa(prova),     
   };
   return risultato;
}

//Funzione che inverte una stringa

function invertiStringa (string){
   let stringaInvertita = '';
   for (let i = string.length - 1; i>=0; i--){
      stringaInvertita += string[i];
   }
   return stringaInvertita;
}
const prova = (` JavaScript è fantastico `);
const risultato = invertiStringa(prova)

//

const test = (` JavaScript è fantastico `);
const oggettoCheVorrei = analizzaTesto(test);

console.log (oggettoCheVorrei);
