const loginFormHandler = async function(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(email);
  console.log(password);

if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
};
  // const response = await fetch('/api/user/login', {
  //   method: 'POST',
  //   body: JSON.stringify({
  // email, password
  //   }),
  //   headers: { 'Content-Type': 'application/json' },
  // });

  // if (response.ok) {
  //   document.location.replace('/dashboard');
  // } else {
  //   alert('Failed to login');
  // }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);