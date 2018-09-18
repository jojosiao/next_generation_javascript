export const numbers = [1,2,3,5,6];
export const newnumbers = [...numbers,7,8,9,10];

export const person =  {
	name: 'Jojo'
}

export const newPerson = {
	...person,
	age:41
}


export const filter = (...args) => {
	return args.filter( el => el === 1);	// filter is function of Array
}

