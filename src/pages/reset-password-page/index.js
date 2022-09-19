import "./style.css";
export let resetPasswordPage = /*html*/ `
    <div id="login-screen">
        <div id="login-form-container">
            <img class="logo" src="../../public/img/logo.svg" alt="logo">
            <h2 class="header">Reset your password</h2>
            <form id="login-form">
                <div class="form-first-part">                    
                    <div class="title">Email address</div>
                    <input type="text" name="email" placeholder="Please enter your email">
                    <div class="error" id="email-error-message"></div>
                                                 
                    <input type="submit" value="Reset Password">
                </div>                    
            </form>
            <div id="sign-up">
                <p id="back-link">Already have an account? Login here</p>
            </div>
        </div>
    </div>
`;
