// bcryptjs para hashear la password a la DB
const bcryptjs = require('bcryptjs');

const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["@", "#", "$", "%","!", "?"]
const charactersCodes = Array.from(Array(26)).map((_,i) => i + 97);
const lowercaseLetters = charactersCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

const generateRandomPassword = () => {
    
    const characters = [ ...numbers, ...symbols, ...lowercaseLetters, ...uppercaseLetters];
    let password = "";

    for (let i = 0; i < 40; i++) {
        const randomIndex = Math.floor(Math.random() * 40);
        password += characters[randomIndex];
    }

    const salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(password, salt);
};

module.exports = { generateRandomPassword }