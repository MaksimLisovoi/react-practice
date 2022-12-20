import styled from '@emotion/styled';

export const ContactItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;
