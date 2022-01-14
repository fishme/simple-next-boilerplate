import Head from 'next/head';
import NextLink from 'next/link';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Typography } from '@mui/material';

const NotFound = () => (
  <>
    <Head>
      <title>
        404 | My
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
            variant="h3"
          >
            404: The page you are looking for isn’t here
          </Typography>
          
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src="/static/images/404_page.svg"
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 360
              }}
            />
          </Box>
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
