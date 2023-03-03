// Database
const { Userdev } = require("../db.js");

const normalizeNickname = (givenName, familyName = false) => {
    const newGivenName = getFirstWordClean(givenName);
    const newFamilyName = familyName ? getFirstWordClean(familyName) : false;

    const currentNickname = `${newGivenName}${newFamilyName ? `_${newFamilyName}` : ""}`;
    const finalNickname = verifyNickname(currentNickname);

    return finalNickname;
}

const getFirstWordClean = (string) => {
    const wordClean = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "");
    const firstWord = wordClean.split(" ")[0];
    return firstWord;
}

const verifyNickname = (nickname) => {
    let i = 1;
    let currentNickname = nickname
    let exists = shearchNickname(currentNickname);

    while (exists) {
        currentNickname = `${nickname}${i}`;
        exists = shearchNickname(currentNickname);
        i++;
    }

    return currentNickname;
}

const shearchNickname = async (nickname) => {
    const exists = await Userdev.findOne({
        where: {
            nickname,
        }
    });

    return !!exists;
}

module.exports = { normalizeNickname }