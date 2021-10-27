// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () 
{
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) 
  {
    // error handling
    if (!alphabet || alphabet.length !== 26) return false;

    // global variables
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const substitutionArray = alphabet.toLowerCase().split("");
    const inputArray = input.toLowerCase().split("");

    // must be a unique array of letters
    const uniqueArray = substitutionArray
      .filter((letter, index, collection) => collection.indexOf(letter) === index);
    if (uniqueArray.length !== alphabet.length) return false;

    
    function encoder() 
    {
      const result = [];
      inputArray.forEach(letter => { letter === " " ? result.push(" ") : encode(letter) });
      function encode(letter) 
      {
        const letterIndex = alphabetArray.indexOf(letter);
        const encodedLetter = substitutionArray[letterIndex];
        result.push(encodedLetter);
      }
      return result.join("");
    };

    function decoder() 
    {
      const result = [];
      inputArray.forEach(letter => { letter === " " ? result.push(" ") : decode(letter) });
      function decode(letter) 
      {
        const letterIndex = substitutionArray.indexOf(letter);
        const decodedLetter = alphabetArray[letterIndex];
        result.push(decodedLetter);
      }
      return result.join("");
    };
    return encode ? encoder() : decoder();
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
