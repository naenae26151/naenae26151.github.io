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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 600, 100, 10, "blue"); // dark blue for a finished platform
    createPlatform(500, 500, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(600, 401, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(700, 500, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(800, 600, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(900, 500, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(300, 700, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(1000, 400, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(1100, 300, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(1200, 200, 100, 10, "blue");// dark blue for a finished platform
    createPlatform(1300, 100, 100, 10, "blue");// dark blue for a finished platform


    // TODO 3 - Create Collectables
    createCollectable("diamond", 700, 420, 0.7, 0.7);
    createCollectable("steve", 900, 420, 0.7, 0.7);
    createCollectable("database", 1100, 220, 0.7, 0.7);
    createCollectable("kennedi", 300, 620, 0.7, 0.7);
    createCollectable("database", 600, 320, 0.7, 0.7);
    createCollectable("database", 1300, 20, 0.7, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("top", 520, 2000);
    createCannon("right", 200, 3000);
    createCannon("right", 100, 1000);
    createCannon("top", 920, 1000);
    createCannon("right", 420, 1000)
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
