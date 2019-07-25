import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  numberOne = Big(numberOne);
  numberTwo = Big(numberTwo);

  let result;
  switch (operation) {
    case '÷':
      result = numberOne.div(numberTwo).valueOf();
      break;
    case 'X':
      result = numberOne.times(numberTwo).valueOf();
      break;
    case '+':
      result = numberOne.plus(numberTwo).valueOf();
      break;
    case '-':
      result = numberOne.minus(numberTwo).valueOf();

      break;
    default:
      break;
  }
  // console.log(result);
  return result;
};

export default operate;
