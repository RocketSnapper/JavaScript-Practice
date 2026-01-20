let dayOfWeek = 'Monday';
console.log(dayOfWeek)
dayOfWeek = 'Friday';
console.log(`I cant wait for ${dayOfWeek}!`)

let animalInput = prompt('What is your favorite animal?')
let colorInput = prompt('What is your favorite color?')
let inputCombo = (`I've never seen a ${colorInput} ${animalInput}`)
console.log(inputCombo)

let timeOfDay = 1800;
let oneChosenMeal = '';
if(timeOfDay < 1200) {
    oneChosenMeal = 'Pancakes';
}
else if(timeOfDay > 1200 && timeOfDay < 1700 ) {
    oneChosenMeal = 'Tuna salad';
}
else {
    oneChosenMeal = 'Enchiladas';
}
console.log(oneChosenMeal);

let randomNumber = Math.floor(Math.random() * 11);
if(randomNumber === 0 || randomNumber ===  1 || randomNumber === 2 ) {
    console.log('Beatles');
}
else if(randomNumber === 3 || randomNumber ===  4 || randomNumber === 5 ) {
    console.log('Stones');
}
else if(randomNumber === 5 || randomNumber ===  6 || randomNumber === 7 ) {
    console.log('Floyd');
}
else {
    console.log('Hendrix');
}

for(let i = 0; i < 7; i += 1 ){
    console.log('Javascript is cool!');
}

for(let i = 0; i < 11; i += 1){
    console.log(i);
}

for(let i = 0; i < 5; i += 1){
    console.log('hello');
    console.log('goodbye');
}

function printMovieName(){
    let favoriteMovie = 'Shooter';
    console.log(favoriteMovie);
}
printMovieName();

function getUserBand(){
    let bandInput = prompt('What is your favorite band');
    return bandInput;
}
let favoriteBand = getUserBand();
console.log(favoriteBand);

function concertDisplay(musicalAct) {
    let myStreet = prompt('What street do you live on?')
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`)
}
concertDisplay(favoriteBand);

let desktopItems = ['Monitor', 'Mouse', 'Keyboard'];
console.log(desktopItems[1]);
desktopItems.push('Infinity Gauntlet');
for(let i = 0; i < 4; i += 1){
    console.log(desktopItems[i]);
}


