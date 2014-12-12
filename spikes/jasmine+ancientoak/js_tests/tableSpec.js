describe("Table of threats", function() {
  it("can contain a threat", function() {
    // given
    threat = {name: "steal money"};
    // when
    threats = [ threat ];
    // then
    expect(threats[0].name).toBe("steal money");
  });
  it("can make a simple tree", function() {
    // given
    tree = {branch1: 1, 
            branch2: [{twig1: 2}, {twig2: 3}]
            }
    // when
    // then
    expect(tree.branch1).toBe(1);
    expect(tree.branch2[0].twig1).toBe(2);
    expect(tree.branch2[1].twig2).toBe(3);

  });
  it("can make a fancy immutable tree", function() {
    // given
    mtree = {branch1: 1, 
            branch2: [{twig1: 2}, {twig2: 3}]
            };
    // when
    itree = I(mtree);
    // then
    expect(itree("branch1")).toBe(1);
    expect(itree("branch2")(0)("twig1")).toBe(2);
    expect(itree("branch2")(1)("twig2")).toBe(3);

  });
  it("can update immutable tree", function() {
    // given
    var itree = I({branch1: 1, 
            branch2: [{twig1: 2}, {twig2: 3}]
            });
    // when
    itree = itree.set("branch1", 4);
    itree = itree.patch({branch2: [{twig1:6}]});
    // then
    expect(itree("branch1")).toBe(4);
    expect(itree("branch2")(0)("twig1")).toBe(6);

  });

});
