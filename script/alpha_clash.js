
// way 1st 
// function play(){
//     // hide 
// const homeSection=document.getElementById('home')
// homeSection.classList.add('hidden');
// // show 
// const PlaygroundSection=document.getElementById('play-ground');
// PlaygroundSection.classList.remove('hidden');

// }

// way 2nd by utility 
function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')

}

function setBackgruondColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// utility end 

// to match the keyboard key and random alphabet 
function handleKeyboardButtonPress(event) {

    // console.log(event)// if we do console.log(event)then we find the all the property of the event ...but we need key >>> so that we can match the return alphabet ...
    // console.log(event.key)//we find the keyboard key 
    const playerPressed=event.key;
    console.log('press key', playerPressed);
    //get the expected to press
    const currentAlphabetElement=document.getElementById('letter');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    console.log('the alphabet is ', expectedAlphabet);
  
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');
        console.log('you have pressed currently',expectedAlphabet);
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }

    else{
        console.log('you press wrong');
    }


}
document.addEventListener('keyup',handleKeyboardButtonPress)


function continueGame() {
    //step1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random Alphabet is :', alphabet);
    // set random alphabet to display 
    const currentAlphabet = document.getElementById('letter');
    currentAlphabet.innerText = alphabet;
 console.log('continuegame alphabet', alphabet)


    //set background color:
    setBackgruondColor(alphabet);

    return alphabet;
}



function getARandomAlphabet() {
    const alphabetString = 'abcdefdghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');//find single cherecter
    //generate random number 0 to 25
    const randomNumber = 0 + Math.random() * 25;
    const indexOfArray = Math.round(randomNumber);
    const alphabet = alphabets[indexOfArray];

    return alphabet;
}