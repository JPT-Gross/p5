class LSystem {
        constructor(axiom, rules) {
                this.sentence = axiom;
                this.ruleset = rules;
        }

        generate() {
                let nextgen = '';

                for (let i = 0; i < this.sentence.length; i++) {
                        let c = this.sentence.charAt(i);
                        if (this.ruleset[c]) {
                                nextgen += this.ruleset[c];
                        } else {
                                nextgen += c;
                        }
                }
                this.sentence = nextgen;
        }
}
