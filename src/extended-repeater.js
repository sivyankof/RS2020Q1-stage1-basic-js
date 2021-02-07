module.exports = function repeater(
    str,
    {
        repeatTimes = 1,
        separator = "+",
        addition = "",
        additionRepeatTimes = 1,
        additionSeparator = "|",
    }
) {
    let myString = new Array(additionRepeatTimes)
        .fill(`${addition}`)
        .join(additionSeparator);

    return new Array(repeatTimes).fill(`${str}${myString}`).join(separator);
};
