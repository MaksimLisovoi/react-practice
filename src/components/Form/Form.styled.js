import styled from '@emotion/styled';

export const FormBox = styled.form`
  margin-bottom: ${p => p.theme.space[4]};

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Input = styled.input`
  padding: 6px;
  margin-top: 10px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Btn = styled.button`
  width: 160px;
  padding: ${p => p.theme.space[3]};
  margin-top: ${p => p.theme.space[5]};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
`;
