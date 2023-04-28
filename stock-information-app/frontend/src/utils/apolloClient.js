import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const GRAPHQL_SERVER_URL = 'http://localhost:3000/graphql';

const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
