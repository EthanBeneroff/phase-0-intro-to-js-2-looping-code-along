// Code your solutions in this file
/*for (let age = 30; age <40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i <gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/



function writeCards(names, event){
    const thankYouArray = [];
    for (let i=0; i < names.length; i++){
       thankYouArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
    return thankYouArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number){
    while (number != 0){
        console.log(number);
        number--;
    }
    console.log(number);
}