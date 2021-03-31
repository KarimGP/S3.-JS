const text = 'Tinc un cotxe de color blau';

console.log(text.replace('blau', 'verd'));

const text2 = 'Tinc un cotxe de color blau';
let noutext2 = text2.replace(/[o]/gi, "u");

console.log(noutext2);