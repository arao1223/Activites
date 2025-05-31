const axios = require('axios');
const scoreActivities = require('./utils/scorer');

module.exports = {
  Query: {
    getActivityRankings: async (_, { city }) => {
      // 1. Geocode
      const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
      const place = geoRes.data.results?.[0];
      if (!place) throw new Error("City not found");

      const { latitude, longitude } = place;

      // 2. Get weather
      const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude,
          longitude,
          daily: 'temperature_2m_max,snowfall_sum,precipitation_sum,windspeed_10m_max',
          timezone: 'auto'
        }
      });

      // 3. Score & rank
      return scoreActivities(weatherRes.data);
    }
  }
};
