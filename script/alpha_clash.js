
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
function play(){
   hideElementById('home');
   showElementById('play-ground');
   continueGame();
}

function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')

}

function setBackgruondColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
  
}
function removeBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
// utility end 



function continueGame(){
    //step1: generate a random alphabet
    const alphabet=getARandomAlphabet();
    // console.log('your random Alphabet is :', alphabet);
    // set random alphabet to display 
    const currentAlphabet=document.getElementById('letter');
    currentAlphabet.innerText=alphabet;

    //set background color:
    setBackgruondColor(alphabet);
}

function getARandomAlphabet(){
    const alphabetString='abcdefdghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('');//find single cherecter
    //generate random number 0 to 25
   const  randomNumber= 0 + Math.random()*25;
   const indexOfArray=Math.round(randomNumber);
   const alphabet=alphabets[indexOfArray];

    return alphabet;
}