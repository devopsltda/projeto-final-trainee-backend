import { pool } from '../database/database.js';

class ErrorNotFound extends Error {}

const queryGetUserByUserName = `
    SELECT * FROM "users"
    WHERE username = $1;
`;

/**
 * @param {String} userName
 * @returns {Promise<Object.<any, any>>}
 * */
async function getUsersbyUserName(userName) {
  const result = await pool.query(queryGetUserByUserName, [userName]);
  if (result.rows.length === 0) {
    throw new ErrorNotFound('user not found');
  }
  return result.rows[0];
}

export { getUsersbyUserName, ErrorNotFound };