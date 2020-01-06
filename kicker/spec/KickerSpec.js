describe("Kicker", function () {

  it("Should return '     Beaut'", function () {
    expect(kicker('Beautiful is better than ugly.', 10, 5)).toEqual('     Beaut');
  });

  it("Should return '.         '", function () {
    expect(kicker('Beautiful is better than ugly.', 10, 39)).toEqual('.         ');
  });
  it("Should return '         B'", function () {
    expect(kicker('Beautiful is better than ugly.', 10, 41)).toEqual('         B');
  });

});

