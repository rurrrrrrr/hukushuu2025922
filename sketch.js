let x;
let y;

function setup() {
    createCanvas(400, 400);
    x = 0;
    y = [300,100];
}

function draw() {

    background("#f5deb3");
    x = x+55
    if (x >width) {
        x =0
    }
    fill("#000000ff");
    rect(0,0,400,125);

    fill("#ff2605ff");
    circle(x,y[1],50);
    fill("#000000ff");
    circle(100,200,50);
    circle(300,200,50);

    fill("#000000ff");
    rect(146,230,100.50);
   
}
