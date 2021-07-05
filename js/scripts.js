// Business Logic

function rodgIfy(inputtedNumber) {
  let numbersArray = [];
  for (let i=0; i <= inputtedNumber; i++) {
    if (i.toString().includes("1")) {
      numbersArray.push("Beep!");
    }
    else if (i.toString().includes("2")) {
      numbersArray.push("Boop!");
    }
    else {
      numbersArray.push(i.toString());
    }
  }
  return numbersArray;
};