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

// Form validation and submission
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        graduationYear: document.querySelector('#graduationYear').value,
        password: document.querySelector('#password').value,
        confirmPassword: document.querySelector('#confirmPassword').value,
        terms: document.querySelector('#terms').checked
    };
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Validate terms acceptance
    if (!formData.terms) {
        alert('Please accept the Terms & Conditions');
        return;
    }
    
    // Simulate registration process
    const registerBtn = document.querySelector('.login-btn');
    const btnText = registerBtn.querySelector('span');
    const btnIcon = registerBtn.querySelector('i');
    
    btnText.textContent = 'Creating Account...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    registerBtn.disabled = true;
    
    setTimeout(() => {
        btnText.textContent = 'Account Created!';
        btnIcon.className = 'fas fa-check';
        registerBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }, 2000);
});

// Social registration handlers
document.querySelector('.social-btn.google').addEventListener('click', () => {
    alert('Google registration integration would be implemented here');
});

document.querySelector('.social-btn.microsoft').addEventListener('click', () => {
    alert('Microsoft registration integration would be implemented here');
});

// Input focus animations
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Generate graduation year options dynamically
const graduationYearSelect = document.querySelector('#graduationYear');
const currentYear = new Date().getFullYear();
for (let year = currentYear; year >= currentYear - 50; year--) {
    if (year <= currentYear - 5) continue; // Skip first 5 years as they're already added
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    graduationYearSelect.appendChild(option);
}

// Loading animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});