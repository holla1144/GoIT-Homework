
var d = document; // abbreviation so that we don't have to type "document" all the time. 

var body = d.getElementsByTagName('body')[0],

	tests = d.createElement('div'), 

	submitButton = d.createElement('input'), 

	pageHeader = d.createElement('h2'),


	question = {

		text: "Question No.",

		answers: [

		{text: 'Option Number',
		correct: true}, 

		{text: 'Option Number',
		correct: true}, 

		{text: 'Option Number',
		correct: true}, 
		],

	getQuestion: function(n, target) {
		var list = "";
		for (var i = 0; i < this.answers.length; i++) {
			list += '<li class="checkbox_list"><input type="checkbox" name="question[' + n + '][' + i + ']">' + this.answers[i].text + " " + (i + 1) + '</li>'
		}

	return '<h3 class="questionHeader">' + n + "." + " " + this.text + " " + n + '</h3><ul>' + list + '</ul>';
	}
};

body.appendChild(tests);



for (var i = 1; i < 4; i++) {
	tests.innerHTML = tests.innerHTML + question.getQuestion(i);
}

submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Check My Answers');
submitButton.setAttribute('id', 'submitButton');
tests.appendChild(submitButton);

pageHeader.innerHTML = 'Programming Test';
pageHeader.setAttribute('id', 'pageHeader');

var questionHeaders = tests.getElementsByTagName('h3');

for (var i = 0; i < questionHeaders.length; i++) {
	questionHeaders[i].setAttribute('id', 'h' + (i + 1)); 
}; 

console.log(questionHeaders[1]);
console.log(questionHeaders.length);

tests.insertBefore(pageHeader, h1);