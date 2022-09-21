import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  renderErrorMessage,
  setActiveScreen,
  alertSuccess,
  loading,
} from "../view/index";

import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../index";

export let authUser = {};

export let createNewUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  loading(true);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      renderErrorMessage("server-error-message", "");
      return updateProfile(auth.currentUser, {
        displayName: firstName + " " + lastName,
      });
    })
    .then(() => {
      // update thành công tên display name
      return sendEmailVerification(auth.currentUser);
    })
    .then(() => {
      loading(false);
      return alertSuccess("Đăng ký thành công");
    })
    .then(() => {
      setActiveScreen("loginPage");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let loginUser = (email, password) => {
  const auth = getAuth();
  loading(true);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      authUser.email = user.email;
      authUser.displayName = user.displayName;

      loading(false);
      if (!user.emailVerified) {
        renderErrorMessage(
          "server-error-message",
          "Please verify your email address"
        );
      } else {
        setActiveScreen("chatPage");
      }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      loading(false);
    });
};

export let resetPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      return alertSuccess("Gửi mail thành công");
    })
    .then(() => {
      renderErrorMessage("server-error-message", "");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let saveMessage = (message) => {
  const conversationRef = doc(db, "conversations", "hNaCDCqzvD2EjCR1jyEb");

  console.log(message);
  updateDoc(conversationRef, {
    messages: arrayUnion(message),
  })
    .then(() => {
      console.log("Thêm tin nhắn mới thành công");
    })
    .catch((err) => {
      console.log(err);
    });
};
