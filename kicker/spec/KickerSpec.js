describe("Kicker", function () {

  it("Should return '     Beaut'", function () {
    expect(kicker('Beautiful is better than ugly.', 10, 5)).toEqual('     Beaut');
  });

});