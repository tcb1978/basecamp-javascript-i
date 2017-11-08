
// #1 create a variable called 'myName' and assign it to your name as a string.
var myName = 'Matthew';

// #2 create a variable called 'iLoveCode' and assign it the value of 'myName' + loves code as a string.
var iLoveCode = myName + ' ' + 'loves code';

// ARROW FUNCTIONS
// #3 using the arrow syntax, create a function called 'wildNameReturn' that takes in variable as a parameter. Return the variable inside of the function with the word 'wild' in front so it returns "wild Bryan" and then invoke wildNameReturn using the 'myName' variable you created as an argument.
const wildNameReturn = (variable) => variable;
wildNameReturn('wild ' + myName);

// #4 using the arrow syntax, create a function called 'sum' that takes in a number and returns that number added to itself.
const sum = (num) => num + num;
sum(2);

// #5 using the arrow syntax, create a function called 'greeter' that takes in two parameters, name & age. greeter should return a string like this "Hi, I'm Bryan and I am 27 years old." but replacing the name and age with the passed in values. The test on this question is very strict on casing and punctuation.
const greeter = (name, age) => "Hi, I'm " + name + " and I am " + age + " years old.";
greeter("Bryan", 27);

// #6 using the arrow syntax, create a function called 'animalSounds'. animalSound takes three parameters: name, sound and a callback. animalSound should return something like this "I am wild Bryan. Hear me woof." when invoked using the wildNameReturn function you previously created as the callback.
const animalSounds = (name, sound, callback) => callback(`I am wild ${name}. Hear me ${sound}.`);
animalSounds("Bryan", "meow", wildNameReturn);

// CALLBACKS
// Here we will write a function that takes in a callback as a parameter. You must write the callback function to make the existing function work properly.
// EXAMPLE
// You would create the sayHi function here
var sayHi = (str, callback) =>{
  callback(str);
 }
// So you can use it down here
 sayHi('Hi Lindsey', thingToSay =>{
    //alert(thingToSay); //should alert ('Hi Lindsey')'
 });
 // You can comment out the above code so it doesn't run every time you refresh your page.

// #7 using the arrow syntax, write a function called 'first' that returns the first item of the array
var names = ['Bryan', 'Jeremy', 'Joe', 'Megan', 'Ian', 'Taylor'];

const first = (arr, callback) => {
  arr = arr.shift();
  return callback(arr);
};

first(names, firstName => {
  console.log(`The first name in names is ${firstName}`);
  return firstName;
});

// #8 using the arrow syntax, write a function called 'multiply' that multiplies two numbers. Invoke the callback with the result of the multiplication.

const multiply = (num1, num2, callback) => {
  callback(num1 * num2);
}

multiply(4,3, answer => {
  console.log(`the answer is ${answer}`)
});

// #9 using the arrow syntax, write a function called 'last' that returns the last name in the previously crated names array using a callback function.

const last = (arr, callback) => {
  arr = arr.pop();
  return callback(arr);
};

last(names, lastName =>{
  console.log(`The last name in names is ${lastName}`);
  return lastName;
});

// #10 using the arrow syntax, write a function called 'sizer' that returns the larger of two numbers that are passed in using a callback function.

const sizer = (num1, num2, callback) => callback(Math.max(num1, num2));

sizer(300, 33, bigger => {
  console.log(`${bigger} is the larger number`);
  return bigger;
});


// METHODS ON ARRAYS
var friends = ['Cam', 'Corey', 'Landy'];

// #11 add the name 'Harry' to the end of the friends array

friends.push('Harry');

// #12 assign 'shortNames' the return value of any names shorter than four characters from the friends array

var shortNames = friends.filter(name => name.length < 4);

// #13 here we have created a NickNameMaker function that will shorten names to the begninning two Characters so 'Cam' will be 'CaCa. Using the nickNameMaker function, map over the previously created friends array to return the friends nick names and assign it to 'shorty'.

var nickNameMaker = (name) => {
  return name.split('').slice(0,2).join('') + name.split('').slice(0,2).join('');
}

var shorty = friends.map(item => nickNameMaker(item));

// #14 assign 'evens' the return value of even numbers from the numbers array
var numbers = [1, 25, 6, 88, 47, 77, 333, 500];

const evens = numbers.filter(function (a) {return (a & 1) === 0;});

// #15 using the previously created numbers array, map over each number and add 3 to it and assign it to 'plusThree'.

const plusThree = numbers.map(nums => nums + 3);

// #15 using the 'goodPeople' array of objects, add a new key value pair of 'family: true' to each object. Hint: use forEach
var goodPeople = [{name: 'George'}, {name: 'Randi'}, {name: 'Lindsey'}]

goodPeople.map(item => item.family = true);