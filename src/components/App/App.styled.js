import styled from '@emotion/styled';

export const Heading = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]};
`;

export const AppBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
