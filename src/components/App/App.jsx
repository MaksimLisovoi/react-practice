import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import user from '../../db/user.json';
import data from '../../db/data.json';
import friends from '../../db/friends';
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
        <Statistics title="UPLOAD STATS" stats={data} />
        <FriendList friends={friends} />
      </Container>
    </ThemeProvider>
  );
};
