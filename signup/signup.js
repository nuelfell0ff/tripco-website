// let allUsers = [];
const allUsers = JSON.parse(localStorage.getItem('Tripco')) || []

const signUp = () => {
  if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || termsCheck.value === false) {
    errorMessage.style.display = 'block'
    errorMessage2.style.display = 'none'
    errorMessage3.style.display = 'none'
  } else {
    errorMessage.style.display = 'none'
    const userInfo = {
      first_name: firstName.value,
      last_name: lastName.value,
      mail: email.value,
      pass: password.value
    }
    let regexString = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let PasswordString = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const confirmEmail = regexString.test(userInfo.mail);
    const confirmPassword = PasswordString.test(userInfo.pass);
    if (confirmEmail) {
      const sameEmail = allUsers.find(user => user.mail === userInfo.mail);
      if (sameEmail) {
        alert('Account already exists')
      } else {
        if (confirmPassword) {
          allUsers.push(userInfo);
          localStorage.setItem('Tripco', JSON.stringify(allUsers));
          console.log(allUsers);
          btn.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span role="status">Loading ...</span>
          `
          setTimeout(() => {
            window.location.href = '../signin/signin.html';
          }, 2000)
        } else {
          errorMessage3.style.display = 'block'
          errorMessage2.style.display = 'none';
          errorMessage.style.display = 'none'
        }
      }
    } else {
      errorMessage2.style.display = 'block';
      errorMessage.style.display = 'none'
      errorMessage3.style.display = 'none'
    }
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
  }
}