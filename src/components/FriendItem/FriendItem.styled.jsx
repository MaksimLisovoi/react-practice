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
  width: 30px;
  height: 30px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[4]};

  background-color: ${p => {
    return p.isOnline ? p.theme.colors.primary : p.theme.colors.text;
  }};
`;

export const Avatar = styled.img`
  width: 70px;

  margin-right: ${p => p.theme.space[4]};
`;

export const Name = styled.p``;
