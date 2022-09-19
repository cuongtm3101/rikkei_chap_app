import { loginPage } from "../pages/login-page/index";
import { registerPage } from "../pages/register-page/index";
import { resetPasswordPage } from "../pages/reset-password-page/index";
import { chatPage } from "../pages/chat-page/index";
import {
  validateLoginInfo,
  validateRegisterInfo,
  validateResetEmail,
} from "../controller/index";

export let setMessage = (elementId, message = "") => {
  document.getElementById(elementId).innerText = message;
};

export let setActiveScreen = (screenName) => {
  const app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;

          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

          // Làm giống hệt các bước trên với những màn resetpassword và register

          validateLoginInfo(email, password);
        });
      }
      const registerLink = document.getElementById("register-link");
      if (registerLink) {
        registerLink.onclick = function () {
          setActiveScreen("registerPage");
        };
      }
      const resetPasswordLink = document.getElementById("reset-password-link");
      if (resetPasswordLink) {
        resetPasswordLink.addEventListener("click", () => {
          console.log("haha");
          setActiveScreen("resetPasswordPage");
        });
      }
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const registerForm = document.getElementById("login-form");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const firstName = registerForm.fname.value;
          const lastName = registerForm.lname.value;
          const email = registerForm.email.value;
          const password = registerForm.password.value;
          const cpassword = registerForm.cpassword.value;
          validateRegisterInfo(firstName, lastName, email, password, cpassword);
        });
      }
      const loginLink = document.getElementById("login-link");
      if (loginLink) {
        loginLink.addEventListener("click", () => {
          setActiveScreen("loginPage");
        });
      }
      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      const resetPasswordForm = document.getElementById("login-form");
      if (resetPasswordForm) {
        resetPasswordForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = resetPasswordForm.email.value;
          validateResetEmail(email);
        });
      }
      const backLink = document.getElementById("back-link");
      if (backLink) {
        backLink.addEventListener("click", (event) => {
          setActiveScreen("loginPage");
          event.preventDefault();
        });
      }
      break;
    case "chatPage":
      // mount chat screen
      document.getElementById("app").innerHTML = chatPage;

      // add message form listener
      const messageForm = document.getElementById("message-form");
      messageForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newMessage = messageForm.message.value;
        controller.addMessage(newMessage);

        messageForm.message.value = "";
      });

      // add member form listener
      const addMemberForm = document.getElementById("add-member-form");
      addMemberForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const newMemberEmail = addMemberForm.memberEmail.value;
        controller.addMember({
          newMember: newMemberEmail,
        });

        addMemberForm.memberEmail.value = "";
      });

      // create conversation listener
      document
        .getElementById("create-conversation")
        .addEventListener("click", () =>
          view.setActiveScreen("createConversation")
        );

      // remove notification
      document
        .getElementById("message-input")
        .addEventListener("click", () =>
          view.removeNotification(model.activeConversation.id)
        );

      // load conversations
      model.loadConversations();
      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
