CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    username VARCHAR(255) NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP   
);

-- Sample Input in DB
INSERT INTO messages (text, username)
VALUES
('Hello, World!','Odin'),
('Express and Postgres work great together!','Charles');