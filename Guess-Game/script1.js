// Maak deze oplossing af.

let numberToBeGuessed = null;
let user;
let guess;
const min = 0;
const max = 25;
let tryCount = 5;

while (user === undefined || user === null || user.length === 0) {
  user = prompt("What is your name?");
}
alert("Welcome " + user + "!");
console.log("Welcome " + user + "!!");

// kies hier een random getal
numberToBeGuessed = Math.floor(Math.random() * (max - min) + min);
console.log("Pssst het nummer is: " + numberToBeGuessed);

// onder welke voorwaarde moeten we blijven loopen?
while (guess !== numberToBeGuessed) {
  tryCount--;
  guess = prompt("Guess a number between 1 and 25...");
  console.log("Your guess is:" + guess);
  alert("Your guess is: " + guess);

  if (guess === numberToBeGuessed) {
    alert("Wow, great stuff! The number is indeed " + guess + "!!!");
    alert("The game is now over. Thanks, see you soon!");

    alert(
      "Your guess is too high. Try again. CAREFUL: You have " +
        tryCount +
        " attempts left!"
    );
  } else if (tryCount === 0) {
    alert("!!!GAME OVER!!!");
  } else {
    if (guess < numberToBeGuessed) {
      alert(
        "Your guess is too low. Try again. CAREFUL: You have " +
          tryCount +
          " attempts left!"
      );
    } else if (guess > numberToBeGuessed) {
      alert(
        "Your guess is too high. Try again. CAREFUL: You have " +
          tryCount +
          " attempts left!"
      );
    }
  }
}
