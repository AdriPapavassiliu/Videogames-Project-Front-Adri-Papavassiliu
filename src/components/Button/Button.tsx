import styled from "styled-components";

export const FormButtonStyle = styled.button`
  background-color: #157a6e;
  font-size: 22px;
  width: 316px;
  height: 46px;
  color: #fff;
  border-style: none;
  cursor: pointer;
`;

export const FilterBarButtonStyle = styled.button`
  margin: 0;
  width: 47px;
  height: 30px;
  background-color: #e5e5e5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border-style: none;
  justify-content: center;
  font-size: 12px;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
  type: string;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  actionOnClick,
  text,
  type,
  disabled,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {type === "form" && (
        <FormButtonStyle
          onClick={actionOnClick}
          disabled={disabled}
          className={className}
        >
          {text}
        </FormButtonStyle>
      )}
      {type === "filter" && (
        <FilterBarButtonStyle onClick={actionOnClick}>
          {text}
        </FilterBarButtonStyle>
      )}
    </>
  );
};

export default Button;
