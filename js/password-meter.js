let password = document.querySelector("#password-field");
let strengthContainer = document.querySelector(".strength-meter");
let strengthBar = document.querySelector("#strength-bar");
let strengthText = document.querySelector(".strength-txt");

password.addEventListener("focus", function(){
  strengthContainer.style.display = "block";
});

password.addEventListener("blur", function(){
  strengthContainer.style.display = "none";
});

function setStrength(value, color, text){
  strengthBar.style.width = value + "%";
  strengthBar.style.backgroundColor = color;
  strengthText.innerHTML = text;
  strengthText.style.color = color;
}

function clearStrength(){
  strengthBar.style.width = 0;
  strengthBar.style.backgroundColor = "";
  strengthText.innerHTML = "";
}

password.addEventListener("keyup", checkPasswordStrength);

function checkPasswordStrength(){
  let strength = 0;
  if (password.value == ""){
    clearStrength();
    return false;
  }

  if (password.value.length > 36){
    setStrength(0, "red", "password greater than 36 characters");
    return false;
  }

  if (password.value.length < 7){
    setStrength(20, "red", "password is too short");
    return false;
  } else {
    let lowerCase = password.value.match(/[a-z]/);
    let upperCase = password.value.match(/[A-Z]/);
    let numbers = password.value.match(/[0-9]/);
    let specialCharacters = password.value.match(/[\!\~\@\&\#\$\%\^\&\*\(\)\{\}\?\-\_\+\=]/);

    // weak
    if (lowerCase || upperCase || numbers || specialCharacters){
      strength = 40;
      setStrength(strength, "red", "Weak");
    }

    // medium
    if( 
			(lowerCase && upperCase) || (lowerCase && numbers) || (lowerCase && specialCharacters) ||
			(upperCase && numbers) || (upperCase && specialCharacters) || (numbers && specialCharacters)
		  )
		{
			strength = 60;
			setStrength(strength, "orange", "Medium");
		}

    // strong
    if( (lowerCase && upperCase && numbers) || (lowerCase && upperCase && specialCharacters) ||
		    (lowerCase && numbers && specialCharacters) ||  (upperCase && numbers && specialCharacters)
		  )
		{
			strength = 80;
			setStrength(strength, "#088f08", "Strong");
		}

    // very strong
    if( lowerCase && upperCase && numbers && specialCharacters ) 
      {
        strength = 100;
        setStrength(strength, "green", "Very Strong");	// very strong
      }
  }
}