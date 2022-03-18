import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { registerUserThunk } from "../../redux/thunks/usersThunks";
import Button from "../Button/Button";

const RegiaterFormStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 65px;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & .disabled {
      background-color: #c9c6c5;
      cursor: default;
    }

    & h2 {
      color: #157a6e;
      margin-bottom: 5px;
    }

    & div {
      width: 316px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;

      & label {
        margin-bottom: 10px;
      }

      & input {
        height: 30px;
      }
    }
  }
`;

interface IFormInput {
  name: string;
  username: string;
  password: string;
}

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(registerUserThunk(data));
    navigate("/user/login");
  };

  const watchRequiredFields = watch(["name", "username", "password"]);

  const isInvalid =
    watchRequiredFields[0] === "" ||
    watchRequiredFields[1] === "" ||
    watchRequiredFields[2] === "";
  return (
    <RegiaterFormStyle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <h2>Register</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Please insert your name"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Please insert your username"
            {...register("username", { required: true })}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
        </div>

        <Button
          disabled={isInvalid}
          type="form"
          text="Sign up"
          actionOnClick={() => {}}
          className={isInvalid ? "disabled" : ""}
        ></Button>
      </form>
    </RegiaterFormStyle>
  );
};

export default RegisterForm;
