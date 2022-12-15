import styled from '@emotion/styled';

export const ControlsBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  padding: 6px 14px;
  min-width: 70px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 12px;
  }
  border-color: transparent;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondary};

  color: ${p => p.theme.colors.muted};
  transition: all 200ms ease-in-out;
  :focus,
  :hover {
    background-color: ${p => p.theme.colors.primary};
  }
`;
