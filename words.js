exports.words = sentence => {
    if (typeof sentence === 'string') {
        const inputArray = sentence.toLowerCase().split(' ');
        const inputSet = new Set(inputArray);
        const outputObject = {};
        for (let item of inputSet) {
            if (item !== '') {
                outputObject[item] = 1;
            }
        }
        const newSet = new Set();
        let tracker = 0; // used to keep track of newSet size
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] !== '') {
                newSet.add(inputArray[i]);
                tracker++;
                if (newSet.size !== tracker) {
                    outputObject[inputArray[i]]++; // increment object item
                    tracker--;
                }
            }
        }
        return outputObject;
    }
    return { 'error': 'parameter must be a string' };
};
