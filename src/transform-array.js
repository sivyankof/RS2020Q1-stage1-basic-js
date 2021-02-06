module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let array = false;
    if (arr.length == 0) return [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next") {
            i++;
            array = true;
        } else if (arr[i] == "--discard-prev") {
            if (i != 0 && arr[i - 2] != "--discard-next") result.pop();
            array = true;
        } else if (arr[i] == "--double-next") {
            if (i < arr.length - 1) {
                result.push(arr[i + 1]);
            }
            array = true;
        } else if (arr[i] == "--double-prev") {
            if (i != 0 && arr[i - 2] != "--discard-next") {
                result.push(arr[i - 1]);
            }
            array = true;
        } else {
            result.push(arr[i]);
        }
    }
    if (array) return result;
    else return arr;
};
