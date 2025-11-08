// let allUsers = [];
const allUsers = JSON.parse(localStorage.getItem('Tripco')) || []

const signUp = () => {
  if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '' || termsCheck.value === false) {
    errorMessage.style.display = 'block'
    errorMessage2.style.display = 'none'
  } else {
    errorMessage.style.display = 'none'
    const userInfo = {
      first_name: firstName.value,
      last_name: lastName.value,
      mail: email.value,
      pass: password.value
    }
    let regexString = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const confirmEmail = regexString.test(userInfo.mail);
    if (confirmEmail) {
      const sameEmail = allUsers.find(user => user.mail === userInfo.mail);
      if (sameEmail) {
        alert('Account already exists')
      } else {
        allUsers.push(userInfo);
        localStorage.setItem('Tripco', JSON.stringify(allUsers));
        console.log(allUsers);
        window.location.href = '../signin/signin.html'
      }
    } else {
      errorMessage2.style.display = 'block';
      errorMessage.style.display = 'none'
    }
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
  }
}