function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function Generalist(name) {
    this.name = name;
    this.type = "Generalist";
}

function EmployeeFactory(name, type) {
    switch(type) {
        case 1:
            return new Developer(name);
            break;
        case 2:
            return new Tester(name);
            break;
        default:
            return new  Generalist(name);
    }
}

function identify() {
    console.log(`My name is ${this.name} and i am a ${this.type}`);
}

const employees = [];
employees.push(new EmployeeFactory("Sarim", 1));
employees.push(new EmployeeFactory("Uzma", 2));
employees.push(new EmployeeFactory("Sagar", 3));

employees.forEach(employee => {
    identify.call(employee);
});