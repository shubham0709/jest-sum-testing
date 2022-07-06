const sum = require("./index");

describe("Checking sum function working", () => {
    test("checking on no args", () => {
        expect(sum()).toBe("pass atleast two arguements");
    })
    test("checking on one arguement", () => {
        expect(sum(2)).toBe("pass atleast two arguements");
    })
    test("normal integer addition", () => {
        expect(sum(-100, 20)).toBe(-80);
    })
    test("testing on string arguements", () => {
        expect(sum("2", "5")).toBe(7);
    })
    test("testing on float addition", () => {
        expect(sum(-1.9, 2.1)).toBe(0.20000);
    })
    test("add two positive numbers", () => {
        expect(sum(4, 6)).toBe(10);
    })
})