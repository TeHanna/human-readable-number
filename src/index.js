module.exports = function toReadable (number) {
    let arrFirst = ['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine']
    let arrSecond = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let arrThird = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  
    let a = Math.floor(number/100);
    let b = Math.floor(number%100/10);
    let c = Math.floor(number%10);
    
    // если число 0
      if (number === 0) {
        return 'zero'
      } 

    // если число от 1 до 9
      if (number.toString().length === 1) {
          return `${arrFirst[c - 1]}`		
      }

    // если число от 10 до 19
      if (number.toString().length === 2 & b === 1) {
          return `${arrThird[c]}`		
      }

    // если число 20, 30 ... 90
      if (number.toString().length === 2 & b > 1 & c === 0) {
          return `${arrSecond[b - 1]}`		
      }

    // если число от 20 до 99 кроме 20, 30 ... 90
      if (number.toString().length === 2 & b > 1 & c > 0) {
          return `${arrSecond[b - 1]} ${arrFirst[c - 1]}`		
      }

    // если число 100, 200 ... 900
      if (number.toString().length === 3 & b === 0 & c === 0) {
        return `${arrFirst[a - 1]} hundred`
      }

    // если число 101, 102 ... 909
      if (number.toString().length === 3 & b === 0) {
          return `${arrFirst[a - 1]} hundred ${arrFirst[c - 1]}`
      }
    
    // если число от 110, 111 ... 919 кроме 120, 130 ... 990
      if (number.toString().length === 3 & b === 1) {
          return `${arrFirst[a - 1]} hundred ${arrThird[c]}`
      }

    // если число 120, 130 ... 990
    if (number.toString().length === 3 & b > 1 & c === 0) {
        return `${arrFirst[a - 1]} hundred ${arrSecond[b - 1]}`
    }

    // если число 120, 121 ... 999
      if (number.toString().length === 3 & b > 1 & c > 0) {
          return `${arrFirst[a - 1]} hundred ${arrSecond[b - 1]} ${arrFirst[c - 1]}`
      }    
  }
