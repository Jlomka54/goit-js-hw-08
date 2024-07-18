const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const userEmail = form.elements.email.value.trim();
    const userPassword = form.elements.password.value.trim();
    if (userEmail === '' || userPassword === '') {
      return  alert('All form fields must be filled in');
    } 
    const userInfo = {
        email: userEmail,
        password: userPassword
    };
    
console.log(userInfo);
    registerForm.reset();
    
})