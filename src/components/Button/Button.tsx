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
  background-color: black;
  font-size: 22px;
  width: 316px;
  height: 46px;
  color: red;
  border-style: none;
  cursor: pointer;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
  type: string;
}

const Button = ({ actionOnClick, text, type }: ButtonProps): JSX.Element => {
  return (
    <>
      {type === "form" && (
        <FormButtonStyle onClick={actionOnClick}>{text}</FormButtonStyle>
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
