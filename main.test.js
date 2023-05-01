const { expect } = require("chai");
const { addNumber } = require("./main");

describe("Test function", () => {
  it("should add", () => {
    expect(addNumber(4, 5)).to.equal(9);
  });
  it("should add again", () => {
    expect(addNumber(4, 7)).to.equal(11);
  });
  it("should add now", () => {
    expect(addNumber(4, 5)).to.equal(9);
  });
  it("should add new", () => {
    expect(addNumber(4, 5)).to.equal(9);
  });
});
