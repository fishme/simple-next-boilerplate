import gql from 'graphql-tag';
import Link from 'next/link';

import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { initializeApollo } from '../apollo/client';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

function Index() {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery);
  if (viewer) console.log(viewer);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js, Typescript, React, MUI and GraphQL starter
        </Typography>
        <Link href="/SignIn">SignIn Form Example</Link>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
