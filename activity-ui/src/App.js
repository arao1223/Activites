import React, { useState } from 'react';
import { ApolloProvider, useLazyQuery } from '@apollo/client';
import client from './apolloClient';
import { GET_ACTIVITY_RANKINGS } from './graphql';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';

function ActivityResults({ data }) {
  return (
    <div>
      {data.getActivityRankings.map(({ activity, scores }) => (
        <div key={activity} style={{ marginBottom: '3rem' }}>
          <h3 style={{ textTransform: 'capitalize' }}>{activity.replace(/([A-Z])/g, ' $1').trim()}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scores}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                wrapperStyle={{ fontSize: '16px' }}
              />
              <Bar dataKey="score" name={"Reccomendations for "+ activity.replace(/([A-Z])/g, ' $1').trim()} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
}

function AppContent() {
  const [city, setCity] = useState('');
  const [getRankings, { called, loading, data, error }] = useLazyQuery(GET_ACTIVITY_RANKINGS);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) getRankings({ variables: { city } });
  };

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: '0 auto' }}>
      <h1>Collinson - Weather Activity Planner</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: 8, fontSize: 16, marginRight: 10 }}
        />
        <button type="submit" style={{ padding: '8px 16px', fontSize: 16 }}>
          Get Rankings
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && <h1>Following are the activities you can do for next 7 days</h1>}
      {data && <ActivityResults data={data} />}
    </div>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppContent />
    </ApolloProvider>
  );
}
