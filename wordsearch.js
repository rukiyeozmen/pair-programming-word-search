const wordSearch = (letters, word) => {

    if (letters.length === 0) {
        return false;
    }

    // for each array row, find a horizontal word from the array row
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    // for each array col, find a word from the array col
    for (let col = 0; col < letters[0].length; col++) {
        let colStr = "";
        for (let row = 0; row < letters.length; row++) {
            colStr += letters[row][col];
        }
        if (colStr.includes(word)) {
            return true;
        }
    }

    return false;
};

module.exports = wordSearch;