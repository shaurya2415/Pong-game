var ball,img,paddle;
var ballImg, paddleImg;
var edges
var invisibleWall

function preload() {
  ballImg = loadImage("ball.png")
  paddleImg = loadImage("paddle.png")
  
  
  /* preload your images here of the ball and the paddle */
}
function setup() {
  ball = createSprite(50,200,40,40)
  ball.addImage("ball",ballImg)
  paddle = createSprite(380,200,10,50)
  paddle.addImage("paddle", paddleImg)
  invisibleWall = createSprite(0,200,10,400)
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites()
  ball.bounceOff(edges[3])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle)
  ball.bounceOff(invisibleWall)
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
paddle.bounceOff(edges[2])
  paddle.bounceOff(edges[3])
  
  if(keyDown(UP_ARROW)){
    
    paddle.velocityY = -3
  
   
    /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
    
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 3
  }
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.bounceOff(paddle)){

     ball.velocityY= random(1,8)
  
      }
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

