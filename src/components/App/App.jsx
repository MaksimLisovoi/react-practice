import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import user from '../../db/user.json';

import { ThemeProvider } from '@emotion/react';
import { theme } from '../../constants/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
    </ThemeProvider>
  );
};
