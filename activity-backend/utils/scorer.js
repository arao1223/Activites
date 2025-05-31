function scoreActivities(weather) {
  const activities = {
    skiing: [],
    surfing: [],
    outdoorSightseeing: [],
    indoorSightseeing: []
  };

  for (let i = 0; i < weather.daily.time.length; i++) {
    const date = weather.daily.time[i];
    const temp = weather.daily.temperature_2m_max[i];
    const snow = weather.daily.snowfall_sum[i];
    const rain = weather.daily.precipitation_sum[i];
    const wind = weather.daily.windspeed_10m_max[i];

    // Skiing: cold & snow
    let skiScore = (snow > 5 ? 50 : 0) + (temp < 0 ? 50 : 0);

    // Surfing: warm & windy
    let surfScore = (temp > 20 ? 50 : 0) + (wind > 20 ? 50 : 0);

    // Outdoor sightseeing: mild & dry
    let outdoorScore = (temp > 15 && temp < 28 ? 50 : 0) + (rain < 1 ? 50 : 0);

    // Indoor sightseeing: bad weather
    let indoorScore = (rain > 5 ? 50 : 0) + (temp < 10 || temp > 32 ? 50 : 0);

    activities.skiing.push({ date, score: skiScore });
    activities.surfing.push({ date, score: surfScore });
    activities.outdoorSightseeing.push({ date, score: outdoorScore });
    activities.indoorSightseeing.push({ date, score: indoorScore });
  }

  return Object.keys(activities).map(key => ({
    activity: key,
    scores: activities[key].sort((a, b) => b.score - a.score)
  }));
}

module.exports = scoreActivities;
