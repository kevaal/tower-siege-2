class Ground {
    constructor() {
      var groundOptions = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,groundOptions);
      World.add(world, this.ground);
    }
    display(){
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  };

