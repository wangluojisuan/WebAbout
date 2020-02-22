const Hello1 = {
    sayHello1: function () {
        console.log('Hello1.Hello1');
    },
    sayHello2: function () {
        console.log('Hello1.Hello2');
    }
};

function Hello2() {
    this.sayHello1 = function () {
        console.log('Hello2.Hello1');
    };
    this.sayHello2 = function () {
        console.log('Hello2.Hello2');
    };
};

module.exports = Hello1;
module.exports = Hello2;