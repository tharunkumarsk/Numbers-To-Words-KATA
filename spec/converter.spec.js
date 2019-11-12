var Converter = require('../src/converter');
describe("converter",() => {
it("should return number in words",() =>{
var converter = new Converter();
var result = converter.convertNumber(5646);
expect(result).toBe("5679")
});
});