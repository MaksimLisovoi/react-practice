import { ControlsBlock, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = () => (
  <ControlsBlock>
    <Btn onClick={() => {}} type="button">
      Good
    </Btn>
    <Btn type="button">Neutral</Btn>
    <Btn type="button">Bad</Btn>
  </ControlsBlock>
);
