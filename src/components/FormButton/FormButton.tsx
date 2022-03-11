import styled from "styled-components";

const FormButtonStyle = styled.button`
  background-color: #157a6e;
  font-size: 22px;
  width: 316px;
  height: 46px;
  color: #fff;
  border-style: none;
  cursor: pointer;
`;

interface ButtonProps {
  actionOnClick: () => void;
  text: string;
}

const FormButton = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return (
    <FormButtonStyle type="button" onClick={actionOnClick}>
      {text}
    </FormButtonStyle>
  );
};

export default FormButton;
