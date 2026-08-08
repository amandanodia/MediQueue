const express = require("express");
const Database = require("better-sqlite3");

const app = express();
const db = new Database("mediqueue.db");

console.log("MediQueue database connected!");
db.exec(`
    CREATE TABLE IF NOT EXISTS doctors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        specialization TEXT NOT NULL,
        available INTEGER DEFAULT 1
    )
`);

console.log("Doctors table ready!");
const doctorExists = db
    .prepare("SELECT id FROM doctors WHERE name = ?")
    .get("Dr. Sharma");

if (!doctorExists) {

    db.prepare(`
        INSERT INTO doctors (name, specialization, available)
        VALUES (?, ?, ?)
    `).run(
        "Dr. Sharma",
        "Cardiologist",
        1
    );

    console.log("Dr. Sharma added to database!");
}
const PORT = 3000;

// Allow JSON data
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "MediQueue backend is running!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`MediQueue server running at http://localhost:${PORT}`);
});
app.get("/api/doctors", (req, res) => {

    const doctors = db
        .prepare("SELECT * FROM doctors")
        .all();

    doctors.forEach(doctor => {
        doctor.available = Boolean(doctor.available);
    });

    res.json(doctors);
});