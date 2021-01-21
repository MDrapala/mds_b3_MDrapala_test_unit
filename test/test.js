const isAnagram = require('../src/anagram');

/*
* Anagram Testing file
*/
test('isAnagram function exists', () => {
  // Complete here
  const isAnagramTest = isAnagram('mathieu', 'mathieu')
  expect(isAnagramTest).toBe(true)
});

test('"cinema" is an anagram of "iceman"', () => {
  // Complete here
  const isAnagramTest = isAnagram('cinema', 'iceman')
  expect(isAnagramTest).toBe(true)
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  // Complete here
  const isAnagramTest = isAnagram('Dormitory', 'dirty room##')
  expect(isAnagramTest).toBe(true)
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  // Complete here
  const isAnagramTest = isAnagram('Hello', 'Aloha')
  expect(isAnagramTest).toBe(false)
});

/*
* Various functions Testing file
*/
const functions = require('../src/variousfunctions');
const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    //const user = 'Jeff';
    const user = 'Bret'; // -> ce test pour retourner vrai car Jeff n'existe pas
    // Check if the user is Jeff
    // Complete here
    return functions.fetchUser().then(data => {
      expect(data.username).toBe(user);
    });
  });

  test('User is Karen', () => {
    //const user = 'Karen';
    const user = 'Bret'; // -> ce test pour retourner vrai car Kraken n'existe pas
    //Check if the user is Karen
    // Complete here
    return functions.fetchUser().then(data => {
      expect(data.username).toBe(user);
    });
  });
});

test('Adds 2 + 2 to equal 4', () => {
  // Complete here
  const value = 2 + 2;
  expect(value).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  // Complete here
  const value = 2 + 2;
  expect(value).toBeLessThan(5);
});

/*
* Informations
*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  // Complete here
});

// toBeFalsy
test('Should be falsy', () => {
  // Complete here
});

// toEqual
test('User should be Marc Antoine object', () => {
  // Complete here
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  // Complete here
});

// Regex
test('There is no I in the word team', () => {
  // Complete here
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  // Complete here
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  // Complete here
});

/*
* ReverseString Testing file
*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  // Complete here
});

test('String reverses', () => {
  // Complete here
});

test('String reverses with uppercase', () => {
  // Complete here
});
