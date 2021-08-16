module.exports = function toReadable (number) {
  let arrFirst = ['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine']
  let arrSecond = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let arrThird = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  let a = Math.floor(number/100);
  let b = Math.floor(number%100/10);
  let c = Math.floor(number%10);

    if (number.length === 0 || number === undefined) {
      return 0
    } 

	if (number.toString().length === 1) {
        return `${arrFirst[c - 1]}`		
	}

	if (number.toString().length === 2 & b === 1) {
        return `${arrThird[c]}`		
	}

	if (number.toString().length === 2 & b > 1) {
        return `${arrSecond[b - 1]} ${arrFirst[c - 1]}`		
	}

	if (number.toString().length === 3 & b === 0) {
        return `${arrFirst[a - 1]} hundred ${arrFirst[c - 1]}`
	}

	if (number.toString().length === 3 & b === 1) {
        return `${arrFirst[a - 1]} hundred ${arrThird[c]}`
	}

	if (number.toString().length === 3 & b > 1 & c > 0) {
        return `${arrFirst[a - 1]} hundred ${arrSecond[b - 1]} ${arrFirst[c - 1]}`
	}

    if (number.toString().length === 3 & b > 1 & c === 0) {
        return `${arrFirst[a - 1]} hundred ${arrSecond[b - 1]}`
	}
}
