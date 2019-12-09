describe("nthsmallest", function () {

  it("when recieving [1,5], [2], [4,8,9], 4 it should return 5", function () {
    expect(nthSmallest([1, 5], [2], [4, 8, 9], 4)).toEqual(5);
  });

});
