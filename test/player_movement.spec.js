describe("Player movement", function () {

  let player;
  let playerController;
  let wallArray;
  beforeEach(function() {
    loaded = true;

    player = new Player(125, 125, 5, 10);
    playerController = new PlayerController(player);
    player.setSprite(characters[0].files[0]);
    wallArray = [];
    
  });


    it("should move left", function() {
    playerController.move('a');

    expect(player.getX()).toBe(75);
    expect(player.getY()).toBe(125);
    expect(player.getSprite()).toBe('src/art/Fire_Left.png');
  })

    it("should move right", function() {
    playerController.move('d');

    expect(player.getX()).toBe(175);
    expect(player.getY()).toBe(125);
    expect(player.getSprite()).toBe('src/art/Fire_Right.png');
  })

    it("should move up", function() {
    playerController.move('w');

    expect(player.getX()).toBe(125);
    expect(player.getY()).toBe(75);
    expect(player.getSprite()).toBe('src/art/Fire_Up.png');
  })

    it("should move down", function() {
    playerController.move('s');

    expect(player.getX()).toBe(125);
    expect(player.getY()).toBe(175);
    expect(player.getSprite()).toBe('src/art/Fire_Down.png');
  })
});
