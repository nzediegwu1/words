exports.words = sentence => {
    if (Number(sentence)) {
        return { error: 'parameter must not be number' };
    } else if (Array.isArray(sentence)) {
        return { error: 'parameter must not be an array' };
    } else if (sentence === undefined) {
        return { error: 'parameter is undefined' };
    } else if (typeof sentence === 'object') {
        return { error: 'parameter must not be an object' };
    } else {
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
};