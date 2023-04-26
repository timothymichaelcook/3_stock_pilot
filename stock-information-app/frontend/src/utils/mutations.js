import { gql } from '@apollo/client';


export const User_Profile = gql`
mutation UserProfile($name: String!) {
  UserProfile(name: $name) {
      _id
      username
      high
      low

    }
  }
`;

export const User_Portfolio = gql`
mutation UserPortfolio($name: String!) {
  UserPortfolio(name: $name) {
      _id
      username
      open
      high
      low
      close
      volume  
    }
  }
`;