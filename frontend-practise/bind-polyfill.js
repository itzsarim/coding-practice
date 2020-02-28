const name = {
    firstname: 'Sarim',
    lastname: 'Zaidi',
    printFullName: function(spouse,age) {
        console.log(this.firstname + ' ' + this.lastname+ ' '+ spouse+ ' '+age);
    }
}

const name2 = {
    firstname: 'Uzma',
    lastname: 'Tafsir',
}

const nameWithSpouse = name.printFullName.bind(name2, "Sarim");
nameWithSpouse("30");

Function.prototype.myBind = function(contextObj, ...args ) {
    let func = this;
    let params = args;
    return function(...args) {
        func.apply(contextObj,[...params, ...args]);
    }
}

const myName = name.printFullName.myBind(name2, "Sarim");
myName("30");
