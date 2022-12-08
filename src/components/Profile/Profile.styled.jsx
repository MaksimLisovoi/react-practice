import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  position: relative;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};

  border-radius: ${p => p.theme.radii.normal};

  max-width: 350px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[5]} 0 ${p => p.theme.space[5]} 0;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Name = styled.h1`
  margin-bottom: ${p => p.theme.space[4]};
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]};

  font-size: ${props => props.theme.fontSizes.m};
`;

export const Location = styled.p`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: ${props => props.theme.fontSizes.m};
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

  flex: 0 1 33.33%;

  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.muted};
  padding: ${p => p.theme.space[4]};

  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
  }
`;

export const Label = styled.span`
  text-transform: capitalize;

  font-size: ${props => props.theme.fontSizes.m};
`;

export const Quantity = styled.span`
  font-size: ${props => props.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
