import React, { useContext } from "react";
import { userContext } from "./UserProvider";

export const SignInV2 = () => {
  const { GLogin, GlogOut, userDetail } = useContext(userContext);
  console.log("Inside Sign In V2", userDetail);
  return (
    <>
      {userDetail.email ? (
        <button onClick={GlogOut}>Sign Out</button>
      ) : (
        <button onClick={GLogin}>Sign In</button>
      )}
      <p>{userDetail.displayName}</p>
      <p>{userDetail.email}</p>
      <img src={userDetail.photoURL} alt="" />{" "}
    </>
  );
};
