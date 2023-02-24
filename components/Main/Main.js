import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../../router";
import { app } from "../../firebase/config";

const auth = getAuth(app);

export const Main = () => {
  const [user, setUser] = useState(null);

  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {}, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
    }
  });

  const routing = useRoute(user);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
