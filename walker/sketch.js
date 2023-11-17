let noisyWalk;

function setup() {
        noisyWalk = new Walker();
        createCanvas(windowWidth, windowHeight);
        background(0);
}

function draw() {
        noisyWalk.step();
        noisyWalk.show();
}
