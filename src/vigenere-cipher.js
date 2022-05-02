const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  argumentsChecker = (msg, key) => {
    if (!msg || !key) throw new Error('Incorrect arguments!');
}
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(msg, key) {
    this.argumentsChecker(msg, key);
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    let result = '';
    let idx;

    for (let i = 0, j = 0; i < msg.length; i++, j++) {
      if (alphabet.indexOf(msg[i].toLowerCase()) == -1) {
        result += msg[i];
        j--;
        continue;
      }
      if (j == key.length) j = 0;
      idx =
        (alphabet.indexOf(msg[i].toLowerCase()) +
          alphabet.indexOf(key[j].toLowerCase())) %
        26;
      result += alphabet[idx];
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    return result.toUpperCase();
  }
  decrypt(msg, key) {
    this.argumentsChecker(msg, key);
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    let result = '';
    let idx;
    msg = msg.toLowerCase();

    for (let i = 0, j = 0; i < msg.length; i++, j++) {
      if (alphabet.indexOf(msg[i].toLowerCase()) == -1) {
        result += msg[i];
        j--;
        continue;
      }
      if (j == key.length) j = 0;

      idx =
        (alphabet.indexOf(msg[i].toLowerCase()) +
          26 -
          alphabet.indexOf(key[j].toLowerCase())) %
        26;
        result += alphabet[idx];
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    return result.toUpperCase();
  }
  
}

module.exports = {
  VigenereCipheringMachine,
};
