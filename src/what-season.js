module.exports = function getSeason(date) {
    const season = {
        winter: [11, 0, 1],
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10],
    };

    if (!date) {
        return "Unable to determine the time of year!";
    }
    if (Object.prototype.toString.call(date) !== "[object Date]") {
        throw new Error();
    }

    for (let key in season) {
        if (season[key].indexOf(date.getMonth()) !== -1) {
            return key;
        }
    }
};
