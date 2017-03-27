function setup(){
  
  createCanvas(500,500);
  
  // initialize a, assign the value 5 to a
  a = 5;
}

function draw(){
  background(0,0,0);
  
  fill(255,255,255);
  text("Press the 'a' button and observe",10,30);
  
  // if a is equal to 5 draw a red circle
  if (a == 5)
  {
    fill(255,0,0);
    ellipse(250,150,100,100);
  }
  // else show Hello World!
  else
  {
    fill(255,255,255);
    text("Hello World!",217,155);
  }
  
}

function keyTyped()
{
  // if you press 'a' reassign
  // the value of a to 1
  if (key == 'a')
  {
    a = 1;
  }
}