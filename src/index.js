class SmartCalculator {

    constructor(initialValue) {
        this.num = initialValue;
        return this;
    }

    add(number) {
        this.num += String('+'+number);
        return this;
    }

    subtract(number) {
        this.num += String('-'+number);
        return this;
    }

    multiply(number) {
        this.num += String('*'+number);
        return this;
    }

    devide(number) {
        this.num += String('/'+number);
        return this;
    }

    pow(number) {
        this.num += String('**'+number);
        return this;
    }
    valueOf(){
        return eval(this.num);
    }
}

module.exports = SmartCalculator;
