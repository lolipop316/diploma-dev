import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise";
import cors from "cors";

dotenv.config()

const app = express();

app.use(cors())

const PORT = process.env.PORT || 8080;

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0,
})

app.get("/api/user", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT student_id, name, profile_pic FROM students"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

