// Write your tests here!
const { expect } = require("chai");
const caesar = require("../src/caesar");


describe("caesar()", () => {
  let input = "Chad Harrington";
  let shift = 3;

  it("should be a function", () => {
    expect(caesar.caesar).to.be.a("function");
  });

  it("returns false for all invalid shift values", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    const actual = shiftValues.every((shift) => {
      return caesar.caesar(input, shift);
    });
    expect(actual).to.be.false;
  });

  it("returns a result for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      return caesar.caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar.caesar(input, shift);
      expect(actual).to.equal(expected);
    });

    it("returns correct length", () => {
      const expected = input.length;
      const actual = caesar.caesar(input, shift).length;
      expect(actual).to.equal(expected);
    });

    it("encodes '#Chad (voxom) Harrington%' shift+3 correctly", () => {
      input = "#Chad (voxom) Harrington%";
      shift = 3;
      const expected = "#fkdg (yrarp) kduulqjwrq%";
      const actual = caesar.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("encodes '#Chad (voxom) Harrington%' shift-3 correctly", () => {
      input = "#Chad (voxom) Harrington%";
      shift = -3;
      const expected = "#zexa (slulj) exoofkdqlk%";
      const actual = caesar.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes '#fkdg (yrarp) kduulqjwrq%' shift+3 correctly", () => {
      input = "#zexa (slulj) exoofkdqlk%";
      shift = 3;
      const expected = "#chad (voxom) harrington%";
      const actual = caesar.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("decodes '#fkdg (yrarp) kduulqjwrq%' shift-3 correctly", () => {
      input = "#fkdg (yrarp) kduulqjwrq%";
      shift = -3;
      const expected = "#chad (voxom) harrington%";
      const actual = caesar.caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });
});