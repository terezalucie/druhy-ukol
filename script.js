let firstName = prompt("Zadej své křestní jméno a to bez diakritiky: ")
let lastName = prompt("Zadej své příjmení a to bez diakritiky: ")
const email = "@fit.cvut.cz"

let trimFirst = firstName.trim()
let trimLast = lastName.trim()
let sliceFirst = trimFirst.slice(0, 3)
let sliceLast = trimLast.slice(0, 5)
let lowerFirst = sliceFirst.toLocaleLowerCase()
let lowerLast = sliceLast.toLocaleLowerCase()


document.body.innerHTML = `<h1>Tvůj nově vytvořený email je: </h1> 
<p>${lowerLast}${lowerFirst}${email}</p>`