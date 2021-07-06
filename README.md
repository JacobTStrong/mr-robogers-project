// Describe rodgIfy()

Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(rodgIfy(0).toEqual([0]);

Test: "it will return an array of numbers ranging from 0 to the user-inputted number."
Expect (rodgIfy(5).toEqual([0, 1, 2, 3, 4, 5]);

Test: "It will replace the number 1 with ("Beep!")"
Expect (rodgIfy(5).toEqual([0, "Beep!", 2, 3, 4, 5]);

Test: "It will replace the number 2 with ("Boop!")"
Expect (rodgIfy(5).toEqual([0, 1, "Boop!", 3, 4, 5]);

Test: "It will replace the number 3 with ("Won't you be my neighbor?")"
Expect (rodgIfy(5).toEqual([0, 1, 2, "Won't you be my neighbor?", 4, 5]);

Test: "It will replace any number that contains a 1 with "Beep!""
Expect (rodgIfy(10).toEqual([0,"Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]);

Test: "It will replace any number that contains a 2 with ("Boop!"). The number 1 is ignored in numbers like 12 or 21"
Expect (rodgIfy(12).toEqual([0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!");

Test: "It will replace any number that contains a 3 with ("Wont you be my neighbor?"). The numbers 1 and 2 will be ignored in numbers like 13 and 32"
Expect (rodgIfy(13).toEqual([0,"Beep!", "Boop!", "Won't you be my neighbor", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);

# Mr. Roboger's Neighborhood (brought to you by the Rodge Corporation)

#### An independent project made to practice Arrays and Looping in JavaScript. This is the third and final project of the introduction to programming course at Epicodus!

#### By Jacob Strong

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Markdown

## Description

For my third independent project at Epicodus, I was instructed to create a web application that takes a user-inputted number and returns an array of numbers ranging from 0 to the user-inputted number. I know you're thinking "ooooooo how bland, Jacob." I SCOFF! This application doesn't just return an array. No, no, no... It returns a ROBOT MR. ROGERS-THEMED array. We're combining the classics here, people. It's got beeps. It's got boops. And it's got one simple question... Won't you be my neighbor?

## Installation and Setup

* Make sure you have the latest versions of the related software installed on your machine.
* Clone this repository to your desktop by executing $ git clone https://github.com/JacobTStrong/mr-robogers-project in the command line.
* Locate the directory on your computer and open it in your text editor to view the code.
* Double-click on the "index.html" file within the project directory to open the web page in your browser.
* Once the web page loads, you will be met with the type of flavor text that makes it clear why I chose not to pursue creative writing.
* Ah, yes there will also be a text box and a submit button. Enter a number into the text box and click submit to see the application's function in all its glory.

## Known Bugs

* all numbers that begin with 1 are replaced with "Beep!" regardless of the subsequent number (i.e. 13 = "Beep!" instead of "Won't you be my neighbor). (fixed)
* There is a bug that prevents the higher number from supercede the lower number, thus causing the numbers to be replaced by the incorrect string. (fixed)
* All known bugs have been fixed.

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Jacob Strong

## Contact Information

Jacob Strong <a href="mailto:rjts2896@gmail.com">rjts2896@gmail.com</a>


