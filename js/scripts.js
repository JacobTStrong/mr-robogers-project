// Business Logic

function rodgIfy(inputtedNumber) {
  let numbersArray = [];
  for (let i=0; i <= inputtedNumber; i++) {
    if (i.toString().includes("3")) {
      numbersArray.push("Won't you be my neighbor?");
    }
    else if (i.toString().includes("2")) {
      numbersArray.push("Boop!");
    }
    else if (i.toString().includes("1")) {
      numbersArray.push("Beep!");
    }
    else {
      numbersArray.push(i.toString());
    }
  }
  return numbersArray;
};

// UI Logic

$(document).ready(function() {
	$("form#inputNumberHere").submit(function(event) {
		event.preventDefault();
		const userInput = parseInt($("#inputtedNumber").val());
    const outcome = rodgIfy(userInput);
    $("#formSubmit").text(outcome);
    $("#finalArray").show();
  });
});