# 🌤️ Weather Activity Ranking App

A full-stack web app that ranks how desirable it is to visit a city for various activities over the next 7 days — based on real-time weather forecasts from [Open-Meteo API](https://open-meteo.com/).

## 🚀 Features

- 🔍 Search any city or town.
- 📈 See daily weather-based rankings for:
  - Skiing
  - Surfing
  - Outdoor Sightseeing
  - Indoor Sightseeing
- 📊 Interactive bar graphs (Recharts) for intuitive comparisons.
- 🌍 Weather & geolocation powered by Open-Meteo API.
- ⚙️ Full-stack built with React, Node.js, and GraphQL.

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **Apollo Client (GraphQL)**
- **Recharts**

### Backend
- **Node.js**
- **Express**
- **Apollo Server (GraphQL)**
- **Open-Meteo API**

---

## 📦 Setup Instructions

### 1. Clone the Repo

git clone https://github.com/arao1223/Activites.git
cd Aweather-activity-app

2. Install Backend
cd backend
npm install
node index.js

Backend runs at http://localhost:4000/graphql


3. Install Frontend
cd ../weather-activity-ui
npm install
npm start

Frontend runs at http://localhost:3000

4. Folder Structure

weather-activity-app/
├── backend/
│   ├── index.js
│   ├── schema.js
│   ├── resolvers.js
│   ├── utils/
│   │   └── scorer.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── apolloClient.js
│   │   ├── graphql.js
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── ActivityResults.js
│   │   │   └── LegendItem.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── README.md
└── LICENSE





Activity Scoring Rules

| Activity            | Score Factors                        |
| ------------------- | ------------------------------------ |
| Skiing              | High snowfall + Cold temperature     |
| Surfing             | Warm temperature + High wind speed   |
| Outdoor Sightseeing | Mild temperature + Low precipitation |
| Indoor Sightseeing  | Rainy or very hot/cold weather       |


