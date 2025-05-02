// Simplified authentication system for game pages
// This uses a different approach to avoid conflicts with the page structure

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Auth state observer
    firebase.auth().onAuthStateChanged(function(user) {
        updateGamePageAuthUI(user);
    });
    
    // Add login/logout buttons to navigation
    addGamePageAuthButtons();
});

// Function to update UI based on authentication state
function updateGamePageAuthUI(user) {
    const loginBtn = document.getElementById('game-login-btn');
    const signupBtn = document.getElementById('game-signup-btn');
    const logoutBtn = document.getElementById('game-logout-btn');
    const profileBtn = document.getElementById('game-profile-btn');
    
    if (!loginBtn || !signupBtn || !logoutBtn || !profileBtn) return;
    
    if (user) {
        // User is signed in
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        profileBtn.style.display = 'inline-block';
        
        // Set profile button text to username or email
        const displayName = user.displayName || user.email.split('@')[0];
        profileBtn.textContent = displayName;
    } else {
        // User is signed out
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        profileBtn.style.display = 'none';
    }
}

// Function to add auth buttons to navigation
function addGamePageAuthButtons() {
    const navList = document.querySelector('.nav-list');
    if (!navList) return;
    
    // Check if auth links already exist
    const existingAuthLinks = document.querySelector('.auth-links');
    if (existingAuthLinks) return;
    
    // Create auth links container
    const authLinks = document.createElement('li');
    authLinks.className = 'auth-links';
    
    // Create buttons with links to index page for authentication
    authLinks.innerHTML = `
        <a href="index.html#login" id="game-login-btn" class="nav-link">Přihlásit se</a>
        <a href="index.html#signup" id="game-signup-btn" class="nav-link">Registrovat</a>
        <a href="index.html#profile" id="game-profile-btn" class="nav-link" style="display: none;"></a>
        <a href="#" id="game-logout-btn" class="nav-link" style="display: none;">Odhlásit se</a>
    `;
    
    // Add to navigation
    navList.appendChild(authLinks);
    
    // Add logout functionality
    const logoutBtn = document.getElementById('game-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            firebase.auth().signOut().then(() => {
                // Show notification
                showGameNotification('Odhlášení proběhlo úspěšně', 'success');
            }).catch((error) => {
                showGameNotification('Chyba při odhlášení', 'error');
            });
        });
    }
}

// Simple notification function for game pages
function showGameNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'game-notification ' + type;
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = 'white';
    notification.style.fontWeight = 'bold';
    notification.style.zIndex = '10000';
    
    if (type === 'success') {
        notification.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#F44336';
    }
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}
