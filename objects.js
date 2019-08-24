// strings

const bouncer = (age) => {

    if (age >= 21) {
        console.log('drink');
    } else {
        console.log('shame');
    }
};

bouncer(12);
bouncer(56);

const me = 'martin';
console.log(me.length);

// objects

const myPerson = {
    name: 'john',
    age: '41',
};

console.log(myPerson.name);

// challenge KEEP STUDYINGGGGGG!!!!!

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'VIP';
    } else {
        employee.staus = 'Peasant'
    };
    console.log(`${employee.name} is a total ${employee.status}`);
    return employee;

};

const person = {
    name: 'Michael',
    status: ''
}



findAndLogEmployeeStatus(person);
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
})
