describe("pow", function() {

  it("2 raises to 3rd power", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("2 raises to 2nd power", function() {
    assert.equal(pow(2, 2), 4);
  });
});