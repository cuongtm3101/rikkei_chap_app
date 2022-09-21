import { loginPage } from "../pages/login-page/index";
import { registerPage } from "../pages/register-page/index";
import { resetPasswordPage } from "../pages/reset-password-page/index";
import { chatPage } from "../pages/chat-page/index";
import {
  validateLoginInfo,
  validateRegisterInfo,
  validateResetEmail,
  validateChatForm,
} from "../controller/index";

import { authUser } from "../model/index";

import swal from "sweetalert";

export let alertSuccess = (message) => {
  return swal({
    title: "Thành công",
    text: message,
    icon: "success",
    button: "Ok",
  });
};

export let loading = (state) => {
  let loading = document.querySelector(".loading");
  if (state) {
    loading.classList.add("showLoading");
  } else {
    loading.classList.remove("showLoading");
  }
};

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

      let chatForm = document.getElementById("message-form");
      // chatForm.onsubmit = function() {
      //   // sự kiện được trigger
      // }

      chatForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // let message = {
        //   user: authUser.email,
        //   content: chatForm.message.value,
        //   createdAt: new Date().toISOString(),
        // };
        // console.log(authUser.email);

        // addMessage(message);
        validateChatForm(chatForm.message.value);

        console.log(chatForm.message.value);
        chatForm.message.value = "";
      });
      break;
  }
};

export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
    console.log("Hllo world");
  }
};

export let addMessage = (messageObject) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-item");

  const message = document.createElement("div");
  message.classList.add("message-content");
  message.innerText = messageObject.content;

  // `<div class="message-item my-message">
  //   <div class="message-content"></div>
  // </div>`
  // `<div class="message-item other-message">
  //   <div class="sender">Tranminhcuong95@gmail.com</div>
  //   <div class="message-content"></div>
  // </div>`;

  if (messageObject.user === authUser.email) {
    messageContainer.classList.add("my-message");
  } else {
    messageContainer.classList.add("other-message");
    const sender = document.createElement("div");
    sender.classList.add("sender");
    sender.innerText = messageObject.user;
    messageContainer.appendChild(sender);
  }

  messageContainer.appendChild(message);
  document.getElementById("message-container").appendChild(messageContainer);
};

// Git status (Kiẻm tra trạng thái của file)
// (Unstage và Staging)

// Git stage . (Đẩy file vừa được chỉnh sửa vào trạng thái staging)

// Git commit -m "Message"
// Đẩy file vào trạng thái commit trước khi được push lên remote repo

// Git push origin [tên nhánh](master)
// Đẩy file lên remote repo tại nhánh master
