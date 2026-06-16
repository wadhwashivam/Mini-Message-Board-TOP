# Mini Message Board

A simple message board web application built with Node.js and Express, using EJS as the templating engine. This is part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum.

## Features

- View all messages on the message board
- Post a new message with your name and text
- Messages display the author name and timestamp
- In-memory data storage (no database required)

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Templating Engine:** EJS
- **Module System:** ES Modules (ESM)

## Project Structure

```
Project-Mini Message Board/
├── Routes/
│   └── indexRouter.js
├── Views/
│   ├── index.ejs
│   └── form.ejs
├── app.js
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/mini-message-board.git
cd mini-message-board
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
node app.js
```

4. Open your browser and navigate to `http://localhost:3000`

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | View all messages |
| GET | `/new` | View the new message form |
| POST | `/new` | Submit a new message |

## Notes

- Messages are stored in memory and will reset every time the server restarts. A database will be integrated in future projects.
- Built using ES Module syntax (`import`/`export`) rather than CommonJS (`require`).

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for the project prompt and curriculum