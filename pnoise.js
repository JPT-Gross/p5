class Pnoise {
        constructor(start, color, flip) {
                this.inc = 0.01;
                this.start = start;
                this.color = color;
                this.flip = flip;
                this.y = 0;
        }

        graph() {
                stroke(this.color, 100, 50);

                noFill();
                beginShape();
                let xOff = this.start;
                for (let x = 0; x < width; x++) {
                        this.y = this.flip * ((noise(xOff) * height) / 2);
                        vertex(x, this.y);

                        xOff += this.inc;
                }
                endShape();

                this.start += this.inc;
        }

        colorChange() {
                this.color = Math.abs(this.y) % 100;
        }
}
