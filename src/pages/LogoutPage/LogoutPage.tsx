import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { User } from "../../interfaces/User";
import { logoutAction } from "../../redux/actions/actionsCreators";
import { RootState } from "../../redux/store";

const LogOutPageStyle = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;

export const LogoutPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.usersReducer);
  useEffect(() => {
    (user as User).username ?? navigate("/login");
  }, [navigate, user]);

  const logout = () => {
    localStorage.clear();
    dispatch(logoutAction());
    navigate("/login");
  };

  return (
    <>
      <LogOutPageStyle>
        <Button type="form" actionOnClick={() => logout()} text="Logout" />
      </LogOutPageStyle>
    </>
  );
};
