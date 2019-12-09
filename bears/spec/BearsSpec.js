describe("Bears", function () {

  it("when recieving 7 and '8j8mBliB8gimjB8B8jlB' it should return 'B8B8B8' and false", function () {
    expect(bears(7, '8j8mBliB8gimjB8B8jlB')).toEqual(['B8B8B8', false]);
  });

  it("when recieving 3 and '88Bifk8hB8BB8BBBB888chl8BhBfd' it should return 'B8B8B8' and false", function () {
    expect(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')).toEqual(['8BB8B8B88B', true]);
  });

});
