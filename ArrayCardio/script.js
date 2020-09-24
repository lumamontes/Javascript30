const inventors = [
    { first: 'Isaac', last: 'Newton', year: 1645, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1645, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1500, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1500, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1500, passed:1727},
    { first: 'Isaac', last: 'Newton', year: 1510, passed:1727}
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Montes, Luma', 'Montes, Luana'
]

// Array.prototype.filter()
// filter the list of invertos for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))

// Array.prototype.map()
//2. Give us an array of theinventory first and last names

const names = inventors.map((name => (`${name.first} ${name.last}`)))

// Array.prototype.sort()
//  3. Sort the invertos by bithday, oldest to youngest

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1)


// Array.prototype.reduce()
// 4. How many years did all the inventors five?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0)


//5. Sort inventors by years lived
const oldest = inventors.sort(function(a,b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed -b.year

    return lastGuy > nextGuy ? -1 : 1
})


// sort the people alphabetucally by last name

const alpha = people.sort((lastOne, nextOne) => {
    const [alast,afirst] = lastOne.split(', ')
    const [blast,bfirst] = nextOne.split(', ')
    return alast > blast ? 1: -1

})

// 8. Reduce Exercício
// sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'walk', 'walk', 'van', 'car']
const transportation = data.reduce(function(obj,item) {
    if (!obj[item]) {
        obj[item] = 0;
    }

    obj[item]++
    return obj
}
,{})

console.log(transportation)


const people = [ 
    { name: 'Beck', year: 1970}, {name: 'Becker, Carl', year: 2004} 
]



const comments = [
    {text: 'LOve this!', id=523423},
    {text: 'Super love this!', id=823423},
    {text: 'Nice!', id=223423},
]


// Some and Every Checks

// Array.prototype.some() // is a least one person 19?

const isAdult = people.some (function(person) {

    const currentYear = (new Date()).getFullYear()
    if (currentYear - person.year >= 19) {
        return true
    }
}) 


// OR


const isAdult = people.some(person => {
    const Currentyear = (new Date()).getFullYear();
    return CurrentYear - personyear >= 19;
})


// is everyone 19?

const allAdults = people.every(person => {
    const CurrentYear = (new Date()).getFullYear();
    return CurrentYear - personyear >= 19;
})


// Array.prototype.find()
// return the first item it finds, that you are looking for

const comment = comments.find( function(coment) {
    if (comment.id === 823423) {
        return true
    }
})

// Array.protype.findIndex()
// find the position of the comment
const index = comments.findIndex( comment => comment.id === 823423)
//delete the cmment

comments.splice(index, 1)

const newCOmments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
]