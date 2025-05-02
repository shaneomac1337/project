// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Auth state observer
    firebase.auth().onAuthStateChanged(function(user) {
        updateUIForAuthState(user);
    });
    
    // Add login/logout buttons to navigation
    addAuthButtonsToNav();
    
    // Add event listeners for auth buttons
    setupAuthEventListeners();
    
    // Check for hash in URL to determine if we need to show a modal
    const hash = window.location.hash;
    if (hash) {
        // Remove the # symbol
        const action = hash.substring(1);
        
        // Handle different actions
        switch(action) {
            case 'login':
                showLoginModal();
                break;
            case 'signup':
                showSignupModal();
                break;
            case 'profile':
                showProfileModal();
                break;
        }
        
        // Clear the hash after processing
        if (history.pushState) {
            history.pushState(null, null, window.location.pathname);
        } else {
            window.location.hash = '';
        }
    }
});

// Function to update UI based on authentication state
function updateUIForAuthState(user) {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const profileBtn = document.getElementById('profile-btn');
    
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
        
        console.log("User logged in:", displayName);
    } else {
        // User is signed out
        loginBtn.style.display = 'inline-block';
        signupBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        profileBtn.style.display = 'none';
    }
}

// Function to add auth buttons to navigation
function addAuthButtonsToNav() {
    const navList = document.querySelector('.nav-list');
    if (!navList) return;
    
    // Check if auth links already exist
    const existingAuthLinks = document.querySelector('.auth-links');
    if (existingAuthLinks) return;
    
    // Create auth links container
    const authLinks = document.createElement('li');
    authLinks.className = 'auth-links';
    
    // Create buttons
    authLinks.innerHTML = `
        <a href="#" id="login-btn" class="nav-link">Přihlásit se</a>
        <a href="#" id="signup-btn" class="nav-link">Registrovat</a>
        <a href="#" id="profile-btn" class="nav-link" style="display: none;"></a>
        <a href="#" id="logout-btn" class="nav-link" style="display: none;">Odhlásit se</a>
    `;
    
    // Add to navigation
    navList.appendChild(authLinks);
}

// Function to set up event listeners for auth buttons
function setupAuthEventListeners() {
    // Add event listeners for direct clicks on buttons
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const profileBtn = document.getElementById('profile-btn');
    
    if (loginBtn) {
        loginBtn.onclick = function(e) {
            e.preventDefault();
            showLoginModal();
        };
    }
    
    if (signupBtn) {
        signupBtn.onclick = function(e) {
            e.preventDefault();
            showSignupModal();
        };
    }
    
    if (logoutBtn) {
        logoutBtn.onclick = function(e) {
            e.preventDefault();
            firebase.auth().signOut().then(() => {
                showNotification('Odhlášení proběhlo úspěšně', 'success');
            }).catch((error) => {
                showNotification('Chyba při odhlášení', 'error');
            });
        };
    }
    
    if (profileBtn) {
        profileBtn.onclick = function(e) {
            e.preventDefault();
            showProfileModal();
        };
    }
}

// Show login modal function
function showLoginModal() {
    // First, remove any existing modals
    const existingModal = document.getElementById('auth-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create a container for the modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'auth-modal';
    modalContainer.className = 'bio-modal active';
    
    // Create the modal content
    modalContainer.innerHTML = `
        <div class="bio-backdrop"></div>
        <div class="bio-content auth-content">
            <button class="close-bio" id="close-auth-modal">&times;</button>
            <div class="bio-header">
                <div class="bio-title">
                    <h2>Přihlášení</h2>
                </div>
            </div>
            <form id="login-form" class="auth-form">
                <div class="form-group">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" required class="auth-input">
                </div>
                <div class="form-group">
                    <label for="login-password">Heslo</label>
                    <input type="password" id="login-password" required class="auth-input">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Přihlásit se</button>
                </div>
                <div class="auth-links-text">
                    <p>Nemáte účet? <a href="#" id="switch-to-signup">Registrujte se</a></p>
                    <p><a href="#" id="forgot-password">Zapomenuté heslo?</a></p>
                </div>
            </form>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modalContainer);
    
    // Add event listeners directly without setTimeout
    const closeBtn = document.getElementById('close-auth-modal');
    if (closeBtn) {
        closeBtn.onclick = closeAuthModal;
    }
    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.onsubmit = handleLogin;
    }
    
    const switchToSignup = document.getElementById('switch-to-signup');
    if (switchToSignup) {
        switchToSignup.onclick = function(e) {
            e.preventDefault();
            closeAuthModal();
            showSignupModal();
        };
    }
    
    const forgotPassword = document.getElementById('forgot-password');
    if (forgotPassword) {
        forgotPassword.onclick = function(e) {
            e.preventDefault();
            showForgotPasswordModal();
        };
    }
    
    // Add click handler to backdrop for closing
    const backdrop = document.querySelector('.bio-backdrop');
    if (backdrop) {
        backdrop.onclick = closeAuthModal;
    }
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Show signup modal function
function showSignupModal() {
    // First, remove any existing modals
    const existingModal = document.getElementById('auth-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create a container for the modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'auth-modal';
    modalContainer.className = 'bio-modal active';
    
    // Create the modal content
    modalContainer.innerHTML = `
        <div class="bio-backdrop"></div>
        <div class="bio-content auth-content">
            <button class="close-bio" id="close-auth-modal">&times;</button>
            <div class="bio-header">
                <div class="bio-title">
                    <h2>Registrace</h2>
                </div>
            </div>
            <form id="signup-form" class="auth-form">
                <div class="form-group">
                    <label for="signup-email">Email</label>
                    <input type="email" id="signup-email" required class="auth-input">
                </div>
                <div class="form-group">
                    <label for="signup-password">Heslo</label>
                    <input type="password" id="signup-password" required class="auth-input">
                </div>
                <div class="form-group">
                    <label for="signup-confirm-password">Potvrdit heslo</label>
                    <input type="password" id="signup-confirm-password" required class="auth-input">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Registrovat</button>
                </div>
                <div class="auth-links-text">
                    <p>Již máte účet? <a href="#" id="switch-to-login">Přihlásit se</a></p>
                </div>
            </form>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modalContainer);
    
    // Add event listeners directly without setTimeout
    const closeBtn = document.getElementById('close-auth-modal');
    if (closeBtn) {
        closeBtn.onclick = closeAuthModal;
    }
    
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.onsubmit = handleSignup;
    }
    
    const switchToLogin = document.getElementById('switch-to-login');
    if (switchToLogin) {
        switchToLogin.onclick = function(e) {
            e.preventDefault();
            closeAuthModal();
            showLoginModal();
        };
    }
    
    // Add click handler to backdrop for closing
    const backdrop = document.querySelector('.bio-backdrop');
    if (backdrop) {
        backdrop.onclick = closeAuthModal;
    }
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Show forgot password modal function
function showForgotPasswordModal() {
    // First, remove any existing modals
    const existingModal = document.getElementById('auth-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create a container for the modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'auth-modal';
    modalContainer.className = 'bio-modal active';
    
    // Create the modal content
    modalContainer.innerHTML = `
        <div class="bio-backdrop"></div>
        <div class="bio-content auth-content">
            <button class="close-bio" id="close-auth-modal">&times;</button>
            <div class="bio-header">
                <div class="bio-title">
                    <h2>Obnovení hesla</h2>
                </div>
            </div>
            <form id="forgot-password-form" class="auth-form">
                <div class="form-group">
                    <label for="forgot-email">Email</label>
                    <input type="email" id="forgot-email" required class="auth-input">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Odeslat email pro obnovení</button>
                </div>
                <div class="auth-links-text">
                    <p><a href="#" id="back-to-login">Zpět na přihlášení</a></p>
                </div>
            </form>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modalContainer);
    
    // Add event listeners directly without setTimeout
    const closeBtn = document.getElementById('close-auth-modal');
    if (closeBtn) {
        closeBtn.onclick = closeAuthModal;
    }
    
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.onsubmit = handleForgotPassword;
    }
    
    const backToLogin = document.getElementById('back-to-login');
    if (backToLogin) {
        backToLogin.onclick = function(e) {
            e.preventDefault();
            closeAuthModal();
            showLoginModal();
        };
    }
    
    // Add click handler to backdrop for closing
    const backdrop = document.querySelector('.bio-backdrop');
    if (backdrop) {
        backdrop.onclick = closeAuthModal;
    }
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Show profile modal
function showProfileModal() {
    const user = firebase.auth().currentUser;
    if (!user) {
        console.error('No user is signed in');
        return;
    }
    
    console.log('Showing profile modal for user:', user.email);
    
    // Remove any existing modals first
    closeAuthModal();
    
    // Create modal HTML
    const modalHTML = `
        <div id="auth-modal" class="bio-modal active">
            <div class="bio-backdrop"></div>
            <div class="bio-content auth-content">
                <button class="close-bio" id="close-auth-modal">&times;</button>
                <div class="bio-header">
                    <div class="bio-avatar">
                        <img src="${user.photoURL || 'img/member-placeholder.jpg'}" alt="${user.displayName || 'Uživatel'}">
                    </div>
                    <div class="bio-title">
                        <h2>${user.displayName || user.email.split('@')[0]}</h2>
                        <h3>${user.email}</h3>
                    </div>
                </div>
                <div class="profile-actions">
                    <button id="update-profile-btn" class="btn btn-primary">Upravit profil</button>
                    <button id="change-password-btn" class="btn">Změnit heslo</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners - use setTimeout to ensure DOM is ready
    setTimeout(() => {
        const closeBtn = document.getElementById('close-auth-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeAuthModal);
        } else {
            console.error('Close button not found in profile modal');
        }
        
        const updateProfileBtn = document.getElementById('update-profile-btn');
        if (updateProfileBtn) {
            updateProfileBtn.addEventListener('click', function() {
                closeAuthModal();
                showUpdateProfileModal();
            });
        } else {
            console.error('Update profile button not found');
        }
        
        const changePasswordBtn = document.getElementById('change-password-btn');
        if (changePasswordBtn) {
            changePasswordBtn.addEventListener('click', function() {
                closeAuthModal();
                showChangePasswordModal();
            });
        } else {
            console.error('Change password button not found');
        }
        
        // Add click event to backdrop for closing
        const backdrop = document.querySelector('.bio-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', closeAuthModal);
        } else {
            console.error('Backdrop not found in profile modal');
        }
    }, 10); // Slightly longer timeout to ensure DOM is ready
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Show update profile modal
function showUpdateProfileModal() {
    const user = firebase.auth().currentUser;
    if (!user) {
        console.error('No user is signed in');
        return;
    }
    
    console.log('Showing update profile modal for user:', user.email);
    
    // Remove any existing modals first
    closeAuthModal();
    
    // Create a new div for the modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'auth-modal';
    modalContainer.className = 'bio-modal';
    
    // Set the modal HTML
    modalContainer.innerHTML = `
        <div class="bio-backdrop"></div>
        <div class="bio-content auth-content">
            <button class="close-bio" id="close-auth-modal">&times;</button>
            <div class="bio-header">
                <div class="bio-title">
                    <h2>Upravit profil</h2>
                </div>
            </div>
            <form id="update-profile-form" class="auth-form">
                <div class="form-group">
                    <label for="update-username">Uživatelské jméno</label>
                    <input type="text" id="update-username" value="${user.displayName || ''}" class="auth-input">
                </div>
                <div class="form-group">
                    <label for="update-email">Email</label>
                    <input type="email" id="update-email" value="${user.email}" disabled class="auth-input">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Uložit změny</button>
                </div>
            </form>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modalContainer);
    
    // Set up close button event handler directly
    const closeBtn = modalContainer.querySelector('#close-auth-modal');
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeAuthModal();
        };
    } else {
        console.error('Close button not found in update profile modal');
    }
    
    // Set up form submission handler
    const updateProfileForm = modalContainer.querySelector('#update-profile-form');
    if (updateProfileForm) {
        updateProfileForm.onsubmit = function(e) {
            handleUpdateProfile(e);
        };
    } else {
        console.error('Update profile form not found');
    }
    
    // Set up backdrop click handler
    const backdrop = modalContainer.querySelector('.bio-backdrop');
    if (backdrop) {
        backdrop.onclick = function() {
            closeAuthModal();
        };
    } else {
        console.error('Backdrop not found in update profile modal');
    }
    
    // Make the modal visible after a short delay to ensure proper rendering
    setTimeout(() => {
        modalContainer.classList.add('active');
    }, 10);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Show change password modal
function showChangePasswordModal() {
    const user = firebase.auth().currentUser;
    if (!user) {
        console.error('No user is signed in');
        return;
    }
    
    console.log('Showing change password modal for user:', user.email);
    
    // Remove any existing modals first
    closeAuthModal();
    
    // Create a new div for the modal
    const modalContainer = document.createElement('div');
    modalContainer.id = 'auth-modal';
    modalContainer.className = 'bio-modal';
    
    // Set the modal HTML
    modalContainer.innerHTML = `
        <div class="bio-backdrop"></div>
        <div class="bio-content auth-content">
            <button class="close-bio" id="close-auth-modal">&times;</button>
            <div class="bio-header">
                <div class="bio-title">
                    <h2>Změnit heslo</h2>
                </div>
            </div>
            <form id="change-password-form" class="auth-form">
                <div class="form-group">
                    <label for="current-password">Současné heslo</label>
                    <input type="password" id="current-password" required class="auth-input">
                </div>
                <div class="form-group">
                    <label for="new-password">Nové heslo</label>
                    <input type="password" id="new-password" required class="auth-input">
                </div>
                <div class="form-group">
                    <label for="confirm-new-password">Potvrzení nového hesla</label>
                    <input type="password" id="confirm-new-password" required class="auth-input">
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Změnit heslo</button>
                </div>
            </form>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modalContainer);
    
    // Set up close button event handler directly
    const closeBtn = modalContainer.querySelector('#close-auth-modal');
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeAuthModal();
        };
    } else {
        console.error('Close button not found in change password modal');
    }
    
    // Set up form submission handler
    const changePasswordForm = modalContainer.querySelector('#change-password-form');
    if (changePasswordForm) {
        changePasswordForm.onsubmit = function(e) {
            handleChangePassword(e);
        };
    } else {
        console.error('Change password form not found');
    }
    
    // Set up backdrop click handler
    const backdrop = modalContainer.querySelector('.bio-backdrop');
    if (backdrop) {
        backdrop.onclick = function() {
            closeAuthModal();
        };
    } else {
        console.error('Backdrop not found in change password modal');
    }
    
    // Make the modal visible after a short delay to ensure proper rendering
    setTimeout(() => {
        modalContainer.classList.add('active');
    }, 10);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Přihlašování...';
    submitBtn.disabled = true;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            closeAuthModal();
            showNotification('Přihlášení proběhlo úspěšně', 'success');
        })
        .catch((error) => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            let errorMessage = 'Přihlášení se nezdařilo';
            
            // Customize error message based on error code
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                errorMessage = 'Nesprávný email nebo heslo';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Příliš mnoho pokusů o přihlášení. Zkuste to později';
            }
            
            showNotification(errorMessage, 'error');
        });
}

// Handle signup form submission
function handleSignup(e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        showNotification('Hesla se neshodují', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Registrace...';
    submitBtn.disabled = true;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            
            // Update profile with username
            return user.updateProfile({
                displayName: username
            });
        })
        .then(() => {
            closeAuthModal();
            showNotification('Registrace proběhla úspěšně', 'success');
        })
        .catch((error) => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            let errorMessage = 'Registrace se nezdařila';
            
            // Customize error message based on error code
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Email je již používán jiným účtem';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Heslo je příliš slabé';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Neplatný email';
            }
            
            showNotification(errorMessage, 'error');
        });
}

// Handle forgot password form submission
function handleForgotPassword(e) {
    e.preventDefault();
    
    const email = document.getElementById('reset-email').value;
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Odesílání...';
    submitBtn.disabled = true;
    
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            closeAuthModal();
            showNotification('Odkaz pro obnovení hesla byl odeslán na váš email', 'success');
        })
        .catch((error) => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            let errorMessage = 'Odeslání odkazu se nezdařilo';
            
            // Customize error message based on error code
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'Uživatel s tímto emailem nebyl nalezen';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Neplatný email';
            }
            
            showNotification(errorMessage, 'error');
        });
}

// Handle update profile form submission
function handleUpdateProfile(e) {
    e.preventDefault();
    
    const user = firebase.auth().currentUser;
    if (!user) return;
    
    const username = document.getElementById('update-username').value;
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Ukládání...';
    submitBtn.disabled = true;
    
    user.updateProfile({
        displayName: username
    })
    .then(() => {
        closeAuthModal();
        showNotification('Profil byl úspěšně aktualizován', 'success');
        
        // Update UI to reflect changes
        const profileBtn = document.getElementById('profile-btn');
        if (profileBtn) {
            profileBtn.textContent = username || user.email.split('@')[0];
        }
    })
    .catch((error) => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showNotification('Aktualizace profilu se nezdařila', 'error');
    });
}

// Handle change password form submission
function handleChangePassword(e) {
    e.preventDefault();
    
    const user = firebase.auth().currentUser;
    if (!user) return;
    
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;
    
    // Check if new passwords match
    if (newPassword !== confirmNewPassword) {
        showNotification('Nová hesla se neshodují', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Změna hesla...';
    submitBtn.disabled = true;
    
    // Get credentials for reauthentication
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword
    );
    
    // Reauthenticate user
    user.reauthenticateWithCredential(credential)
        .then(() => {
            // User reauthenticated, now change password
            return user.updatePassword(newPassword);
        })
        .then(() => {
            closeAuthModal();
            showNotification('Heslo bylo úspěšně změněno', 'success');
        })
        .catch((error) => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            let errorMessage = 'Změna hesla se nezdařila';
            
            // Customize error message based on error code
            if (error.code === 'auth/wrong-password') {
                errorMessage = 'Současné heslo je nesprávné';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Nové heslo je příliš slabé';
            }
            
            showNotification(errorMessage, 'error');
        });
}

// Close auth modal
function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        console.log('Closing auth modal');
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    } else {
        // No modal to close, just reset body overflow
        document.body.style.overflow = '';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Check if notification container exists, if not create it
    let notificationContainer = document.getElementById('notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Add close event
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.classList.add('hiding');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.add('hiding');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
}
