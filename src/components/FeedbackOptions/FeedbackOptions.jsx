import { ControlsBlock, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const buttonNames = Object.keys(options);

  return (
    <ControlsBlock>
      {buttonNames.map(btnName => (
        <Btn onClick={onLeaveFeedback} key={btnName} type="button" name={btnName}>
          {btnName[0].toUpperCase() + btnName.slice(1)}
        </Btn>
      ))}
    </ControlsBlock>
  );
};
