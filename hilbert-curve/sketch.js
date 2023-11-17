let lsystem;
let turtle;

function setup() {
        createCanvas(250, 250);
        colorMode(HSL, 100);

        let rules = {
                A: '+BF-AFA-FB+',
                B: '-AF+BFB+FA-',
        };
        lsystem = new LSystem('A', rules);
        turtle = new Turtle(4, PI / 2.1, 50, 50);

        for (let i = 0; i < 6; i++) {
                lsystem.generate();
        }
        background(0);
}

function draw() {
        translate(width - width, height);
        turtle.render(lsystem.sentence, 10);
        //noLoop();
}
