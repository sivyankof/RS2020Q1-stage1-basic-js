const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(/* sampleActivity */) {
    if (
        sampleActivity < 0 ||
        sampleActivity > 15 ||
        typeof sampleActivity == Number
    ) {
        return false;
    } else {
        let result =
            Math.log(MODERN_ACTIVITY / sampleActivity) /
            (0.693 / HALF_LIFE_PERIOD);
        console.log(Math.ceil(result));
    }
};
