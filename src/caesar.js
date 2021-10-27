// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () 
{
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) 
  {
    // your solution code here
    if(!input || shift === 0 || shift < -25 || shift > 25) return false;

    if (!encode) shift *= -1;

    const string = input.toLowerCase();

    let result = "";
    for (let i = 0; i < string.length; i++) 
    {
      let charCode = string[i].charCodeAt();
      // checks if charCode is a lowercase letter & ignores everything else
      if (charCode > 96 && charCode < 123) 
      {
        charCode += shift;
        // if shift passes 'z', resets to 'a' when handling positive shifts
        if (charCode > 122) 
        {
          charCode = charCode - 122 + 96;
        }
        // if shift passes 'a', resets to 'z' when handling negative shifts
        else if (charCode < 97) 
        {
          charCode = charCode - 97 + 123;
        }
      }
      result += String.fromCharCode(charCode);
    }
  return result
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
