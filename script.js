// console.log('my name is' + name + 'and i am' + age)
// console.log(`my name is ${name}and i am ${age}`)

// const hellow = (`my name is ${name}`)
// console.log(hellow)


// const s = 'hello world'
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5).toUpperCase())
// console.log(s.split(''))
// const r = 'longhorns, bulls, cows';
// console.log(r.split(','))

// // const numbers = new Array(1,2,3,4)
// // console.log(numbers)

// const fruits =['apples', 'oranges', 'pears',];

// fruits[3] = 'grapes'
// console.log(fruits);
// console.log(fruits[1])
// fruits.push('mangos');
// fruits.unshift('strawberries')
// fruits.pop()
// console.log(Array.isArray(fruits))

// console.log(fruits.indexOf('oranges'))


// const person = {
//     firstName: "John",
//     lastName: "doe",
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: { 
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }

// }
// console.log(person.firstName, person.lastName)
// console.log(person.hobbies[1])
// console.log(person.address.city)
// const {firstName, lastName, address: {city}} = person
// console.log(firstName)
// console.log(city)

// person.email = 'john@yahoo'
// console.log(person)

// const todos =[
//     {
//         id:1,
//         text: 'take out the trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'detist appt',
//         isCompleted: false
//     }
// ];
// // console.log(todos)
// // console.log(todos[1].text)
// //  const todoJSON = JSON.stringify(todos);
// //  console.log(todoJSON)

// //for 
// // for(let  i=0; i < 10; i++) {
// //     console.log(i);
// //     console.log(`for loop number: ${i}`)
// // }

// // //while
// // let i = 0;
// // while(i  < 10) {
// //     console.log(`while loop number: ${i}`);
// //     i++;
// // }
// for(let i = 0; i < todos.length; i++) {
//     console.log(`for Loop number: `)
// }
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// // for of loop
// for(let todo of todos) {
//     console.log(todo)
// }
// for(let todo of todos) {
//     console.log(todo.text)
// }
// for(let todo of todos) {
//     console.log(todo.id)
// }
// // high order array methdos 
// //for each, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });
// // const todoText = todos.map(function(todo) {
// //     return todo.text;

// // });
// // console.log(todoText)

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;

// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoCompleted);
// == is just vaule and === is type and vaule 
// const x = 4;
// const y = 11;

// if(x > 5 || y > 10){
//     console.log('x is more than 5 or y is more than 10');
// } 
// const x = 9

// const color = x > 10 ? 'red' : "blue" 
// console.log(color)

// switch(color) {
//     case 'red': 
//         console.log("color is red");
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }
// function addNums (num1 = 1, num2 = 1) {
//     return num1 + num2;
// }
// console.log(addNums(5,5))
//arrow function 
// const addNums = (num1, num2 =1) =>  num1 + num2
// console.log(addNums(5,5))
//function
// function addNums(num1, num2) {
//     console.log(num1 + num2);

// }

// addNums(5,4)
// OBJECT-ORIENTED PROGRAMMING
//constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob= new Date(dob); //date object
    // this.getBirthYear =function() {
    //     return this.dob.getFullYear();
    // }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// }
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;        
// }
// instaniate object
// const person1 = new Person('John', 'Doe', '4-3-1981');
// const person2 = new Person('Mary', 'Smith', '8-9-1980');
// // // console.log(person1.getBirthYear())
// // console.log(person1.getFullName())
// // // console.log(person2.firstName);
// // // console.log(person1.dob)
// // // console.log(person2.dob.getFullYear())
// console.log(person2.getFullName());
// console.log(person1);


// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;        
// }
//CLASS
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// //INSTANIATE OBJECT
// const person1 = new Person('John', 'Doe', '4-3-1981');
// const person2 = new Person('Mary', 'Smith', '8-9-1980');

// console.log(person2.getFullName());
// console.log(person1);

// selectors 
// Single elements
// console.log(document.getElementById('my-form'));
// // const form = document.getElementById('my-form')
// // console.log(form)
// console.log(document.querySelector('h1'));
//multiple elements
// console.log(document.querySelectorAll('.item'))
// const items = document.querySelectorAll('.item')

// items.forEach((item) => console.log(item))
// const ul = document.querySelector('.items');

// // ul.remove()
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const bnt = document.querySelector('.btn');
// bnt.style.background = 'red';
// const bnt = document.querySelector('.btn');

// bnt.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML ='<h1>Hello</h1>'
//     // console.log(e.target.className);
// });

const myFrom = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myFrom.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
        // alert('Please enter fields')
    }else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        // console.log('success')
        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value ='';

    }

    // console.log(nameInput.value)
}

