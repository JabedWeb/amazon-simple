//How can you pass a boolean value (true) as the prop named hero?

//which one is correct?
//a <Greeting hero={true} />
//b <Greeting hero={1} />
//c <Greeting hero="true" />
//d <Greeting hero="1" />

//Answer: a

const obj = {name :'jack',age:27}
const a= 'name' in obj;
console.log(a)