var boy, boy_running,  path, pathImage, edges, invisiblePath1, invisiblePath2;

function preload(){
  //pre-load images
  pathImage = loadImage("bg1.png")
  
  boy_running = loadAnimation("dn.gif")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  //create sprites here
  
  path = createSprite(200, 250, 400, 400 )
  path.addImage("path", pathImage )
  path.velocityX = -4
  path.scale=1.5

  boy = createSprite(10, 300, 20, 20)
  boy.addAnimation("running", boy_running)
  boy.scale =1
      //create a sprite for invisible ground
    invisiblePath1 = createSprite(380, 190, 90, 600)
    invisiblePath2 = createSprite(20, 190, 90, 600)
    
  invisiblePath1.visible = false
    
  invisiblePath2.visible = false
}

function draw() {
  background(0);
  
  //using console.log for changing position
    //console.log(boy.x)
    //console.count()
    //console.time()
  
  boy.x = mouseX;
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.x<-40)
   path.x = 200 
  
   boy.collide(invisiblePath1 );
   boy.collide(invisiblePath2);
  
  drawSprites()
  //console.timeEnd()
}
