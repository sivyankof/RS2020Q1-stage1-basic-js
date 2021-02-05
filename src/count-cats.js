module.exports = function countCats(arg) {
    let sum = 0;
    let arr = arg.flat();

    arr = arr.map((e) => {

        if (e == "^^" || e == "^^") {
            sum += 1;
        }
    });

    return sum;
};

