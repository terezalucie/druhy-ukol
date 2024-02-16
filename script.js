// PROGRAM NA VYTVOŘENÍ EMAILU


let firstName = prompt("Zadej své křestní jméno bez diakritiky:")
let lastName = prompt("Zadej své příjmení bez diakritiky: ")
const email = "@fit.cvut.cz"

let trimFirst = firstName.trim()
let trimLast = lastName.trim()
let sliceFirst = trimFirst.slice(0, 3)
let sliceLast = trimLast.slice(0, 5)
let lowerFirst = sliceFirst.toLowerCase()
let lowerLast = sliceLast.toLowerCase()


document.body.innerHTML = `<h1>Tvůj nově vytvořený email je: </h1> 
<p>${lowerLast}${lowerFirst}${email}</p>`


/* 
ŘEŠENÍ:
1. Vytvořila jsem tři proměnné. V první je prompt, který se zeptá na křesní jméno. V druhé se zeptá na příjmení. Ve třetí je uložena koncovka emailu.
2. Vytvářím novou proměnou pro odstranění přebytečných mezer, do které vkládám firstName. Stejně tak postupuju u příjmení.
3. Opakuji postup a použiju metodu slice, která mi vezme 5 písmen z příjmení a 3 písmena z jména.
4. Znova vezmu uloženou proměnnou a nechám metodu zmenšit všechna písmena.
5. Výsledek nechám vypsat do stránky, a to pomocí interpolace řetězců. 
*/