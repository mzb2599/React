import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to ChatsApp</h2>

        <div
          className="login-button google"
          onClick={() =>
            auth
              .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
              .then(
                (response) => console.log(response)
                //   //history.push('/chats')
              )
              .catch((e) => {
                console.log("error", e);
              })
          }
        >
          <GoogleOutlined />
          Login with Google
        </div>

        <br />
        <br />

        <div
          className="login-button facebook"
          onClick={
            () =>
              auth
                .signInWithRedirect(new firebase.auth.FacebookAuthProvider())
                .then(
                  (response) => console.log(response)
                  //   //history.push('/chats')
                )
                .catch((e) => {
                  console.log("error", e);
                })
            //auth.signInWithRedirect(auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined />
          Login with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
