import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { renderErrorMessage, setActiveScreen } from "../view/index";

export let createNewUser = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // Hiển thị ra là đăng ký thành công
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};

// export let loginUser = (email, password) => {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       if (!user.emailVerified) {
//         console.log("verified email needed");
//       }
//       setActiveScreen("chatPage");

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };
