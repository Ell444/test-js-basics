//Esercizio 3 -> Gestione di eventi e elementi DOM



window.addEventListener('load', () => {
    const btn = document.querySelector('#bottoneInvio');
    btn.addEventListener('click', () => {
        const body = document.body;
        const input = document.querySelector('#testoUtente');
        const p = document.createElement('p');
        p.innerText = `JavaScript è cattivo con me!`;
        body.appendChild(p);
       if(input.value != ''){
        p.innerText += input.value;
       }else {
        alert('Inserisci una parola da inviare!');
       }
     
    })
})


