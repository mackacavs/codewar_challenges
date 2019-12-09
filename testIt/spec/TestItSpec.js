describe("testIt", function () {

  it("when recieving [1, 2], [3, 4] it should return [1, 2, 3, 4]", function () {
    expect(testIt([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("when recieving [0],[1] it should return [0, 1]", function () {
    expect(testIt([0], [1])).toEqual([0, 1]);
  });

  it("when recieving [1], [2, 3, 4] it should return [1, 2, 3, 4]", function () {
    expect(testIt([1], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("when recieving [1, 2, 3], [4] it should return [1, 2, 3, 4]", function () {
    expect(testIt([1, 2, 3], [4])).toEqual([1, 2, 3, 4]);
  });

  it("when recieving [1, 2], [1, 2] it should return [1, 1, 2, 2]", function () {
    expect(testIt([1, 2], [1, 2])).toEqual([1, 1, 2, 2]);
  });

});