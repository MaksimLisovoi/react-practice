import styled from '@emotion/styled';

export const Head = styled.thead``;

export const Row = styled.tr`
  padding: ${p => p.theme.space[4]};
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};

  :nth-child(2n) {
    background-color: ${p => p.theme.colors.muted};
  }
`;

export const Heading = styled.th`
  background-color: ${p => p.theme.colors.tableHead};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[4]};
`;

export const Data = styled.td`
  padding: ${p => p.theme.space[4]};
  text-transform: capitalize;
`;

export const Body = styled.tbody``;
