import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const GRAPHQL_SERVER_URL = 'http://localhost:4000/graphql';

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
