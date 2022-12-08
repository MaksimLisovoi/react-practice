import styled from '@emotion/styled';

export const Heading = styled.h1`
  padding: ${p => p.theme.space[6]};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 0 1 20%;
  padding: ${p => p.theme.space[5]};

  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
  }
`;

export const Label = styled.span``;

export const Percentage = styled.span``;
