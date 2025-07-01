// variable definitions
const age = parseInt(prompt('Inserisci la tua età'))
const km = parseInt(prompt('Inserisci i chilometri da percorrere'))
const priceTicket = km * 0.21
const priceChilds = priceTicket * (1 - 0.20)
const priceOver = priceTicket * (1 - 0.40)
const ageTwo = 18
const ageThree = 65

// sconto minorenni
if(age < 18){
  console.log(priceChilds)
}

// sconto over 65
if(age > 65){
  console.log(priceOver)
}

// prezzo età compresa 18-65
if(age >= ageTwo && age <= ageThree ){
  console.log(priceTicket)
}