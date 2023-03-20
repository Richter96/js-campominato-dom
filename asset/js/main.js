
/* Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */





// recuper elementi del dom nel quale inserire il loop
const ContainerBoxEl = document.querySelector('.container_main')


//-------------------- creare un bottone per generare una griglia

//recuperiamo il bottone del doom
const btnPlay = document.querySelector('button.play')

// assegnamo al bottone una funzone
btnPlay.addEventListener('click', function() {
// diaom all'container un reset del contenuto.
ContainerBoxEl.innerHTML = ('')

// prendiamo il valore scelto dal select difficoltà
const difficoltà = document.querySelector('.change_difficolt').value
// definiamo il numero di box prendendolo.
let numberBox = difficoltà

// -------------------------generare un loop per la creazione di box
// dichiaro una costante x numero di box
// makup del codice html
for (let i = 1; i <= numberBox; i++) {
    // console.log([i])
// creiamo un markup per i box
    const Box_Markup = `<div style="width:calc(100% / ${Math.sqrt(numberBox)} " class="box justify-content-center d-flex  align-items-center"><span>${[i]}</span></div>`
    // console.log(Box_Markup)
// scriviamo il markup nell'dom
    ContainerBoxEl.insertAdjacentHTML('beforeend', Box_Markup)
// selezioniamo il singolo box
}

// andiaom a selezionare le cielle da colorare

// constante per selezionare tutti i box
const allBox = document.querySelectorAll('.box')
// console.log(allBox)
for (let k = 0; k < allBox.length; k++) {
    const this_box = allBox[k]
    this_box.addEventListener('click', function() {
        this_box.classList.add('bg-lightblue')
        console.log(k + 1)
    })
}
} )







