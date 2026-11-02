$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(200, 650, 5, 5);
    createPlatform(350, 600, 5, 5);
    createPlatform(500, 550, 5, 5);
    createPlatform(650, 500, 5, 5);
    createPlatform(800, 450, 5, 5);
    createPlatform(950, 400, 5, 5);
    createPlatform(1100, 350, 5, 5);
    createPlatform(1250, 300, 5, 5);
    createPlatform(1400, 250, 5, 5);
    createPlatform(1550, 200, 5, 5);
    createPlatform(1600, 150, 5, 5);
    createCollectable("max", 100, 700);
    createCollectable("max", 1100, 700);
    createCollectable("max", 1250, 250);
    createCannon("top", 200, 600);
    createCannon("top", 350, 600);
    createCannon("top", 500, 600);
    createCannon("top", 650, 600);
    createBadPlatform(1000, 630, 9, 150);

    // TODO 3 - Create Collectables

    // TODO 4 - Create Cannons

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
