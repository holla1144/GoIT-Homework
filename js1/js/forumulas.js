
// Start of question 1
var number1 = prompt('please enter the number you would like to to know the power of'); //promps user to enter first value

var number2 = prompt('please enter the exponent you would like to apply to' + " " + number1); // promps user to enter second value

number1 = Number(number1); // converts user entry to type number

number2 = Number(number2); // converts user entry to type number

function pow(number, step) { // defines the function 'pow'

	if (step === 1) { // if statement which accounts for a number being raised to the power of one
		console.log('The answer is: ' + number);
	} else if (step === 0) {
		console.log('The answer is 1');
	} else if (step === 2) { // else if statement which accounts for a number being called to the power of two
		var answer = number * number;
		console.log('The answer is: ' + answer);
	} else { // else statement which accounts for a number being raised to any value which is not 0, 1, or 2
		var initialNumber = number;
		for(i = 0; i < step - 1; i++) {
			number *= initialNumber;
		}
		console.log('The answer is: ' + number);
	};
};

pow(number1, number2);

//Start of question2

alert('Assignment number 2 will now begin');

//This is the section that asks users to enter a series of names

var name1 = prompt('Please enter a name');

var name2 = prompt('Please enter another name');

var name3 = prompt('Please enter another name');

var name4 = prompt('Please enter another name');

var name5 = prompt('Please enter one last name');


var nameArray = [] //This creates an array where the names will be pushed

//Each name will be converted to lower case to ensure we get a match, then pushed to our nameArray


name1 = name1.toLowerCase(); 

nameArray.push(name1);

name2 = name2.toLowerCase(); 

nameArray.push(name2);

name3 = name3.toLowerCase(); 

nameArray.push(name3);

name4 = name4.toLowerCase(); 

nameArray.push(name4);

name5 = name5.toLowerCase(); 

nameArray.push(name5);



var userName = prompt('Howdy Partner. Please enter your name here'); //Prompt user to enter his/her name

userName = userName.toLowerCase(); //Convert userName to lowerCase

function nameCheck (nameArray, userName) {
	//var match = undefined; 
	/*This function cycles through all the names in our nameArray. 
	If one of them matches the username, an alert is sent to the user
	to let them know their name has been found */

	var match = undefined; //defines the variable match, which will be used to trigger welcome message.
	for (i = 0; i < nameArray.length; i++) {
		if (nameArray[i] === userName) {
			match = true; //sets variable match to True if userName matches an object in the nameArray
		};
	};
	
	if (match == true) {
		alert(userName + " " + ", welcome to the site."); //sends a welcome message to the user if their name is in the nameArray
	} else {
		alert('sorry,' + " " + userName + " " + ", we couldn't find you on the list."); //sends error message if userName not in nameArray
	};

};

nameCheck(nameArray, userName); //execute the nameCheck function

alert('Thanks for playing!')