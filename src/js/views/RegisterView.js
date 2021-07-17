import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("REGISTER");
    }
    async getHtml() {
        return `
        <div class="new-colors">
        <section id="register-content">
            <form  id="register-form">
                <h1 class="register">Register</h1>
                <input class="inputs" type="text" id="username" placeholder="Username" required>
                <input class="inputs" type="email" id="register-email" placeholder="Email address" required>
                <input class="inputs" type="password" id="register-password" placeholder="create Password" required>
                <input class="inputs" type="password" id="register-password-confirmed" placeholder="Confirmed Password" required>
            </form>
            <button class="register-data" type="submit" id="register-btn"> REGISTER </button>
            
                <div class="linea">&nbsp;</div>
                <div class="or">Or</div>
                <div class="linea">&nbsp;</div>
                
        
            <button class="login-google" href="#" type="button" id="loginGoogle"> <span>Login with</span> <img class="img-google" src="./css/img_app/google.png" alt="google"> <span>oogle</span></button>
           
            <h3 class="enter"> ¿Ya tienes cuenta? ingresa aquí</h3>
    
           </section>
           </div>
        `;
    }
}