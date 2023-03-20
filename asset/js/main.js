
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





//---------------------- RECUPERIAMO ELEMENTI DEL DOM 

const ContainerBoxEl = document.querySelector('.container_main')
const difficoltà = document.querySelector('.change_difficolt').value
const btnPlay = document.querySelector('button.play')//recuperiamo il bottone del doom
let bombsEl = []


//-------------------- creare un bottone PLAY per generare una GRIGLIA e far partire il gioco


btnPlay.addEventListener('click', function () {// assegnamo al bottone una funzone
    // funzione per generare le box
    generateBox(difficoltà)
    // generiamo le bombe
    Generatebomb(difficoltà)
    console.log(bombsEl)

//---------------------andiaom a colorare le celle selezionate
    // constante per selezionare tutti i box
    // impostiamo il colore rosso se calpestiamo una delle bombe (bombsEl) in alternativa il colore della casella sarà azzurro
    const allBox = document.querySelectorAll('.box')
    for (b = 0; b < bombsEl.length; b++) {
        const elementbomb = bombsEl[b]
        console.log(elementbomb)
        for (let k = 0; k < allBox.length; k++) {
            const this_box = allBox[k]
            const numberClickBox = Number(k + 1)
            this_box.addEventListener('click', function () {
                if (numberClickBox == elementbomb) {
                this_box.classList.add('bg-red')
                } else {
                    this_box.classList.add('bg-lightblue')
                }
            })
        }

    }



})





//----------------------------- FUNZIONI

function generateBox(numberBox) {
    // impostiamo un reset box
    ContainerBoxEl.innerHTML = ('')
    // -------------------------generare un loop per la creazione di box
    // dichiaro una costante x numero di box
    for (let i = 1; i <= numberBox; i++) {
        // creiamo un markup per i box
        const Box_Markup = `<div style="width:calc(100% / ${Math.sqrt(numberBox)} " class="box justify-content-center d-flex  align-items-center"><span>${[i]}</span></div>`
        // console.log(Box_Markup)
        // scriviamo il markup nell'dom
        ContainerBoxEl.insertAdjacentHTML('beforeend', Box_Markup)
        // selezioniamo il singolo box
    }
}

function Generatebomb(livello) {
    //impostiamo un reset ai numeri delle bombe
    bombsEl = [];
    //creaimo un ciclo per generare 16 numeri compresi tra i numeri di celle del livello
    for (let nbom = 0; nbom < 16; nbom++) {
        const numBomb = Number(Math.ceil(Math.random() * livello))
        bombsEl.push(numBomb)
    }
}







/* Consegna

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina.
Altrimenti
la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. */
















/* // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// generiamo un array con i numeri delle bombe

// dichiariamo un livello di partenza
const livello1 = 40

// generiamo dei numeri a caso da 1 al numero di livello
const numBomb = Number(Math.ceil(Math.random() * livello1))
// console.log(numBomb);

// creiamo un loop per generare i 16 numeri delle bombe 

console.log(bombsEl)

 */



