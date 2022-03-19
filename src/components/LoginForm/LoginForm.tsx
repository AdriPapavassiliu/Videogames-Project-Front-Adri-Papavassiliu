import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/thunks/usersThunks";
import Button from "../Button/Button";
import { RootState } from "../../redux/store";
import { User } from "../../interfaces/User";
import { useEffect } from "react";

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

    & .link {
      text-decoration: none;
      color: #0000ff;
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
  username: string;
  password: string;
}

const LoginForm = () => {
  const user = useSelector((state: RootState) => state.usersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if ((user as User).username) {
      navigate("/home");
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(loginUserThunk(data));
  };

  const watchRequiredFields = watch(["username", "password"]);

  const isInvalid =
    watchRequiredFields[0] === "" || watchRequiredFields[1] === "";
  return (
    <RegiaterFormStyle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <h2>Login</h2>

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
          text="Log in"
          actionOnClick={() => {}}
          className={isInvalid ? "disabled" : ""}
        ></Button>

        <p>
          Need an account?{" "}
          <Link to={"/register"} className="link">
            Sign up
          </Link>
        </p>
      </form>
    </RegiaterFormStyle>
  );
};

export default LoginForm;
