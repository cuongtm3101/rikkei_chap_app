import "./style.css";
export let loginPage = /*html*/ `
    <div id="login-screen">
        <div id="login-form-container">
            <img class="logo" src="../../public/img/logo.svg" alt="logo">
            <h2 class="header">Sign in to Rikkei Chat</h2>
            <form id="login-form">
                <div class="form-first-part">
                    <div class="title">Email address</div>
                    <input type="text" name="email" placeholder="Please enter your email">
                    <div class="error" id="email-error-message"></div>
                    <div class="title">Password</div>
                    <input type="password" name="password" placeholder="Please enter your password">
                    <div class="error" id="password-error-message"></div>                        
                    <input type="submit" value="Login">
                </div>                    
            </form>
            <div id="sign-up">
                <p id = 'register-link'>New to Rikkei Chat? Create an account</p>                
                <div id = 'reset-password-link'>Forget your password? Click here</div>
            </div>
        </div>
    </div>
`;
