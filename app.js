import persons from './person.js'
import {printMyName} from './utility.js'
import Person from './classes.js';
import {newnumbers} from './spread_and_rest.js'
import {newPerson} from './spread_and_rest.js'
import {filter} from './spread_and_rest.js'

for(let i in persons) {
	printMyName(persons[i].name, persons[i].age, persons[i].birthday);
}

	
const person = new Person();
person.printMyName();
person.printGender();

console.log(newnumbers);
console.log(newPerson);

console.log(filter(1,2,3,4,5,6));