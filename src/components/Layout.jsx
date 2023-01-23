// import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppBar } from './AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Suspense fallback={<h1>HELLO, IT`S AHTUNG!</h1>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
