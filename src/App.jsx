import { useEffect, useState } from "react";
import { getUserState, GSignIn, logOut } from "./Method";

import { SignInV2 } from "./SignIn-V2";
import { UserProvider } from "./UserProvider";

function App() {
  const [userDetail, setUserDetail] = useState({});

  const GLogin = async () => {
    const user = await GSignIn();
    const { displayName, email, photoURL } = user;
    console.log(displayName, email, photoURL);
    setUserDetail({ displayName, email, photoURL });
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      const retainUser = await getUserState();
      if (!retainUser) {
        console.log("lne40  if condition");

        return;
      }
      const { displayName, email, photoURL } = retainUser;
      console.log("useEffect", retainUser);
      setUserDetail({ displayName, email, photoURL });
    };
    getCurrentUser();
  }, []);

  const GlogOut = () => {
    logOut();
    setUserDetail({});
  };

  return (
    <UserProvider value={{ GLogin, GlogOut, userDetail }}>
      <SignInV2 />
    </UserProvider>
  );
}

export default App;
