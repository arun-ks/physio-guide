import { db } from "./_lib/db.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const result = await db.execute(`
      SELECT *
      FROM Exercises
      ORDER BY SortOrder ASC
    `);

    res.json(result.rows);
    return;
  }
  console.log("DEBUG: TURSO_DATABASE_URL = ", process.env.TURSO_DATABASE_URL);
  res.status(405).json({ error: "Method not allowed" });
}
