module.exports = function createDreamTeam(members) {
    if (Array.isArray(members) === false) {
        return false;
    }

    let abbreviation = [];

    members.forEach((e) => {
        if (typeof e === "string") {
            abbreviation.push(e.trim()[0].toUpperCase());
        } else {
            return false;
        }
    });
    return abbreviation.sort().join("");
};
