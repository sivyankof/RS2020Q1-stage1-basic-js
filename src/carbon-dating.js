const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (
        !Number(sampleActivity) ||
        typeof sampleActivity !== "string" ||
        sampleActivity > 15 ||
        sampleActivity < 0
    ) {
        return false;
    } else {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let t = MODERN_ACTIVITY / sampleActivity;
        let result = Math.log(t) / k;
        return Math.ceil(result);
    }
};
