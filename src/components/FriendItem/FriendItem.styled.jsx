import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.primary};
  width: 100%;
  padding: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.l};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Status = styled.span`
  width: 40px;
  height: 40px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[4]};

  background-color: ${p => p.theme.colors.primary};
`;

export const Avatar = styled.img`
  width: 100px;

  margin-right: ${p => p.theme.space[4]};
`;

export const Name = styled.p``;
