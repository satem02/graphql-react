
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import config from '../config';

const httpLink = new HttpLink({ uri: config.GRAPHQL_ENDPOINT });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token')  || null,
    }
  }));

  return forward(operation);
})

const CustomApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default CustomApolloClient;