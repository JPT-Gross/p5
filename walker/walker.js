class Walker {
        constructor() {
                this.x = windowWidth / 2;
                this.y = windowHeight / 2;
        }

        show() {
                stroke(255);
                point(this.x, this.y);
        }

        step() {
                let xStep = random(-1, 1);
                let yStep = random(-1, 1);

                this.x += xStep;
                this.y += yStep;
        }
}
