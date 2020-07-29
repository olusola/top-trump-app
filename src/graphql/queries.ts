import { gql } from '@apollo/client'

export const GET_STARSHIPS = gql`
  query {
    allStarships {
      id,
      name,
      crew,
      passengers,
      length,
      hyperdriveRating
    }
  }
`