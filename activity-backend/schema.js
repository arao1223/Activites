const { gql } = require('apollo-server-express');

module.exports = gql`
  type ActivityScore {
    date: String
    score: Int
  }

  type ActivityRanking {
    activity: String
    scores: [ActivityScore]
  }

  type Query {
    getActivityRankings(city: String!): [ActivityRanking]
  }
`;
