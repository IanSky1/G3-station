const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const userInput = document.querySelector('#username-input-login');
    const passwordInput = document.querySelector('#password-input-login');
  
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username: userInput.value,
        password: passwordInput.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to login');
    }
  };
  
 
    document.querySelector('.login-form')
    document.addEventListener('submit', loginFormHandler);