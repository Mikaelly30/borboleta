class Player{
    constructor(x, y, width, height,angle) {
      var options = {
        isStatic: true

    }

        this.body = Bodies.rectangle(x, y, width, angle,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("garotinha1.png");
        this.index = null;
        this.score = 0;
        World.add(world, this.body);
      }
      display(){
        
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        this.keyPressed();
        
      }
      keyPressed(){
        if(keyCode === UP_ARROW){
          this.image = loadImage("garotinha2.png");
          this.body.position.y = this.body.position.y -3;  
          
            }
        if(keyCode === DOWN_ARROW){
          this.image = loadImage("garotinha1.png");
          this.body.position.y = this.body.position.y +3;  

                
            }
        if(keyCode === LEFT_ARROW){
          this.body.position.x = this.body.position.x -3;  
          this.image = loadImage("garotinha2.png");


            }
        if(keyCode === RIGHT_ARROW){
          this.body.position.x = this.body.position.x +3;  
          this.image = loadImage("garotinha3.png");
              
            }
          }
      
      
      
      
      
    
}