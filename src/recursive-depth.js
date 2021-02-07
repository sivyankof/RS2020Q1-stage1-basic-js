module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) return 0;
        let counter = 0;
        let Depth = 1;

        arr.forEach((el) => {
            if (Array.isArray(el)) {
                Depth = this.calculateDepth(el);
                if (counter < Depth) {
                    counter = Depth;
                }
            }
        });
        return ++counter;
    }
};
