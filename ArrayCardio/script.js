const inventors = [
    { first: 'Isaac', last: 'Newton', year: 1645, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1645, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1500, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1500, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1500, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1510, passed:1727}
]

const people= [
    'Beck, Glenn', 'Becker, Carl', 'Becket, Samuel'
]

// Array.prototype.filter()
// filter the list of invertos for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.table(fifteen)

// Array.prototype.sort()
//2. Give us an array of theinventory first and last names

const names = inventors.map((name => (`${name.first} ${name.last}`)))
console.log(names)