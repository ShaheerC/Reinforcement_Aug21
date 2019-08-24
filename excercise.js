// longestConsecutive1(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3); // -> 'marblesmittensbye'

// longestConsecutive2(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2); // --> "abigailtheta"

function getLongest(array, k) {
    let longString = '';
    for (let i=0; i < array.length; i++){
        let tempString = array.slice(i,i+k).join('');
        if (tempString.length > longString.length) {
            longString = tempString;
        }
    }
    return longString;
}

console.log(getLongest(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3));

console.log(getLongest(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));