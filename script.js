// variable definitions
const age = parseInt(prompt('Inserisci la tua età'))
const km = parseInt(prompt('Inserisci i chilometri da percorrere'))
const priceTicket = km * 0.21


// sconto minorenni
if(age < 18){
  console.log(priceTicket * (1 - 0.20))
}

// sconto over 65
if(age > 65){
  console.log(priceTicket * (1 - 0.40))
}