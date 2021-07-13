var elForm = document.querySelector('.form')
var elInput = elForm.querySelector('.form__input')
var elselect = elForm.querySelector('.form__select')
var elResultBox = document.querySelector('.result-box')


elForm.addEventListener('submit', function (evt) {
    evt.preventDefault()

    elResultBox.textContent ='Result: ' + elInput.value / elselect.value
})