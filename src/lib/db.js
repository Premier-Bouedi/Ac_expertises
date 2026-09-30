import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ac_expert',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query({ query, values = [] }) {
  try {
    const [results] = await pool.execute(query, values);
    return results;
  } catch (error) {
    throw Error(error.message);
  }
}
