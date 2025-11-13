const fetched = JSON.parse(localStorage.getItem('Tripco'));
console.log(fetched);

const signinPage = () => {
  if (email.value.trim() === '' || password.value.trim() === '' || termsCheck.value === false) {
    errorMessage.style.display = 'block'
    errorMessage2.style.display = 'none'
    errorMessage3.style.display = 'none'
    console.log('input all fields!')
  } else {
    errorMessage.style.display = 'none'
    const signinDetails = {
      mail: email.value,
      pass: password.value
    }
    const found = fetched.find(user => user.mail === signinDetails.mail);
    if (found) {
      const newFound = fetched.find(user => user.mail === signinDetails.mail && user.pass === signinDetails.pass);
      if (newFound) {
        console.log('go to dashboard')
        localStorage.setItem('user', JSON.stringify(signinDetails));
        console.log(signinDetails);
        btn.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span role="status">Loading ...</span>
          `
          setTimeout(() => {
            window.location.href = '../index.html';
          }, 2000)
      } else {
        errorMessage3.style.display = 'block'
        errorMessage2.style.display = 'none'
        errorMessage.style.display = 'none'
      }
    } else {
      errorMessage2.style.display = 'block'
      errorMessage.style.display = 'none'
      errorMessage3.style.display = 'none'
    }
  }
}