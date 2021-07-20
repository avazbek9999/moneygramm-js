var elForm = document.querySelector('.form')
var elInput = elForm.querySelector('.form__input')
var elselect = elForm.querySelector('.form__select')
var elResultBox = document.querySelector('.result-box')


var usd_to_uzb = 10600;
var ruble_to_uzb = 143;
var evro_to_uzb = 13000;

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var currensyInput = Number(elInput.value.trim());
	var currensyselect = (elselect.value);

	
	if (currensyInput <= 0 || isNaN(currensyInput)) {
		elInput.style.border = '2px solid red';
		return;
	} else {
		elInput.style.border = '2px solid green';
	}



	if (currensyselect === 'dollr') {
		elResultBox.textContent = 'Resalt: ' + (currensyInput / usd_to_uzb).toFixed(2) + ' USD';
	} else if (currensyselect === 'rubl') {
		elResultBox.textContent= 'Resalt: ' + (currensyInput / ruble_to_uzb).toFixed(2) + ' RUBL';
	} else if (currensyselect === 'evro') {
		elResultBox.textContent= 'Resalt: ' + (currensyInput / evro_to_uzb).toFixed(2) + ' EVRO';
	}
	



	//elResultBox.textContent = 'Result: ' + elInput.value / elselect.value
})
