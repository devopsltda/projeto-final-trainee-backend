import jwt from 'jsonwebtoken';
import moment from 'moment';

const dafaultExpirationDate = '4hr';

const JWT_SECRET = `${process.env['JWT_SECRET']}`;

/**
 *
 * @param {Object.<any, any>} payload
 * @param {jwt.SignOptions} [options={ expiresIn: defaultTokenExpiration }]
 * @returns {String}
 */
function signJWT(payload, options = {}) {
  options.expiresIn = options.expiresIn || dafaultExpirationDate;
  options.subject = `${payload.id}`;
  payload.iat = moment().unix();
  return jwt.sign(payload, JWT_SECRET, options);
}

/**
 * @param {String} hash
 * @param {String} password
 * */
function comparePasswordFromHash(password, hash) {
  return password === hash;
}

export { signJWT, comparePasswordFromHash };