const usersContainer = document.getElementById('users');

function createUserCard(user) {
    const card = document.createElement('article');
    card.className = 'user-card';

    card.innerHTML = `
        <h2>${user.name}</h2>
        <p class="user-role">@${user.username}</p>
        <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <address>
            ${user.address.street}, ${user.address.suite}<br>
            ${user.address.city} • ${user.address.zipcode}
        </address>
    `;

    return card;
}

function displayUsers(users) {
    usersContainer.innerHTML = '';

    users.forEach(user => {
        usersContainer.appendChild(createUserCard(user));
    });
}

function showError(message) {
    usersContainer.innerHTML = `<div class="error-box">${message}</div>`;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
    })
    .then(displayUsers)
    .catch(err => {
        console.error('Connection error:', err);
        showError('Failed to load user data. Please try again later.');
    });