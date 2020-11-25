const crypto = require('crypto');

class Hashing{
    /**
     * Generates a random string of characters to be appended to the hashed password.
     * @param {number} saltLength The length of the random string of characters
     */
    generateSalt(saltLength){
        return crypto.randomBytes(Math.ceil(saltLength/2))
        .toString('hex')
        .slice(0, saltLength);
    }

    /**
     * Hashes the plaintext password passed in using the SHA-256 hashing algorithm.
     * @param {string} userPassword The plaintext password of the user
     * @param {string} salt The string of random characters to be combined with the hash.
     * @returns An object with the hashed password and the salt.
     */
    hashPassword(userPassword, salt){
        // Create Hmac to allow for the plaintext password and salt to be hashed together.
        let hash = crypto.createHmac('sha256', salt);
        hash.update(userPassword);
        let hashedValue = hash.digest('hex');

        let hashObj = { salt:salt, hash:hashedValue }
        return hashObj;
    }

    /**
     * Verifies the integrity of a hashed password
     * @param {string} hashedPassword The hashed password entry 
     * @param {string} plaintext The plaintext password 
     * @param {string} salt The salt associated with the hashed password 
     */
    verifyHash(hashedPassword, plaintextPassword, salt){
        let newHash = crypto.createHmac('sha256', salt);
        newHash.update(plaintextPassword);
        let hashedValue = newHash.digest('hex');
        return hashedPassword === hashedValue

    }
}

// const hashing = new Hashing();
// let salt = hashing.generateSalt(20);
// let userHash = (hashing.hashPassword('hi',salt));

// console.log(hashing.verifyHash(userHash.hash, 'hi',userHash.salt));

module.exports = Hashing;