
# Gen AI Query API 🚀

A lightweight backend service that simulates an AI-powered data query system. Built using **Node.js, Express, and SQLite**.

---

## 📌 Features
- Converts natural language queries to pseudo-SQL
- Returns query breakdowns and mock responses
- Includes basic error handling and authentication

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/pranjalpatil22/GenAI-Query-API.git
cd GenAI-Query-API

2️⃣ Install Dependencies
npm install

3️⃣ Run the Server
node server.js
or if using nodemon:
npm run dev

4️⃣Test the API
Use Postman or run:
curl -X GET "http://localhost:3000/query?question=total sales"


🔗 API Documentation
1️⃣ /query (POST)
Description: Accepts a natural language query and returns a pseudo-SQL response.

Request Example:
{
  "question": "What are total sales this month?"
}
Response Example:
{
  "query": "SELECT SUM(sales) FROM orders WHERE month = 'current';",
  "data": "Mocked data response"
}

2️⃣ /explain (GET)
Description: Explains how a given query is processed.

Response Example:
{
  "explanation": "Extracting sales data from orders table for current month."
}


3️⃣ /validate (POST)
Description: Checks if the query can be processed.

Response Example:
{
  "valid": true,
  "message": "Query is valid."
}

🔎 Sample Queries
Natural Language Query	            Pseudo-SQL
"Total sales this year?"	        SELECT SUM(sales) FROM orders WHERE year = 'current';
"Number of customers last month?"	SELECT COUNT(*) FROM customers WHERE month = 'last';


📂 Download Postman Collection: [GenAI-Query-API.postman_collection.json](https://github.com/pranjalpatil22/GenAI-Query-API/blob/main/GenAI-Query-API.postman_collection.json)



🛠️ Tech Stack
Backend: Node.js, Express
Database: SQLite
Hosting: Railway


👨‍💻 Contributor
Pranjal Patil
