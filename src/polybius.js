// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
    const matrix = 
    {
      a: 11, b: 21, c: 31, d: 41, e: 51,
      f: 12, g: 22, h: 32, "(i/j)": 42, k: 52,
      l: 13, m: 23, n: 33, o: 43, p: 53,
      q: 14, r: 24, s: 34, t: 44, u: 54,
      v: 15, w: 25, x: 35, y: 45, z: 55, " ": 65,
    };

    function encoder()
    {
      const inputArray = input.toLowerCase().split("").map(letter => 
      {
        if (letter === "i" || letter === "j") return "(i/j)";
        return letter;
      });

      const result = [];
      inputArray.forEach(letter => { letter === " " ? result.push(" ") : encode(letter) });
      function encode(letter) 
      {
        for(let key in matrix)
        {
          if(key === letter)
          {
            return result.push(matrix[key]);
          }
        }
      }
      return result.join("");
    }

    function decoder() 
    {
      const result = [];
      const inputArray = [];
      const spaceInput = input.replace(" ", 65);

      if (spaceInput.length % 2 !== 0) return false;

      for (let i = 0; i < spaceInput.length; i += 2) 
      {
        inputArray.push(spaceInput.slice(i,i+2));
      }
      inputArray.forEach(number => { decode(number) });

      function decode(number)
      {
        for(let key in matrix)
        {
          if(matrix[key] === Number(number))
          {
            return result.push(key);
          }
        }
      }
      return result.join("");
    }
    return encode ? encoder() : decoder();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
