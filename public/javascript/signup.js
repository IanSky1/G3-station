async function signupFormHandler(event) {
    event.preventDefault();

    const newUser = document.querySelector('#username-signup').value.trim();
    const newEmail = document.querySelector('#email-signup').value.trim();
    const newPassword = document.querySelector('#password-signup').value.trim();

    if (newUser && newEmail && newPassword) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                newUser,
                newEmail,
                newPassword
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('successful!');


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form')
document.addEventListener('submit', signupFormHandler);
