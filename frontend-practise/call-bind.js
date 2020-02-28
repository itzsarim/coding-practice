const name = {
    firstname: 'Sarim',
    lastname: 'Zaidi',
    printFullName: function(spouse) {
        console.log(this.firstname + ' ' + this.lastname+ ' '+ spouse);
    }
}

const name2 = {
    firstname: 'Uzma',
    lastname: 'Tafsir',
}

//function borrowing

name.printFullName.call(name2, 'Sarim');
name.printFullName.apply(name, ['Uzma']);

// bind is similar to call, but it does not invoke the function right away, but creates a copy of it to be invoked later
const nameWithSpouse = name.printFullName.bind(name2, "Sarim");
nameWithSpouse();
