'use strict'
const btn = document.getElementById('submitBtn');
const textBox = document.querySelector('#textBox');

const _charCount = (word) =>{
    return (`la palabra tiene ${word.length} caracteres`);
}

const _wordReversed = (word) =>{
    return (`Palabra invertida: ${word.split('').reverse().join('')}`);
}

const _firstLetter = word =>{
    return(`Primera letra: ${word[0]}`)
}

const _lastLetter = word =>{
    return(`Ultima letra: ${word[word.length-1]}`)
}

const allAlerts = textValue =>{
    alert(`palabra ingresada ${textValue}`);
    alert(_charCount(textValue));
    alert(_wordReversed(textValue));
    alert(_firstLetter(textValue));
    alert(_lastLetter(textValue));

    textBox.value = '';
}




btn.addEventListener('click', function(e){

    allAlerts(textBox.value);
});

//////////////////////////////////////