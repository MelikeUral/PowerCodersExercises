let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


function getLastValue(pArray) {
    pArray.sort((a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    return pArray[pArray.length - 1]
}

console.log(`${getLastValue(days)} is the last value of the array.`);
