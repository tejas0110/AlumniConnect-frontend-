// Password toggle functionality
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    const icon = togglePassword.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
});

// Form submission handling
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const remember = document.querySelector('#remember').checked;
    
    // Simulate login process
    const loginBtn = document.querySelector('.login-btn');
    const btnText = loginBtn.querySelector('span');
    const btnIcon = loginBtn.querySelector('i');
    
    btnText.textContent = 'Signing In...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Simulate successful login
        btnText.textContent = 'Success!';
        btnIcon.className = 'fas fa-check';
        loginBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            // Redirect to dashboard or home
            window.location.href = 'index.html';
        }, 1000);
    }, 2000);
});

// Social login handlers
document.querySelector('.social-btn.google').addEventListener('click', () => {
    alert('Google login integration would be implemented here');
});

document.querySelector('.social-btn.microsoft').addEventListener('click', () => {
    alert('Microsoft login integration would be implemented here');
});

// Input focus animations
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});