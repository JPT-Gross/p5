let graph1;
let graph2;

function setup() {
        createCanvas(725, 571);
        colorMode(HSL, 100);

        graph1 = new Pnoise(0, 50, 1);
        graph2 = new Pnoise(-0.1, 0, -1);
}

function draw() {
        translate(0, height / 2);
        background(0, 0, 0, 100);

        graph1.graph();
        graph2.graph();

        graph1.colorChange();
        graph2.colorChange();
}
