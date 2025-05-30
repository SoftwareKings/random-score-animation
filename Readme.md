# 🎲 Random Score Animation

A full-stack demo app that displays three “score” rings (Your Score, Average, Target) in an animated SVG, with a button to re-randomize values.  

- **Frontend**: Vue 3 + Vite + TypeScript + Tailwind CSS + Pinia  
- **Backend**: Node.js + Express + TypeScript (serves random scores API)  

---

## 🚀 Features

- **Animated score rings** drawn in SVG with smooth transitions  
- **Randomize** button to fetch a new set of scores from the API  
- **Responsive** Tailwind-powered layout for mobile→desktop  
- **State management** via Pinia store  
- **Unit tests** with Vitest & Vue Test Utils (frontend)  
- **API tests** with Jest & Supertest (backend)


---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) ≥ v18  
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)  

---

## 🛠️ Backend Setup

1. **Install dependencies**  
   ```bash
   cd backend
   npm install
   # or yarn
Env vars
Create a .env file in backend/ (if you need custom port, etc). E.g.:

ini
Copy
Edit
PORT=4000
Run in dev

bash
Copy
Edit
npm run dev
# starts ts-node-dev or nodemon on port 4000
Build & run

bash
Copy
Edit
npm run build
npm start
# builds to /dist then runs node dist/server.js
API Endpoints

Endpoint	Method	Description
/api/scores	GET	Returns { yourScore, average, target } with 0–100 values

Run tests

bash
Copy
Edit
npm test
# uses Jest & Supertest to verify /api/scores
🎨 Frontend Setup
Install dependencies

bash
Copy
Edit
cd frontend
npm install
# or yarn
Configure API URL
By default, the Pinia store hits /api/scores relative to the UI server.
To override (e.g. localhost:4000), create frontend/.env:

ini
Copy
Edit
VITE_API_BASE_URL=http://localhost:4000
Run in dev

bash
Copy
Edit
npm run dev
# starts Vite on http://localhost:5173 (by default)
Build for production

bash
Copy
Edit
npm run build
# outputs static assets to frontend/dist/
Run tests

bash
Copy
Edit
npm run test
# runs Vitest suites under frontend/tests/*.spec.ts
📝 Scripts Summary
Backend (/backend/package.json)
Script	Command	Description
dev	ts-node-dev src/server.ts	Start server in watch mode (TS)
build	tsc	Compile TS→JS under /dist
start	node dist/server.js	Run compiled server
test	jest	Run API tests

Frontend (/frontend/package.json)
Script	Command	Description
dev	vite	Start front-end in watch mode
build	vite build	Compile production bundle
test	vitest	Run unit tests (Vitest & Vue Test Utils)
lint	eslint "src/**/*.{js,ts,vue}" --fix	Lint & auto-fix code

🚦 Workflow
Start the backend

bash
Copy
Edit
cd backend && npm run dev
In a new terminal, start the frontend

bash
Copy
Edit
cd frontend && npm run dev
Visit http://localhost:5173 in your browser.
Click Randomize to fetch new scores from your API!

🧪 Testing
Frontend

bash
Copy
Edit
cd frontend
npm run test
Runs all *.spec.ts tests under frontend/tests/.

Backend

bash
Copy
Edit
cd backend
npm test
Verifies your Express routes.

📦 Deployment
Frontend: Host /frontend/dist on any static-site host (Netlify, Vercel, S3+CloudFront).

Backend: Deploy /backend/dist to a Node-friendly server (Heroku, AWS Elastic Beanstalk, DigitalOcean).

🤝 Contributing
Fork the repo

Create a feature branch: git checkout -b feat/your-feature

Commit your changes

Push & open a PR

Please follow the existing code style and add tests for new functionality.

📄 License
This project is released under the MIT License.

css
Copy
Edit

**Feel free to adapt** any paths, port numbers, or environment variables to precisely match your setup. This README gives a cohe