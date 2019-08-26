console.log('arrays');

// Arrays

const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
}

const myArray = [1, 2, 8, 'bee', 'last', 'first'];

indexAndPrint(myArray, 2);

// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const findTheName = (arr, value) => {
    const doesIncludeGreg = arr.includes('greg');
        if (doesIncludeGreg) {
            console.log('greg is found');
        } else {
            console.log('no greg found');
        }
};

findTheName(['john', 'ron', 'greg', 2, 4]);
findTheName([4, 6, 8, 1, 3]);

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItAPalindrome = (str) => {
    const arrayFromString = str.split('');
    const reverseArray =  arrayFromString.reverse();
    const opposite = reverseArray.join('');

        if (str === opposite) {
            return true
        } else {
            return false
        }
};

console.log(isItAPalindrome('cat'));
console.log(isItAPalindrome('racecar'));
console.log(isItAPalindrome('mom'));
console.log(isItAPalindrome('bear'));