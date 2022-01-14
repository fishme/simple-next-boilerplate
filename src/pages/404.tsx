import Head from 'next/head';
import NextLink from 'next/link';

import { Box, Button, Container, Typography } from '@mui/material';

const NotFound = () => (
  <>
    <Head>
      <title>
        404 | My App
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <NextLink
            href="/"
            passHref
          >
              Go back to main page
          </NextLink>
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;