const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });

const initalState = false;

export default function changer(state = initalState, action) {
  switch (action.type) {
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("refreshToken");
      return false;
    }
    default:
      return state;
  }
}
