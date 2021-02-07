class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }

        let letterPos, keyPos;
        let keyCounter = 0;
        let result = [];

        message = message.toUpperCase();
        key = key.toUpperCase();

        for (let i = 0; i < message.length; i++) {
            letterPos = this.alphabet.indexOf(message[i]);

            if (letterPos === -1) {
                result.push(message[i]);
                continue;
            }

            keyPos = this.alphabet.indexOf(key[keyCounter % key.length]);
            result.push(this.alphabet[(letterPos + keyPos) % 26]);
            keyCounter++;
        }

        return this.type ? result.join("") : result.reverse().join("");
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }

        let letterPos, keyPos;
        let keyCounter = 0;
        let result = [];

        key = key.toUpperCase();

        for (let i = 0; i < message.length; i++) {
            letterPos = this.alphabet.indexOf(message[i]);

            if (letterPos === -1) {
                result.push(message[i]);
                continue;
            }

            keyPos = this.alphabet.indexOf(key[keyCounter % key.length]);
            result.push(this.alphabet[(letterPos - keyPos + 26) % 26]);
            keyCounter++;
        }

        return this.type ? result.join("") : result.reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;
