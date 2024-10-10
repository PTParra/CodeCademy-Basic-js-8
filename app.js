/*
    Using array methods, you will transform an array of strings into a secret message!

    You should consult the Mozilla Developer Network (MDN) for reference on any method with 
    which you are not familiar.
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the',
    'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 
    'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.push('to', 'Program');

console.log(secretMessage);
console.log(secretMessage.length);

secretMessage[secretMessage.indexOf('easily')] = 'right';

console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.shift();

console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.unshift('Programming');

console.log(secretMessage);
console.log(secretMessage.length);

secretMessage.splice(secretMessage.indexOf('get'), (secretMessage.indexOf('time,') - secretMessage.indexOf('get')) + 1, 'know,');

console.log(secretMessage);
console.log(secretMessage.length);

console.log(secretMessage.join(' '));