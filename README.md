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

## 🔧 Technologies and Component Breakdown
### 1. React Frontend
- Built with React + Apollo Client + Recharts
- Accepts city name as input
- Sends GraphQL query to backend
- Displays weather activity rankings as bar charts

### 2. Node.js Backend
- Built with Node.js, Express + Apollo Server (GraphQL)
- Exposes getActivityRankings(city) query
- Makes two REST calls to:
  - Open-Meteo Geocoding API → Get lattitude/longitude
  - Open-Meteo Forecast API → Get 7-day weather
- Applies custom scoring logic for each activity
- Returns rankings per activity sorted by score

### 3. 3rd Party Open-Meteo APIs
- Geocoding API: Converts city name → coordinates
- Forecast API: 7-day weather (temp, wind, snow, rain)


## 📦 Setup Instructions

### 1. Clone the Repo

git clone https://github.com/arao1223/Activites.git
- cd Activities

### 2. Install Backend
- cd activity-backend
- npm install
- node index.js

Backend runs at http://localhost:4000/graphql


### 3. Install Frontend
- cd ../activity-ui
- npm install
- npm start

Frontend runs at http://localhost:3000

### 4. Folder Structure
- Activities/
  - activity-backend/
    - index.js
    - schema.js
    - resolvers.js
    - utils/
      - scorer.js
    - package.json
    - README.md

  - activity-ui/
    - public/
      - index.html
    - src/
      - apolloClient.js
      - graphql.js
      - App.js
      - components/
        - ActivityResults.js
        - LegendItem.js
      - index.js
      - package.json
      - README.md
- .gitignore
- README.md
- LICENSE

### Activity Scoring Rules

| Activity            | Score Factors                                                  |
| ------------------- | -------------------------------------------------------------- |
| Skiing              | High snowfall (> 5 cms) + Cold temperature (< 0C)              |
| Surfing             | Warm temperature (> 20C ) + High wind speed (> 20kmph)         |
| Outdoor SightSeeing | Mild temperature (> 15C and < 28C) + Low precipitation (<1mm)  |
| Indoor SightSeeing  | Rainy(> 5mm) or very hot/cold weather(< 10C or > 30C )         |

---
## Usage :computer:

1. After starting the Backend and Frontend, open you browser and navigate to http://localhost:3000
2. Enter the City you want to search activities for
- ![image](https://github.com/user-attachments/assets/1e811cf5-c1ed-4660-9079-971472f87fe5)
3. Click the get Rankins button to view the Activity recommendations
- ![image](https://github.com/user-attachments/assets/d8c78ad0-b25f-476a-beec-7c1c1b8c12a4)




