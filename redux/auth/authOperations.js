import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";

const auth = getAuth(app);

export const authSignUpUser =
  ({ image, email, password, login }) =>
  async (dispatch, getSatte) => {
    console.log("email, password, login", email, password, login);
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("error.message", error.message);
    }
  };
export const authSignInUser = () => async (dispatch, getSatte) => {};
export const authSignOutUser = () => async (dispatch, getSatte) => {};
