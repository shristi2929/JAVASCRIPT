'use strict';

// To select element in javascript.
// we use . coz it is class . If it will be ID then we will use #. guess the number
//console.log(document.querySelector('.message'));

// Now we will actually set the content to correct number . We can set the content of element by using = and then name of the new content we want  (guess the number will change into correct the number)
//document.querySelector('.message').textContent=' Correct Number !'

//Now we are going to do the same thing with number and score

//document.querySelector('.number').textContent=13;

//document.querySelector('.score').textContent=10;

//document.querySelector('.guess').value=23;
//console.log(document.querySelector('.guess')).values;
// math.random will generate  number between 0 and 1 in decimal.
//trunc will convert all the decimal number into int .

//const secretNumber=Math.trunc(Math.random()*20)+1;
//let score=20;  //here we set the score 
//document.querySelector('.number').textContent=secretNumber; 

//document.querySelector('.check').addEventListener('click',function () {

    //const guess=Number(document.querySelector('.guess').value);
    //console.log(guess,typeof guess);



    //if (!guess){
        //document.querySelector('.message').textContent='⛔ No number!';
   // }else if(guess===secretNumber){ 
       // document.querySelector('.message').textContent='🎉Correct Number !';
    //}else if (guess > secretNumber) {
        //if (score>1){
        //score--;  //to decrease the score whenever anyone guess the wrong number
        //document.querySelector('.score').textContent= score;
       // else {
          //  document.querySelector('.message').textContent='You have lost the game!';
        
       // document.querySelector('.score').textContent=0;
       // }
      //  document.querySelector('.message').textContent='Too high!';
  //  } else if (guess<secretNumber){
       // document.querySelector('.message').textContent='Too low!'
   // }
    

   let secretNumber = Math.trunc(Math.random() * 20) + 1;
   let score = 20;  //Here we are setting the score 
   let highscore = 0; //declaring a variable of highscore
   
   const displayMessage = function (message) {    // here i have create one function so that whenever we need this function we can call it rather than writing it again and again
     document.querySelector('.message').textContent = message;
   };
   
   document.querySelector('.check').addEventListener('click', function () {
     const guess = Number(document.querySelector('.guess').value);
     console.log(guess, typeof guess);
     
     // When there is no input (now we take condition that if there is no guess)
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!'); //// we call a function amd pass an argument ie no number


     // When player wins (now we take condition that there is a guess now and that guess is equal to secret number)
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!'); // we call a function amd pass an argument ie correct number

    // Here we are hiding the the number to keep it secret
    document.querySelector('.number').textContent = secretNumber;

   //Here we are applying the green color to the background when player will win the game. we have not use the .body coz it is body element name element, style- we are accesssing style,background-color: name of property we want to change
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Now we're going to increase width of (?) number. So whenever we're manipulating style we always need to specify string (vimp remember this)
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

     // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');  // used ternary operator
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;

      //Now we're going to work on again button
     document.querySelector('.again').addEventListener('click',function(){
        score=20; //We're restoring initial value of score
        
        secretNumber=Math.trunc(Math.random() * 20) + 1; //restore initial value of score
        document.querySelector('.message').textContent='Start guessing'; //for message 
        document.querySelector('.score').textContent=score;  //to change score again to 20
        document.querySelector('.number').textContent='?'; //   to change number  of input to ?
        document.querySelector('.guess').textContent=''; //To change input value of again to empty

      
        document.querySelector('.body').style.backgroundColor='#222'; //To restore the backgroundColor 

        document.querySelector('.number').style.width='15rem'; //To restore the width 
  
     })
    
  

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
