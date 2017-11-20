exports.words = sentence => {
    if (typeof sentence === 'string') {
        const inputArray = sentence.toLowerCase().split(' ');
        const outputObject = {};
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] !== '') {
                if (outputObject[inputArray[i]] === undefined) {
                    outputObject[inputArray[i]] = 1;
                } else {
                    outputObject[inputArray[i]]++;
                }
            }
        }
        return outputObject;
    }
    return { error: 'parameter must be a string' };
};