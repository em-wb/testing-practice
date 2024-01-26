function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = () => {
  const add = (num1, num2) => {
    const result = num1 + num2;
    return Number.isInteger(result) ? result : parseFloat(result.toFixed(1));
  };

  const subtract = (num1, num2) => {
    const result = num1 - num2;
    return Number.isInteger(result) ? result : parseFloat(result.toFixed(1));
  };

  const divide = (num1, num2) => {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }

    const result = num1 / num2;
    return Number.isInteger(result) ? result : parseFloat(result.toFixed(1));
  };

  const multiply = (num1, num2) => {
    const result = num1 * num2;
    return Number.isInteger(result) ? result : parseFloat(result.toFixed(1));
  };

  return { add, subtract, divide, multiply };
};

function ceaserCipher(string, shift) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char.match(/[a-z]/i)) {
      let code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    result += char;
  }
  return result;
}

module.exports = { capitalise, reverseString, calculator, ceaserCipher };
