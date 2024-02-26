
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
    //hide everything show only  the play ground
    hideElementById('home');
    showElementById('play-ground');
    hideElementById('final-score');

    //reset score and life
setTextElementValueById('current-life',5);
setTextElementValueById('score',0)

//continue game ;
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

function getTextElemetnValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
const element = document.getElementById(elementId);
const text= element.innerText;
return text ;
}

// utility end 

// to match the keyboard key and random alphabet 
function handleKeyboardButtonPress(event) {

    // console.log(event)// if we do console.log(event)then we find the all the property of the event ...but we need key >>> so that we can match the return alphabet ...
    // console.log(event.key)//we find the keyboard key 
    const playerPressed = event.key;
    console.log('press key by plear', playerPressed);

    //stop the game if pressed 'Esc' key
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('letter');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log('the alphabet is ', expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

        //     // update score: 
        //     // 1.get the current score :
        //     const currentScoreId=document.getElementById('score');
        //     const score=currentScoreId.innerText;
        //    const  currentScore=parseInt(score);
        //     //2. increasee the score by 1 
        //    const newScore=currentScore + 1;
        //     //show the update score
        //     currentScoreId.innerText=newScore;

        // 2nd way by function 
        const currentScore = getTextElemetnValueById('score');
        const newScore = currentScore + 1;
        //set the new score
        setTextElementValueById('score', newScore);

        //start a new round
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }

    else {
        //    1.get the current life
        // const currentLifeElement=document.getElementById('current-life')
        // const currentLife=currentLifeElement.innerText;
        // const life=parseInt(currentLife);
        //     //2.reduce the life count
        // const countLife=life - 1;
        //     //3.show the life count
        //     currentLifeElement.innerText=countLife;

        // 2nd way by function 
        const currentLife = getTextElemetnValueById('current-life')
        const newLife = currentLife - 1;

        setTextElementValueById('current-life', newLife);
        if (newLife === 0) {
            gameOver();
        }

    }

}
document.addEventListener('keyup', handleKeyboardButtonPress)


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

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score 
    const lastScore=getTextElemetnValueById('score');
    setTextElementValueById('total-score',lastScore);

    //clear the last selected alphabet;
    const alphabet=getElementTextById('letter');

    //remove background color
    removeBackgroundColor(alphabet);
}