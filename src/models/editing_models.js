// models/postModel.js
const pool = require('../database/database.js');
/**
 * 
 * @param {*} post_Id 
 * @returns 
 */
// Função para buscar uma postagem pelo ID
const getPostById = async (post_Id) => {
  const query = 'SELECT * FROM posts WHERE id = $1';
  const values = [post_Id];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// Outras funções que podem ser necessárias...

module.exports = {
  getPostById,
};