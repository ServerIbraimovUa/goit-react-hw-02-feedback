import { BoxButtons } from './Buttons.styled';

const Button = ({ keys, onButtonClick }) => {
  return (
    <BoxButtons>
      {keys.map(key => (
        <button key={key} type="button" onClick={() => onButtonClick(key)}>
          {key}
        </button>
      ))}
    </BoxButtons>
  );
};
export default Button;
