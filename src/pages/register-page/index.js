import "./style.css";
export let registerPage = /*html*/ `
    <div id="login-screen">
        <div id="login-form-container">
            <img class="logo" src="../../public/img/logo.svg" alt="logo">
            <h2 class="header">Create new account</h2>
            <div class="error" id="server-error-message"></div>
            
            <div id='form-error' class='form-error'></div>
            <div id='form-success' class='form-success'></div>
            <form id="login-form">
                <div class="form-first-part">
                    <div class="title">First Name</div>
                    <input type="text" name="fname" placeholder="Please enter your first name">                        
                    <div class="error" id="fname-error-message"></div>
                    <div class="title">Last Name</div>
                    <input type="text" name="lname" placeholder="Please enter your last name">
                    <div class="error" id="lname-error-message"></div>
                    <div class="title">Email address</div>
                    <input type="text" name="email" placeholder="Please enter your email">
                    <div class="error" id="email-error-message"></div>
                    <div class="title">Password</div>
                    <input type="password" name="password" placeholder="Please enter your password">
                    <div class="error" id="password-error-message"></div>
                    <div class="title">Confirm Password</div>
                    <input type="password" name="cpassword" placeholder="Confirm your password">
                    <div class="error" id="cpassword-error-message"></div>                             
                    <input type="submit" value="Register">
                </div>                    
            </form>
            <div id="sign-up">
                <p id="login-link">Already have an account? Login here</p>
            </div>
        </div>
    </div>
`;
