// frontend/app.ts
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const messageElement = document.getElementById('message') as HTMLElement;

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    messageElement.textContent = data.message;
});
