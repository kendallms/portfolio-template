// Object Destructuring

// const person = {
//     name: 'Kendall',
//     age: 24,
//     location: {
//         city: 'Washington, DC',
//         temp: 31
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName); 

// Array Destructuring

// const address = ['55 M St NE', 'Washington', 'DC' , '20002']

// const [, , state = 'NY'] = address;

// console.log(`You are in ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [ itemName, , mediumPrice ] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`);