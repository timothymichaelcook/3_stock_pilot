import { gql } from '@apollo/client';

export const Stock_Search = gql`
  query StockSearch {
    thoughts {
      _id
      open
      high
      low
      close
      volume 
    }
  }
`;