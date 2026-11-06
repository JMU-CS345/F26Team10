describe("Player movement", function () {

  let player;

  beforeEach(function() {
    player = new PlayerController(125, 125);
  });

    it("should move left", function() {
    player.move('a');

    expect(player.x).toBe(75);
    expect(player.y).toBe(125);
  })

    it("should move right", function() {
    player.move('a');

    expect(player.x).toBe(175);
    expect(player.y).toBe(125);
  })

    it("should move up", function() {
    player.move('a');

    expect(player.x).toBe(125);
    expect(player.y).toBe(75);
  })

    it("should move down", function() {
    player.move('a');

    expect(player.x).toBe(125);
    expect(player.y).toBe(175);
  })
});
