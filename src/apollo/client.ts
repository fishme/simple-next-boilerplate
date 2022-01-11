import { useMemo } from 'react';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { SchemaLink } from '@apollo/client/link/schema';

import { schema } from './schema';

let apolloClient: ApolloClient<any>;

const createIsomorphLink = () => {
  if (typeof window === 'undefined') {
    return new SchemaLink({ schema });
  } else {
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    });
  }
};

const createApolloClient = (): ApolloClient<any> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState?: null) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
