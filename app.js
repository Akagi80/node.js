const fs = require('fs');

const genders = [
  'male', 
  'female'
]

const maleNames = [
  'Arek',
  'Adam',
  'Dominik',
  'Marcin',
  'Natan',
  'Irek',
  'Sebastian'
]

const femaleNames = [
  'Anita',
  'Agnieszka',
  'Kasia',
  'Lena',
  'Marta',
  'Natalia',
  'Sylwia'
]

const lastNames = [
  'LastName1',
  'LastName2',
  'LastName3',
  'LastName4',
  'LastName5',
  'LastName6',
  'LastName7',
]

const randomChoice = (arr) => {
  const randomRoll = Math.floor(Math.random() * arr.length);
  return arr[randomRoll];
}

const people = []

for (let i=1; i<21; i++) {
  const randomGender = randomChoice(genders);
  const randomName = randomGender === 'male' ? randomChoice(maleNames) : randomChoice(femaleNames);
  const randomLastName = randomChoice(lastNames);
  const randomAge = Math.floor(Math.random() * 61 + 18);
  const randomEmail = `${randomName.toLowerCase()}.${randomLastName.toLowerCase()}@gmail.com`;

  const randomTripleNumber = Math.floor(Math.random() * 899 + 101);
  const randomTripleNumber2 = Math.floor(Math.random() * 999 + 1);
  const randomTripleNumber3 = Math.floor(Math.random() * 999 + 1);
  const randomPhoneNumber = `${randomTripleNumber}-${randomTripleNumber2}-${randomTripleNumber3}`;

  const randomPerson = {
    Gender: randomGender,
    Name: randomName + ' ' + randomLastName,
    Age: randomAge,
    Email: randomEmail,
    Phone: randomPhoneNumber
  }

  people.push(randomPerson);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved in to people.json!');
  });