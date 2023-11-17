class Turtle {
        constructor(length, angle, color, lightness) {
                this.length = length;
                this.angle = angle;
                this.inc = 1;
                this.color = color;
                this.lightness = lightness;
        }

        render(sentence, inc) {
                stroke(this.color, 50, this.lightness);
                for (let i = 0; i < this.inc && i < sentence.length; i++) {
                        let c = sentence.charAt(i);
                        if (c === 'F') {
                                line(0, 0, 0, -this.length);
                                translate(0, -this.length);
                        } else if (c === '+') {
                                rotate(this.angle);
                        } else if (c === '-') {
                                rotate(-this.angle);
                        }
                }
                this.inc += inc;
                //this.color = this.inc % 100;
        }
}
