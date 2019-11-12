var words = require('./constants');
var unit = {
    2: get2DigitNumbersText,
    3: get3DigitNumbersText,
    4: get4DigitNumbersText
 };
function converter(){

}  

converter.prototype.convertNumber = function(number){
    console.log(number);
    var result = '';
    number < 0 || number > 10000 ?  result = result : result = convertNumberToWord(number);
    return result;
  
}
function convertNumberToWord(number){
    var result = words[number];
    if(result){
        return result; 
    }
    var numberOfDigits = number.toString().length;
    numberOfDigits >= 4 ? numberOfDigits = 4 : numberOfDigits = numberOfDigits
    var methodName = unit[numberOfDigits];
    console.log(methodName);
    result = methodName(number);
    return result;
}
function get2DigitNumbersText(number){
    // e.g. 54
    var remainder = number % 10; // 4
    var tens = number - remainder; // 50

     return convertNumberToWord(tens) + ' ' +  convertNumberToWord(remainder);
}

function get3DigitNumbersText(number){
    // e.g. 450
    var remainder = number % 100; // 50
    var hundreds = number - remainder; // 400

    return convertNumberToWord(hundreds)
        + ' and '
        + convertNumberToWord(remainder);
}

function get4DigitNumbersText(number){
    var remainder = number % 1000;
    var thousands = (number - remainder) / 1000;

    if(remainder === 0){
        return convertNumberToWord(thousands) + ' thousand';
    }

    return convertNumberToWord(thousands)
        + ' thousand  '
        + convertNumberToWord(remainder);
}

module.exports = converter;