const passwordInput = document.getElementById('password');
const passwordStrengthMeter = document.getElementById('passwordStrengthMeter');

passwordInput.addEventListener('input', () => {
  const strength = passwordStrength(passwordInput.value);
  passwordStrengthMeter.innerHTML = '';

  for (let i = 0; i < strength; i++) {
    const meter = document.createElement('div');
    meter.classList.add('strength' + i);
    passwordStrengthMeter.appendChild(meter);
  }
});

function passwordStrength(password) {
  const strength = {
    score: 0,
    valid: false
  };

  if (password.length < 8) {
    return strength;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (hasUpperCase) {
    strength.score++;
  }
  if (hasLowerCase) {
    strength.score++;
  }
  if (hasNumber) {
    strength.score++;
  }
  if (hasSpecial) {
    strength.score++;
  }

  if (strength.score >= 3) {
    strength.valid = true;
  }

  return strength;
}