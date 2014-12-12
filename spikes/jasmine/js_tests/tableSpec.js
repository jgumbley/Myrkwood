describe("Table of threats", function() {
  it("can contain a threat", function() {
    // given
    threat = {name: "steal money"};
    // when
    threats = [ threat ];
    // then
    expect(threats[0].name).toBe("steal money");
  });
});
