// IMPORT MODULES under test here:
import { verifyYes } from '../verify-yes.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('verifyYes should take in a yes-like and return true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'YES'
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = verifyYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('verifyYes should take in no-like and return false', (expect) => {

    const no = 'NOPE';
    const expected = false;

    const actual = verifyYes(no);

    expect.equal(actual, expected);
});