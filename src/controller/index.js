import { renderErrorMessage } from "../view/index";
import {
  createNewUser,
  loginUser,
  resetPassword,
  authUser,
  saveMessage,
} from "../model/index";
export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  // check database
  if (email && password) {
    loginUser(email, password);
  }
};
export let validateRegisterInfo = (
  firstName,
  lastName,
  email,
  password,
  cpassword
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!firstName) {
    renderErrorMessage("fname-error-message", "Please enter your first name");
  } else {
    renderErrorMessage("fname-error-message", "");
  }
  if (!lastName) {
    renderErrorMessage("lname-error-message", "Please enter your last name");
  } else {
    renderErrorMessage("lname-error-message", "");
  }

  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (!password) {
    renderErrorMessage("password-error-message", "Please enter your password");
  } else {
    renderErrorMessage("password-error-message", "");
  }
  if (!cpassword) {
    renderErrorMessage("cpassword-error-message", "Please enter your password");
  } else if (cpassword !== password) {
    renderErrorMessage("cpassword-error-message", "Password is not matched");
  } else {
    renderErrorMessage("cpassword-error-message", "");
  }

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    cpassword &&
    cpassword === password
  ) {
    createNewUser(firstName, lastName, email, password);
  }
};

export let validateResetEmail = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-error-message", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-error-message", "Invalid email");
  } else {
    renderErrorMessage("email-error-message", "");
  }

  if (email) {
    resetPassword(email);
  }
};

export let validateChatForm = (content) => {
  if (content) {
    let message = {
      username: authUser.email,
      content: content,
      createdAt: new Date().toISOString(),
    };

    saveMessage(message);
  }
};
