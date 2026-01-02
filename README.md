Portfolio App Be

This project is built using Node.js, Express, and pnpm as the package manager.

📌 Prerequisites

Make sure you have these installed on your system:

Node.js (v16+ recommended)

👉 Check version:

node -v

pnpm (Package Manager)

👉 Install pnpm globally:

npm install -g pnpm


👉 Check version:

pnpm -v

📂 Project Setup
1️⃣ Clone the Repository
git clone <your-repo-url>

2️⃣ Go to Project Folder
cd project-folder-name

📦 Install Dependencies
pnpm install


This will install all required packages listed in package.json and create pnpm-lock.yaml.

⚙️ Environment Variables (If Required)

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_database_url


⚠️ Update values according to your project.

▶️ Run the Project
🔹 Development Mode (Recommended)

Uses nodemon (auto-restarts server on changes):

pnpm run dev

🔹 Production Mode
pnpm start

🌐 Server Info

Server starts using:

node app.js


Default URL:

http://localhost:5000


(Change port if you set a different one in .env)

🛠 Scripts Used
"scripts": {
  "dev": "nodemon app.js",
  "start": "node app.js"
}


📌 Note: Scripts remain the same — only the command runner changes from npm to pnpm.

⚠️ Important Notes

❌ Do NOT use npm install after switching

✅ Always use:

pnpm install
pnpm add <package>
pnpm run dev