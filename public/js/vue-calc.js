//  <div oncontextmenu="functionName();return false;"></div>
let calculator = new Vue({
    el: "#calculator",
    data: {
        numDice: 1,
        targets: 'six',
        six: [0,17,31,42,52,60,67,72,77,81,84,87,88,90,92,94,94,95,96,97,97,98],
        fiveOrSix: [0,31,52,67,77,84,89,92,95,96,97,99,99,99,99,99,99,99,],
        fourFiveOrSix: [0,42,67,81,89,94,96,98,99,99,99.6,],
    },
    computed: {
        percentChance() {
            if (this.targets === 'six') {
                if (this.numDice < 22) {
                    return this.six[this.numDice];
                } else {
                    return 99;
                }
            } else if (this.targets === 'fiveOrSix') {
                if (this.numDice < 18) {
                    return this.fiveOrSix[this.numDice];
                } else {
                    return 99.99;
                } 
            } else {
                if (this.numDice < 11) {
                    return this.fourFiveOrSix[this.numDice];
                } else {
                    return 99.99;
                }
            }
        },
        targetPhrase() {
            if (this.targets === 'six') {
                return "six";
            } else if (this.targets === 'fiveOrSix') {
                return "five or six";
            } else if (this.targets === 'fourFiveOrSix') {
                return "four, five or six";
            }
        }
    },
    methods: {
        addDice() {
            this.numDice++;
        },
        subtractDice() {
            if (this.numDice > 0) {
                this.numDice--;
            }
        }
    },
});