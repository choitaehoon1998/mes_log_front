import { useSelector } from "react-redux";
import LoginPage from "../Page/login";
export const PrivateRoute = (props) => {
  const status = useSelector((state) => state.changer);

  if (status) {
    return <props.componenets />;
  } else {
    return <LoginPage />;
  }
};
