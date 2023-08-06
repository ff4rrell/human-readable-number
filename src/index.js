module.exports = function toReadable (number) {
    let stringNumbers = String(number);
    let arrayNumbers = [];
    let result = '';

    for(let i = 0; i < stringNumbers.length; i++){
        let wordNumber = stringNumbers[i];
        arrayNumbers.push(wordNumber);
    }

    console.log(arrayNumbers.length);

    if(arrayNumbers.length === 3){

        if(arrayNumbers[0] === '9'){
            result += 'nine hundred ';
        }

        if(arrayNumbers[0] === '8'){
            result += 'eight hundred ';
        }

        if(arrayNumbers[0] === '7'){
            result += 'seven hundred ';
        }

        if(arrayNumbers[0] === '6'){
            result += 'six hundred ';
        }

        if(arrayNumbers[0] === '5'){
            result += 'five hundred ';
        }

        if(arrayNumbers[0] === '4'){
            result += 'four hundred ';
        }

        if(arrayNumbers[0] === '3'){
            result += 'three hundred ';
        }

        if(arrayNumbers[0] === '2'){
            result += 'two hundred ';
        }

        if(arrayNumbers[0] === '1'){
            result += 'one hundred ';
        }

        if((arrayNumbers[1] === '9') && (arrayNumbers[2] !== '0')){
            result += 'ninety ';
        }

        if((arrayNumbers[1] === '8')  && (arrayNumbers[2] !== '0')){
            result += 'eighty ';
        }

        if((arrayNumbers[1] === '7')  && (arrayNumbers[2] !== '0')){
            result += 'seventy ';
        }

        if((arrayNumbers[1] === '6')  && (arrayNumbers[2] !== '0')){
            result += 'sixty ';
        }

        if((arrayNumbers[1] === '5')  && (arrayNumbers[2] !== '0')){
            result += 'fifty ';
        }

        if((arrayNumbers[1] === '4')  && (arrayNumbers[2] !== '0')){
            result += 'forty ';
        }

        if((arrayNumbers[1] === '3')  && (arrayNumbers[2] !== '0')){
            result += 'thirty ';
        }

        if((arrayNumbers[1] === '2')  && (arrayNumbers[2] !== '0')){
            result += 'twenty ';
        }

        if(arrayNumbers[1] === '1'){

            if(arrayNumbers[2] === '9'){
                result += 'nineteen';
            }

            if(arrayNumbers[2] === '8'){
                result += 'eighteen';
            }

            if(arrayNumbers[2] === '7'){
                result += 'seventeen';
            }

            if(arrayNumbers[2] === '6'){
                result += 'sixteen';
            }

            if(arrayNumbers[2] === '5'){
                result += 'fifteen';
            }

            if(arrayNumbers[2] === '4'){
                result += 'fourteen';
            }

            if(arrayNumbers[2] === '3'){
                result += 'thirteen';
            }

            if(arrayNumbers[2] === '2'){
                result += 'twelve';
            }

            if(arrayNumbers[2] === '1'){
                result += 'eleven';
            }

        }else{

            if(arrayNumbers[2] === '9'){
                result += 'nine';
            }

            if(arrayNumbers[2] === '8'){
                result += 'eight';
            }

            if(arrayNumbers[2] === '7'){
                result += 'seven';
            }

            if(arrayNumbers[2] === '6'){
                result += 'six';
            }

            if(arrayNumbers[2] === '5'){
                result += 'five';
            }

            if(arrayNumbers[2] === '4'){
                result += 'four';
            }

            if(arrayNumbers[2] === '3'){
                result += 'three';
            }

            if(arrayNumbers[2] === '2'){
                result += 'two';
            }

            if(arrayNumbers[2] === '1'){
                result += 'one';
            }
        }

        if(arrayNumbers[2] === '0'){
            if(arrayNumbers[1] === '9'){
                result += 'ninety';
            }

            if(arrayNumbers[1] === '8'){
                result += 'eighty';
            }

            if(arrayNumbers[1] === '7'){
                result += 'seventy';
            }

            if(arrayNumbers[1] === '6'){
                result += 'sixty';
            }

            if(arrayNumbers[1] === '5'){
                result += 'fifty';
            }

            if(arrayNumbers[1] === '4'){
                result += 'forty';
            }

            if(arrayNumbers[1] === '3'){
                result += 'thirty';
            }

            if(arrayNumbers[1] === '2'){
                result += 'twenty';
            }

            if(arrayNumbers[1] === '1'){
                result += 'ten';
            }
        }

        if((arrayNumbers[1] === '0') && (arrayNumbers[2] === '0')){
            if(arrayNumbers[0] === '9'){
                result = 'nine hundred';
            }
            if(arrayNumbers[0] === '8'){
                result = 'eight hundred';
            }
            if(arrayNumbers[0] === '7'){
                result = 'seven hundred';
            }
            if(arrayNumbers[0] === '6'){
                result = 'six hundred';
            }
            if(arrayNumbers[0] === '5'){
                result = 'five hundred';
            }
            if(arrayNumbers[0] === '4'){
                result = 'four hundred';
            }
            if(arrayNumbers[0] === '3'){
                result = 'three hundred';
            }
            if(arrayNumbers[0] === '2'){
                result = 'two hundred';
            }
            if(arrayNumbers[0] === '1'){
                result = 'one hundred';
            }
        }
    }

    if(arrayNumbers.length === 2){


        if(arrayNumbers[0] === '1'){

            if(arrayNumbers[1] === '9'){
                result += 'nineteen';
            }

            if(arrayNumbers[1] === '8'){
                result += 'eighteen';
            }

            if(arrayNumbers[1] === '7'){
                result += 'seventeen';
            }

            if(arrayNumbers[1] === '6'){
                result += 'sixteen';
            }

            if(arrayNumbers[1] === '5'){
                result += 'fifteen';
            }

            if(arrayNumbers[1] === '4'){
                result += 'fourteen';
            }

            if(arrayNumbers[1] === '3'){
                result += 'thirteen';
            }

            if(arrayNumbers[1] === '2'){
                result += 'twelve';
            }

            if(arrayNumbers[1] === '1'){
                result += 'eleven';
            }
        }

        if(arrayNumbers[0] !== '1'){

            if(arrayNumbers[0] === '9'){
                result += 'ninety ';
            }

            if(arrayNumbers[0] === '8'){
                result += 'eighty ';
            }

            if(arrayNumbers[0] === '7'){
                result += 'seventy ';
            }

            if(arrayNumbers[0] === '6'){
                result += 'sixty ';
            }

            if(arrayNumbers[0] === '5'){
                result += 'fifty ';
            }

            if(arrayNumbers[0] === '4'){
                result += 'forty ';
            }

            if(arrayNumbers[0] === '3'){
                result += 'thirty ';
            }

            if(arrayNumbers[0] === '2'){
                result += 'twenty ';
            }

            if(arrayNumbers[1] === '9'){
                result += 'nine';
            }

            if(arrayNumbers[1] === '8'){
                result += 'eight';
            }

            if(arrayNumbers[1] === '7'){
                result += 'seven';
            }

            if(arrayNumbers[1] === '6'){
                result += 'six';
            }

            if(arrayNumbers[1] === '5'){
                result += 'five';
            }

            if(arrayNumbers[1] === '4'){
                result += 'four';
            }

            if(arrayNumbers[1] === '3'){
                result += 'three';
            }

            if(arrayNumbers[1] === '2'){
                result += 'two';
            }

            if(arrayNumbers[1] === '1'){
                result += 'one';
            }

            if(arrayNumbers[1] === '0'){
                result += 'zero';
            }

            if(arrayNumbers[1] === '0'){

                if(arrayNumbers[0] === '9'){
                    result += 'ninety';
                }

                if(arrayNumbers[0] === '8'){
                    result += 'eighty';
                }

                if(arrayNumbers[0] === '7'){
                    result += 'seventy';
                }

                if(arrayNumbers[0] === '6'){
                    result += 'sixty';
                }

                if(arrayNumbers[0] === '5'){
                    result += 'fifty';
                }

                if(arrayNumbers[0] === '4'){
                    result += 'forty';
                }

                if(arrayNumbers[0] === '3'){
                    result += 'thirty';
                }

                if(arrayNumbers[0] === '2'){
                    result += 'twenty';
                }
            }

        }

        if(arrayNumbers[1] === '0'){

            if(arrayNumbers[0] === '9'){
                result = 'ninety';
            }

            if(arrayNumbers[0] === '8'){
                result = 'eighty';
            }

            if(arrayNumbers[0] === '7'){
                result = 'seventy';
            }

            if(arrayNumbers[0] === '6'){
                result = 'sixty';
            }

            if(arrayNumbers[0] === '5'){
                result = 'fifty';
            }

            if(arrayNumbers[0] === '4'){
                result = 'forty';
            }

            if(arrayNumbers[0] === '3'){
                result = 'thirty';
            }

            if(arrayNumbers[0] === '2'){
                result = 'twenty';
            }

            if(arrayNumbers[0] === '1'){
                result = 'ten';
            }

        }
    }

    if(arrayNumbers.length === 1){

            if(arrayNumbers[0] === '9'){
                result += 'nine';
            }

            if(arrayNumbers[0] === '8'){
                result += 'eight';
            }

            if(arrayNumbers[0] === '7'){
                result += 'seven';
            }

            if(arrayNumbers[0] === '6'){
                result += 'six';
            }

            if(arrayNumbers[0] === '5'){
                result += 'five';
            }

            if(arrayNumbers[0] === '4'){
                result += 'four';
            }

            if(arrayNumbers[0] === '3'){
                result += 'three';
            }

            if(arrayNumbers[0] === '2'){
                result += 'two';
            }

            if(arrayNumbers[0] === '1'){
                result += 'one';
            }

            if(arrayNumbers[0] === '0'){
                result += 'zero';
            }
    }

    return result;
}