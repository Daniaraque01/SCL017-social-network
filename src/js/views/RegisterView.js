import firebaseFunctions from "../firebase-functions.js";
export default () => {
    const registerView = `
        <div class="new-colors">
        <div class="container">
            <section id="register-content" >
                <form id="register-form">
                    <h1 class="title-form">Register</h1>
                    <input class="input-data" type="text" id="username" placeholder="Username" required>
                    <input class="input-data" type="email" id="register-email" placeholder="Email address" required>
                    <input class="input-data" type="password" id="register-password" placeholder="Create Password" required>
                    <input class="input-data" type="password" id="register-password-confirmed" placeholder="Confirmed Password" required>
                    <button class="action-btn" type="submit" id="register-btn"> REGISTER </button>
                </form>
           
                <div class="line">&nbsp;</div>
                <div class="or">Or</div>
                <div class="line">&nbsp;</div>
                <button class="action-google" type="button" id="loginGoogle"> <span>Login with</span> <img class="img-google" src="./css/img_app/google.png" alt="google"> <span>oogle</span></button>
           
                <h3 class="enter"> ¿Ya tienes cuenta? 
                <a href="#/login" id="link-redirect"> Ingresa aquí </a>
                </h3>
                </div>
            </section>
        </div>
            `;

    const registerElement = document.createElement('section');
    registerElement.innerHTML = registerView;

    const googleButton = registerElement.querySelector('#loginGoogle');
    googleButton.addEventListener('click',() =>{
        firebaseFunctions.googleLogin();
    });
    
    const registerForm = registerElement.querySelector("#register-form");
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userRegistration = {
            username: registerElement.querySelector("#username").value,
            email: registerElement.querySelector("#register-email").value,
            password: registerElement.querySelector("#register-password").value,
            confirmedPassword: registerElement.querySelector("#register-password-confirmed").value
        };

        if (userRegistration.password == userRegistration.confirmedPassword) {
            const email = registerElement.querySelector("#register-email").value;
            const password = registerElement.querySelector("#register-password").value;
            firebaseFunctions.registerAccount(email, password);
            
        } else {
            console.log("try again");
        }

    });


    return registerElement;
}

