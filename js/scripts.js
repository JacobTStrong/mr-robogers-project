// Business Logic

function rodgIfy(inputtedNumber) {
  let numbersArray = [];
  for (let i=0; i <= inputtedNumber; i++) {
    if (i.toString().includes("1")) {
      numbersArray.push("Beep!");
    }
    else {
      numbersArray.push("" + i);
    }
  }
  return numbersArray;
};