// Write your tests here!
const polybius = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {

    it("should be a function", () => {
      expect(polybius.polybius).to.be.a("function");
    });

  describe("encoding", () => {

    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius.polybius("ij")).to.equal("4242");
    });

    it("should encode 'Chad' to 31321141", () => {
      expect(polybius.polybius("Chad")).to.equal("31321141");
    });

    it("should maintain spaces", () => {
      expect(polybius.polybius("Chad Harrington")).to.equal("31321141 32112424423322444333");
    });
    it("should ignore capital letters", () => {
      expect(polybius.polybius("ijIJazAZ")).to.equal("4242424211551155");
    });
  });
  describe("decoding", () => {
    it("should decode 32112424423322444333 to harr(i/j)ngton", () => {
      expect(polybius.polybius("32112424423322444333", false)).to.eql("harr(i/j)ngton");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius.polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius.polybius("4242424211551155", false)).to.eql("(i/j)(i/j)(i/j)(i/j)azaz");
    });
    it("should maintain spaces", () => {
      expect(polybius.polybius("3211242442 3322444333", false)).to.eql("harr(i/j) ngton");
    });
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius.polybius("245", false)).to.be.false;
    });
  });
});