class Human {
  constructor() {
	this.name = '';
	this.gender = '';
  }

  
  printMyName() {
	console.log(this.name);
  }
  
  printGender(){
	console.log(this.gender);
  }
  
}

class Person extends Human{
  constructor() {
	super();
	this.name = 'Max';
	this.gender = 'male';
  }
}

export default Person;
