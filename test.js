/*
There are other assertions in Chai as well, for instance:

    assert.equal(value1, value2) – checks the equality value1 == value2.
    assert.strictEqual(value1, value2) – checks the strict equality value1 === value2.
    assert.notEqual, assert.notStrictEqual – inverse checks to the ones above.
    assert.isTrue(value) – checks that value === true
    assert.isFalse(value) – checks that value === false
    …the full list is at https://www.chaijs.com/api/assert/

*/
describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

  // Mocha will run only this block with it.only
  //it.only("5 in the power of 2 equals 25", function() {
  //  assert.equal(pow(5, 2), 25);
  //});
  
});