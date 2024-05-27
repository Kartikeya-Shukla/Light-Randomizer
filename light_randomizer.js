//Kartikeya Shukla
//ICD201-02/03
//May 24,2024

let key = 0

function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  fill(0);
  rect(50, 50, 300, 300);
  fill(255)
  fill(255);
  rect(400, 50, 150, 100);
  rect(400, 200, 150, 100);
  fill(0)
  textSize(30)
  textAlign(CENTER,CENTER)
  text("Change",475,90)
  text("Light",475,125)
  text("Random",475,235)
  text("Light",475,270)
  fill(100);
  triangle(150, 150, 250, 150, 200, 50);
  triangle(250, 250, 250, 150, 350, 200);
  triangle(150, 250, 250, 250, 200, 350);
  triangle(150, 150, 150, 250, 50, 200);

  if (key == 1) {
    fill(255);
    triangle(150, 150, 250, 150, 200, 50);
  } else if (key == 2) {
    fill(255);
    triangle(250, 250, 250, 150, 350, 200);
  } else if (key == 3) {
    fill(255);
    triangle(150, 250, 250, 250, 200, 350);
  } else if (key == 4) {
    fill(255);
    triangle(150, 150, 150, 250, 50, 200);
  }

  if (key > 4) {
    key = 1;
  }
}

function mouseClicked() {
  if (mouseX >= 400 && mouseX <= 550 && mouseY >= 50 && mouseY <= 150) {
    key += 1;
  }


  if (mouseX >= 400 && mouseX <= 550 && mouseY >= 200 && mouseY <= 300) {
    key = round(random(1, 4));
    print(key);
  }
}
