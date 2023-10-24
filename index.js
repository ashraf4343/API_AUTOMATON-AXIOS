const { expect } = require("chai");

before(() => {
    it("print hello", () => {
        console.log("hello js");
    })
})

describe("calculation", () => {
    it.skip("do sum", () => {
        let sum = 7 + 5;
        expect(sum).equal(12);
    })
    it("do sub", () => {
        let sub = 7 - 5;
        expect(sub).equal(2);
    })
})