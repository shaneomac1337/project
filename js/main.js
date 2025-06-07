// Wait for DOM content to load
// ======================================
    // ENHANCED PARTICLE SYSTEM AND VISUAL EFFECTS
    // ======================================
    
    // Create enhanced animated particles with different types
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 30; // Increased for more spectacular effect
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size between 1-10px with variety
            const size = Math.random() * 9 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random horizontal position
            particle.style.left = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 25 + 's';
            
            // Random animation duration with more variety
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            
            // Add random opacity variation
            particle.style.opacity = Math.random() * 0.15 + 0.05;
            
            // Add different particle types
            if (i % 5 === 0) {
                particle.style.borderRadius = '0';
                particle.style.transform = 'rotate(45deg)';
            } else if (i % 7 === 0) {
                particle.style.borderRadius = '30%';
            }
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Create enhanced floating gaming elements
    function createFloatingElements() {
        const floatingContainer = document.getElementById('floating-elements');
        if (!floatingContainer) return;
        
        const gamingIcons = [
            '🎮', '🕹️', '⚔️', '🛡️', '🏆', '💎', '⭐', '🔥',
            '💥', '⚡', '🎯', '🎲', '👾', '🚀', '💀', '🎪',
            '🎨', '🎭', '🎪', '🎯', '🎲', '🎰', '🎳', '🎸'
        ];
        
        const elementCount = 15; // Increased for more visual impact
        
        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.textContent = gamingIcons[Math.floor(Math.random() * gamingIcons.length)];
            
            // Random vertical position
            element.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            element.style.animationDelay = Math.random() * 50 + 's';
            
            // Random animation duration with more variety
            element.style.animationDuration = (Math.random() * 25 + 25) + 's';
            
            // Add size variation
            const fontSize = Math.random() * 1.5 + 1.5;
            element.style.fontSize = fontSize + 'rem';
            
            // Add random rotation
            element.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            floatingContainer.appendChild(element);
        }
    }
    
    // Create floating orbs for hero section
    function createHeroOrbs() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        // Create orbs container
        const orbsContainer = document.createElement('div');
        orbsContainer.className = 'hero-orbs';
        
        // Create 3 floating orbs
        for (let i = 0; i < 3; i++) {
            const orb = document.createElement('div');
            orb.className = 'hero-orb';
            orbsContainer.appendChild(orb);
        }
        
        hero.appendChild(orbsContainer);
    }
// Create subtle particles for the YouTube section
    function createVideoSectionParticles() {
        const youtubeSection = document.querySelector('.youtube-section');
        if (!youtubeSection) return;

        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'youtube-particle';
            particle.style.width = Math.random() * 3 + 1 + 'px';
            particle.style.height = Math.random() * 3 + 1 + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
            youtubeSection.appendChild(particle);
        }
    }
    
    // Initialize enhanced visual effects
    createParticles();
    createFloatingElements();
    createHeroOrbs();
    
    // Enhanced parallax effect for hero section
    function addParallaxEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
            
            // Add dynamic opacity to hero content
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                const opacity = Math.max(0, 1 - scrolled / window.innerHeight);
                heroContent.style.opacity = opacity;
            }
        });
    }
    
    addParallaxEffect(); // Re-enabled with improvements
    
    // Mouse trail effect removed for better user experience
    
    // Enhanced scroll-triggered animations with spectacular effects
    function initScrollAnimations() {
        const sections = document.querySelectorAll('.section');
        const animatedElements = document.querySelectorAll('.member-card, .game-card');
        
        // Set initial state for all animated elements
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(60px) scale(0.8)';
        });
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add spectacular staggered animations to child elements
                    const memberCards = entry.target.querySelectorAll('.member-card');
                    const gameCards = entry.target.querySelectorAll('.game-card');
                    
                    // Animate member cards with bounce effect
                    memberCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, index * 150); // Staggered delay
                    });
                    
                    // Animate game cards with slide effects
                    gameCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                            card.style.opacity = '1';
                            card.style.transform = 'translateX(0) scale(1)';
                        }, index * 200); // Staggered delay
                    });
                    
                    // Animate section title with special effect
                    const sectionTitle = entry.target.querySelector('.section-title');
                    if (sectionTitle) {
                        setTimeout(() => {
                            sectionTitle.style.animation = 'titleSlideIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
                        }, 100);
                    }
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Also observe individual cards for more precise control
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, 100);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(element => {
            cardObserver.observe(element);
        });
    }
    
    // Custom cursor removed for better user experience
    
    // Interactive particle burst on click
    function createClickBurst(x, y) {
        const burstCount = 8;
        const colors = ['var(--accent-color)', 'var(--primary-color)', 'var(--secondary-color)'];
        
        for (let i = 0; i < burstCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            const angle = (i / burstCount) * Math.PI * 2;
            const velocity = 50 + Math.random() * 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            document.body.appendChild(particle);
            
            let posX = x;
            let posY = y;
            let opacity = 1;
            
            function animateParticle() {
                posX += vx * 0.02;
                posY += vy * 0.02;
                opacity -= 0.02;
                
                particle.style.left = posX + 'px';
                particle.style.top = posY + 'px';
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animateParticle);
                } else {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }
            }
            
            animateParticle();
        }
    }
    
    // Initialize enhanced effects
    initScrollAnimations();
    
    // Add click burst effect
    document.addEventListener('click', (e) => {
        createClickBurst(e.clientX, e.clientY);
    });
document.addEventListener('DOMContentLoaded', function() {
    // ======================================
    // Navigation and general site functionality
    // ======================================
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If mobile menu is open, close it when a link is clicked
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }

            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll event listener to update active nav link and handle Trax widget
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Header background change on scroll
        const header = document.querySelector('.header');
        if (scrollPosition > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }

        // Hide the widget with a 2-second delay if it's visible
        if (isTraxVisible && hasFirstInteractionOccurred) {
            // Clear any existing timeout
            if (scrollHideTimeout) {
                clearTimeout(scrollHideTimeout);
            }

            // Set a new timeout to hide the widget after 2 seconds
            scrollHideTimeout = setTimeout(() => {
                console.log('Hiding Trax widget after scroll (2s delay)');
                hideTraxWidget();
                scrollHideTimeout = null;
            }, 2000);
        }

        // Update active nav link on scroll
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ======================================
    // KOMPLEXÁCI TRAX PLAYER FUNCTIONALITY
    // ======================================

    // Define track list for the player - including all available tracks
    // Using default values that will be used if metadata extraction fails
    const playlist = [
        {
            title: "She Loves Me Not",  // Default title for track1
            artist: "Papa Roach", // Default artist
            file: "audio/track1.mp3"
        },
        {
            title: "Keep On Moving",  // Default title for track2
            artist: "Jordiz", // Default artist
            file: "audio/track2.mp3"
        },
        {
            title: "Forgive Me",  // Default title for track3
            artist: "Versus the World", // Default artist
            file: "audio/track3.mp3"
        },
        {
            title: "Worlds Away",  // New track4
            artist: "Lil Peep", // Artist for track4
            file: "audio/track4.mp3"
        },
        {
            title: "Turn Your Back",  // New track5
            artist: "Billy Talent feat Anti-Flag", // Artist for track5
            file: "audio/track5.mp3"
        },
        {
            title: "Superman",  // track6
            artist: "Eminem", // Artist for track6
            file: "audio/track6.mp3"
        },
        {
            title: "Hard Rock Hallelujah",  // track7
            artist: "Lordi", // Artist for track7
            file: "audio/track7.mp3"
        },
        {
            title: "Bring Me To Life",  // track8
            artist: "Evanescence", // Artist for track8
            file: "audio/track8.mp3"
        },
        {
            title: "Papercuts",  // track9
            artist: "Machine Gun Kelly", // Artist for track9
            file: "audio/track9.mp3"
        },
        {
            title: "Hollywood Forever",  // track10
            artist: "Hollywood Undead", // Artist for track10
            file: "audio/track10.mp3"
        },
        {
            title: "Stíny",  // track11
            artist: "Viktor Sheen", // Artist for track11
            file: "audio/track11.mp3"
        },
        {
            title: "Hollywood Sucks",  // track12
            artist: "Kenny Hoopla", // Artist for track12
            file: "audio/track12.mp3"
        },
        {
            title: "Bite Me",  // track13
            artist: "Avril Lavigne", // Artist for track13
            file: "audio/track13.mp3"
        },
        // Add more tracks here as needed
        // {
        //     title: "Track Title",
        //     artist: "Artist Name",
        //     file: "audio/trackX.mp3"
        // }
    ];

    // We're now using the audio element that's directly in the HTML

    // Player elements
    const traxWidget = document.querySelector('.trax-widget');
    const traxMiniIcon = document.getElementById('trax-mini-icon');
    const musicPlayer = document.getElementById('music-player');
    const playButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev-track');
    const nextButton = document.getElementById('next-track');
    const trackName = document.querySelector('.track-name');
    const trackArtist = document.querySelector('.track-artist');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIcon = document.getElementById('volume-icon');

    // Handle missing elements that were in the previous design
    // These are for compatibility with the existing code
    const progressCurrent = { style: { width: '0%' } };
    const currentTime = { textContent: '0:00' };
    const totalTime = { textContent: '0:00' };

    // Variables for auto-hide functionality
    let isMouseOverWidget = false;
    let traxHideTimer = null;
    let isTraxVisible = false;

    // Flag to track if first click has occurred
    let hasFirstInteractionOccurred = false;
    let scrollHideTimeout = null; // For delayed hiding on scroll

    // Player state
    let currentTrack = 0;
    let isPlaying = false;

    // Shuffle state
    let isShuffleOn = true; // Shuffle on by default
    let shuffledPlaylist = [];
    let currentShuffleIndex = 0;

    // Multi-instance control
    let isInstanceActive = false;
    const INSTANCE_KEY = 'komplexaci_trax_active_instance';
    const INSTANCE_TIMESTAMP_KEY = 'komplexaci_trax_timestamp';
    const MUSIC_EVER_STARTED_KEY = 'komplexaci_trax_ever_started_session'; // Changed to session-based
    const instanceId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    // Check if this instance should be the active one
    function checkInstanceControl() {
        const activeInstance = localStorage.getItem(INSTANCE_KEY);
        const timestamp = localStorage.getItem(INSTANCE_TIMESTAMP_KEY);
        const now = Date.now();
        
        console.log(`[${instanceId}] Checking control - Active: ${activeInstance}, Timestamp: ${timestamp}, Age: ${timestamp ? now - parseInt(timestamp) : 'N/A'}ms`);
        
        // If this instance is already active, keep control
        if (activeInstance === instanceId) {
            console.log(`[${instanceId}] Already have control`);
            return true;
        }
        
        // If no active instance, we can take control
        if (!activeInstance || !timestamp) {
            console.log(`[${instanceId}] Can take control (no active instance)`);
            return true;
        }
        
        // If timestamp is very old (>10 seconds), the other instance is likely closed
        const age = now - parseInt(timestamp);
        if (age > 10000) {
            console.log(`[${instanceId}] Can take control (timestamp too old: ${age}ms)`);
            return true;
        }
        
        console.log(`[${instanceId}] Cannot take control (instance ${activeInstance} is active, age: ${age}ms)`);
        return false;
    }

    // Claim control for this instance
    function claimInstanceControl() {
        const now = Date.now();
        localStorage.setItem(INSTANCE_KEY, instanceId);
        localStorage.setItem(INSTANCE_TIMESTAMP_KEY, now.toString());
        isInstanceActive = true;
        console.log(`[${instanceId}] CLAIMED CONTROL at ${now}`);
        
        // Immediately pause any other instances that might be playing
        window.dispatchEvent(new StorageEvent('storage', {
            key: INSTANCE_KEY,
            newValue: instanceId,
            storageArea: localStorage
        }));
    }

    // Release control from this instance
    function releaseInstanceControl() {
        const activeInstance = localStorage.getItem(INSTANCE_KEY);
        if (activeInstance === instanceId) {
            localStorage.removeItem(INSTANCE_KEY);
            localStorage.removeItem(INSTANCE_TIMESTAMP_KEY);
            console.log(`[${instanceId}] RELEASED CONTROL`);
        }
        isInstanceActive = false;
    }

    // Update heartbeat to keep control
    function updateHeartbeat() {
        if (isInstanceActive) {
            const now = Date.now();
            localStorage.setItem(INSTANCE_TIMESTAMP_KEY, now.toString());
            // Only log heartbeat when playing to reduce console spam
            if (isPlaying) {
                console.log(`[${instanceId}] Heartbeat updated at ${now}`);
            }
        }
    }

    // Listen for storage changes to detect when other instances take control
    window.addEventListener('storage', function(e) {
        if (e.key === INSTANCE_KEY) {
            const activeInstance = localStorage.getItem(INSTANCE_KEY);
            console.log(`[${instanceId}] Storage change detected - new active instance: ${activeInstance}`);
            
            if (activeInstance && activeInstance !== instanceId && isPlaying) {
                console.log(`[${instanceId}] Another instance (${activeInstance}) took control, STOPPING playback`);
                // Another instance took control, pause this one
                isPlaying = false;
                musicPlayer.pause();
                updatePlayButton();
                isInstanceActive = false;
                
                // Show notification in track name
                if (trackName) {
                    const originalText = trackName.textContent;
                    trackName.textContent = "Paused by another tab";
                    setTimeout(() => {
                        trackName.textContent = originalText;
                    }, 3000);
                }
            }
        }
        
        // Listen for WWE Trax commands
        if (e.key === 'wwe_trax_command') {
            const command = e.newValue;
            console.log(`[${instanceId}] WWE Trax command received: ${command}`);
            
            if (command === 'stop_main_trax' && isPlaying) {
                console.log(`[${instanceId}] WWE Trax requested stop - stopping main Kompg Trax`);
                // Stop main Kompg Trax when WWE Trax starts
                isPlaying = false;
                musicPlayer.pause();
                musicPlayer.currentTime = 0; // Reset to beginning
                updatePlayButton();
                releaseInstanceControl();
                
                // Hide main trax widget
                hideTraxWidget();
                
                // Show notification in track name
                if (trackName) {
                    const originalText = trackName.textContent;
                    trackName.textContent = "WWE Trax playing";
                    setTimeout(() => {
                        trackName.textContent = originalText;
                    }, 3000);
                }
            } else if (command === 'release_control') {
                console.log(`[${instanceId}] WWE Trax released control - main Kompg Trax can resume`);
                // WWE Trax stopped, main Kompg can resume if needed
                // Just show a brief notification
                if (trackName) {
                    const originalText = trackName.textContent;
                    trackName.textContent = "Click to resume music";
                    setTimeout(() => {
                        trackName.textContent = originalText;
                    }, 2000);
                }
            }
        }
        
        // Firefox fallback - listen for the trigger key
        if (e.key === 'wwe_trax_firefox_trigger') {
            console.log(`[${instanceId}] Firefox fallback trigger detected`);
            // Check the actual command
            const command = localStorage.getItem('wwe_trax_command');
            const timestamp = localStorage.getItem('wwe_trax_timestamp');
            const now = Date.now();
            
            // Only process recent commands (within 5 seconds)
            if (timestamp && (now - parseInt(timestamp)) < 5000) {
                console.log(`[${instanceId}] Processing Firefox fallback command: ${command}`);
                
                if (command === 'stop_main_trax' && isPlaying) {
                    console.log(`[${instanceId}] Firefox fallback: WWE Trax requested stop - stopping main Kompg Trax`);
                    // Stop main Kompg Trax when WWE Trax starts
                    isPlaying = false;
                    musicPlayer.pause();
                    musicPlayer.currentTime = 0; // Reset to beginning
                    updatePlayButton();
                    releaseInstanceControl();
                    
                    // Hide main trax widget
                    hideTraxWidget();
                    
                    // Show notification in track name
                    if (trackName) {
                        const originalText = trackName.textContent;
                        trackName.textContent = "WWE Trax playing (Firefox)";
                        setTimeout(() => {
                            trackName.textContent = originalText;
                        }, 3000);
                    }
                } else if (command === 'release_control') {
                    console.log(`[${instanceId}] Firefox fallback: WWE Trax released control - main Kompg Trax can resume`);
                    // WWE Trax stopped, main Kompg can resume if needed
                    if (trackName) {
                        const originalText = trackName.textContent;
                        trackName.textContent = "Click to resume music";
                        setTimeout(() => {
                            trackName.textContent = originalText;
                        }, 2000);
                    }
                }
            }
        }
    });

    // Heartbeat interval to maintain control
    setInterval(updateHeartbeat, 1000);

    // Firefox fallback: Periodic check for WWE Trax commands
    let lastWWECommandCheck = 0;
    setInterval(() => {
        const wweCommand = localStorage.getItem('wwe_trax_command');
        const wweTimestamp = localStorage.getItem('wwe_trax_timestamp');
        
        if (wweTimestamp && parseInt(wweTimestamp) > lastWWECommandCheck) {
            lastWWECommandCheck = parseInt(wweTimestamp);
            const now = Date.now();
            
            // Only process recent commands (within 10 seconds)
            if ((now - parseInt(wweTimestamp)) < 10000) {
                console.log(`[${instanceId}] Periodic check found WWE command: ${wweCommand}`);
                
                if (wweCommand === 'stop_main_trax' && isPlaying) {
                    console.log(`[${instanceId}] Periodic check: Stopping main Kompg Trax for WWE`);
                    isPlaying = false;
                    musicPlayer.pause();
                    musicPlayer.currentTime = 0;
                    updatePlayButton();
                    releaseInstanceControl();
                    hideTraxWidget();
                    
                    if (trackName) {
                        const originalText = trackName.textContent;
                        trackName.textContent = "WWE Trax playing (periodic check)";
                        setTimeout(() => {
                            trackName.textContent = originalText;
                        }, 3000);
                    }
                }
            }
        }
    }, 500); // Check every 500ms for Firefox compatibility // Update every 1 second for more responsive control

    // Function to show the Trax widget with optional auto-hide after 5 seconds
    function showTraxWidget(autoHide = false) {
        console.log('Showing Trax widget');
        if (traxWidget && traxMiniIcon) {
            // Show the widget
            traxWidget.style.opacity = '1';
            traxWidget.style.transform = 'translateY(0)';
            traxWidget.style.pointerEvents = 'auto';
            traxWidget.style.visibility = 'visible';
            isTraxVisible = true;

            // Hide the mini icon
            traxMiniIcon.style.opacity = '0';
            traxMiniIcon.style.pointerEvents = 'none';

            // Clear any existing hide timer
            if (traxHideTimer) {
                clearTimeout(traxHideTimer);
                traxHideTimer = null;
            }

            // Set auto-hide timer if requested
            if (autoHide) {
                console.log('Setting auto-hide timer for 5 seconds');
                traxHideTimer = setTimeout(() => {
                    // Only hide if not being interacted with
                    if (!isMouseOverWidget) {
                        console.log('Auto-hiding Trax widget');
                        hideTraxWidget();
                    }
                }, 5000); // 5 seconds
            }
        }
    }

    // Function to hide the Trax widget and show the mini icon
    function hideTraxWidget() {
        console.log('Hiding Trax widget');
        // Hide the widget
        if (traxWidget && traxMiniIcon) {
            // Hide the widget
            traxWidget.style.opacity = '0';
            traxWidget.style.transform = 'translateY(20px)';
            traxWidget.style.pointerEvents = 'none';
            // Add a small delay before setting visibility to hidden
            setTimeout(() => {
                traxWidget.style.visibility = 'hidden';
            }, 300); // Match the transition duration
            isTraxVisible = false;

            // Show the mini icon
            traxMiniIcon.style.opacity = '1';
            traxMiniIcon.style.pointerEvents = 'auto';
            console.log('Mini icon shown');

            // Clear any existing hide timer
            if (traxHideTimer) {
                clearTimeout(traxHideTimer);
                traxHideTimer = null;
            }
        }
    }

    // Simple function to handle track info display with hardcoded values
    function extractMetadata(audioFile) {
        console.log('Setting track info for:', audioFile);

        // Get the debug element
        const trackDebug = document.querySelector('.track-debug');

        // Get the hardcoded values from the playlist
        const trackTitle = playlist[currentTrack].title;
        const trackArtist = playlist[currentTrack].artist;

        // Update the UI with the track info
        if (trackName) {
            trackName.textContent = trackTitle;
            // Check if track name is too long and apply scrolling animation with delay
            setTimeout(() => checkTrackNameLength(), 200);
        }
        if (trackArtist) trackArtist.textContent = trackArtist;

        // Update debug info
        if (trackDebug) {
            let debugText = `Track: ${currentTrack + 1}/${playlist.length}`;
            trackDebug.textContent = debugText;
            trackDebug.style.color = '#4caf50';

            // Log the info to console
            console.log(`Playing track ${currentTrack + 1}/${playlist.length}: "${trackTitle}" by "${trackArtist}"`);
        }

        // Set media session metadata if available
        if ('mediaSession' in navigator) {
            try {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: trackTitle,
                    artist: trackArtist,
                    album: "Komplexáci Gaming Clan",
                    artwork: [
                        { src: 'img/logo.png', sizes: '96x96', type: 'image/png' }
                    ]
                });

                // MediaSession was set successfully (no need to show in UI)
                console.log('MediaSession set successfully');
            } catch (e) {
                console.error('Error setting MediaSession metadata:', e);
                console.log('Error setting MediaSession');
            }
        }
    }



    // Initialize player
    function initPlayer() {
        // Set initial volume
        musicPlayer.volume = volumeSlider.value;

        // Load first track
        loadTrack(currentTrack);

        // Initialize with visible toggle button
        setTimeout(() => {
            console.log('Initializing player controls');
        }, 1000);
    }

    // Function to check if track name is too long and apply scrolling animation
    function checkTrackNameLength() {
        if (!trackName || !trackName.textContent) return;

        // Remove any existing scrolling class first
        trackName.classList.remove('scrolling');
        if (trackName.parentElement) {
            trackName.parentElement.classList.remove('scrolling');
        }

        // Ensure widget is visible for accurate measurements
        const wasVisible = isTraxVisible;
        if (!wasVisible) {
            // Temporarily show widget for measurement
            traxWidget.style.visibility = 'visible';
            traxWidget.style.opacity = '0';
            traxWidget.style.pointerEvents = 'none';
        }

        // Force a reflow to ensure the element is measured correctly
        trackName.offsetWidth;

        // Get the container width and text width with more accurate measurements
        const containerElement = trackName.parentElement;
        const containerWidth = containerElement.offsetWidth - 20; // Account for padding

        // Create a temporary element to measure the actual text width
        const tempElement = document.createElement('span');
        tempElement.style.cssText = `
            font-family: 'Exo 2', sans-serif;
            font-weight: 600;
            font-size: 1.2rem;
            white-space: nowrap;
            visibility: hidden;
            position: absolute;
            top: -9999px;
        `;
        tempElement.textContent = trackName.textContent;
        document.body.appendChild(tempElement);

        const textWidth = tempElement.offsetWidth;
        document.body.removeChild(tempElement);

        // Restore widget visibility if it was hidden
        if (!wasVisible) {
            traxWidget.style.visibility = 'hidden';
            traxWidget.style.opacity = '0';
        }

        // If text is wider than container (with buffer), add scrolling
        const buffer = 15; // Increased buffer for better detection
        if (textWidth > containerWidth - buffer) {
            console.log(`Track name "${trackName.textContent}" is too long (${textWidth}px > ${containerWidth - buffer}px), adding scrolling animation`);

            // Calculate dynamic animation duration based on text length
            const overflowAmount = textWidth - (containerWidth - buffer);
            const baseDuration = 4; // Base 4 seconds
            const extraDuration = Math.min(overflowAmount / 50, 3); // Add up to 3 seconds for very long text
            const animationDuration = baseDuration + extraDuration;

            trackName.classList.add('scrolling');
            containerElement.classList.add('scrolling'); // Add to container for fade effects
            trackName.style.animationDuration = `${animationDuration}s`;

            console.log(`Animation duration set to ${animationDuration}s for overflow of ${overflowAmount}px`);
        } else {
            console.log(`Track name "${trackName.textContent}" fits (${textWidth}px <= ${containerWidth - buffer}px), no scrolling needed`);
            // Reset animation duration and remove classes
            trackName.style.animationDuration = '';
            containerElement.classList.remove('scrolling');
        }
    }

    // Load track function with metadata extraction
    function loadTrack(trackIndex) {
        // Ensure the index is valid
        if (trackIndex < 0) trackIndex = playlist.length - 1;
        if (trackIndex >= playlist.length) trackIndex = 0;

        currentTrack = trackIndex;

        // Set audio source
        if (musicPlayer) {
            // First, update with default info from playlist
            if (trackName) {
                trackName.textContent = playlist[currentTrack].title;
                // Check if track name needs scrolling with longer delay for proper rendering
                setTimeout(() => checkTrackNameLength(), 300);
            }
            if (trackArtist) trackArtist.textContent = playlist[currentTrack].artist;

            // Set the source
            musicPlayer.src = playlist[currentTrack].file;
            musicPlayer.load();

            // Try to extract metadata from the MP3 file
            extractMetadata(playlist[currentTrack].file);
        }

        // Update play/pause button
        updatePlayButton();
    }

    // Toggle play/pause function
    function togglePlay() {
        // Check if we can control the player (multi-instance check)
        if (!isPlaying && !checkInstanceControl()) {
            console.log('Another instance is controlling the music player');
            // Show a brief notification that another tab is playing
            if (trackName) {
                const originalText = trackName.textContent;
                trackName.textContent = "Playing in another tab";
                setTimeout(() => {
                    trackName.textContent = originalText;
                }, 2000);
            }
            return;
        }

        // Toggle playing state
        isPlaying = !isPlaying;

        if (isPlaying) {
            // Mark that music has been started at least once in this session
            sessionStorage.setItem(MUSIC_EVER_STARTED_KEY, 'true');
            // Claim control when starting to play
            claimInstanceControl();
        } else {
            // Release control when pausing
            releaseInstanceControl();
        }

        // Update button appearance
        updatePlayButton();

        // Show the widget with animation
        showTraxWidget();

        if (isPlaying) {
            console.log('Playing music...');

            // Check if we need to reload the audio
            if (!musicPlayer.src || musicPlayer.src.endsWith('/')) {
                console.log('Audio source not set, reloading track');
                loadTrack(currentTrack);
            }

            // Make sure we're unmuted
            musicPlayer.muted = false;

            // Try multiple play techniques
            tryToPlayAudio();
        } else {
            console.log('Paused.');

            // Pause the audio
            musicPlayer.pause();
        }
    }

    // Simple function to play audio
    function tryToPlayAudio() {
        console.log('Trying to play audio...');

        // Start with muted for better autoplay chances
        musicPlayer.muted = true;

        // Try to play
        musicPlayer.play()
            .then(() => {
                console.log('Playback started successfully (muted)');
                // Unmute after a short delay
                setTimeout(() => {
                    musicPlayer.muted = false;
                    console.log('Audio unmuted');
                }, 500);
            })
            .catch(e => {
                console.error('Playback failed:', e);
                isPlaying = false;
                updatePlayButton();
            });
    }

    // Update play button appearance based on playing state
    function updatePlayButton() {
        if (playButton) {
            if (isPlaying) {
                // Update play button to show pause icon
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                playButton.classList.add('playing');

                // Make the mini icon pulse faster when music is playing
                if (traxMiniIcon) {
                    traxMiniIcon.style.animation = 'pulse 0.5s infinite alternate';
                }

                // Add pulsating effect to the main widget
                if (traxWidget) {
                    traxWidget.classList.add('pulsating');
                }
            } else {
                // Update play button to show play icon
                playButton.innerHTML = '<i class="fas fa-play"></i>';
                playButton.classList.remove('playing');

                // Return mini icon to normal pulse when music is paused
                if (traxMiniIcon) {
                    traxMiniIcon.style.animation = 'pulse 1s infinite alternate';
                }

                // Remove pulsating effect from the main widget
                if (traxWidget) {
                    traxWidget.classList.remove('pulsating');
                }
            }
        }
    }

    // Format time function (convert seconds to mm:ss format)
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' + sec : sec}`;
    }

    // Update progress bar
    function updateProgress() {
        if (musicPlayer.duration) {
            const progressPercent = (musicPlayer.currentTime / musicPlayer.duration) * 100;
            progressCurrent.style.width = `${progressPercent}%`;
            currentTime.textContent = formatTime(musicPlayer.currentTime);
        }
    }

    // Set progress when clicking on progress bar
    function setProgress(e) {
        const progressBar = e.currentTarget;
        const clickPosition = e.offsetX;
        const progressWidth = progressBar.clientWidth;

        if (musicPlayer.duration) {
            // Set audio element's current time
            musicPlayer.currentTime = (clickPosition / progressWidth) * musicPlayer.duration;
        }
    }

    // Previous track function
    function prevTrack() {
        console.log('Previous track called');

        // Check if we can control the player (multi-instance check)
        if (!checkInstanceControl()) {
            console.log('Another instance is controlling the music player');
            return;
        }

        // Always use sequential playback when manually navigating
        // Only the first track is shuffled
        currentTrack--;

        // If we're at the beginning, loop to the end
        if (currentTrack < 0) {
            currentTrack = playlist.length - 1;
        }

        // Turn off shuffle after first track
        isShuffleOn = false;

        console.log('Switching to track index:', currentTrack);

        // Load the new track
        loadTrack(currentTrack);

        // Always play the previous track automatically when skipping
        isPlaying = true;
        claimInstanceControl(); // Claim control when changing tracks
        updatePlayButton(); // Update the play button to show pause icon

        // Play the track
        musicPlayer.play()
            .catch(e => console.error('Error playing previous track:', e));

        // Show the widget and animation when changing tracks
        showTraxWidget();
        showTrackChangeAnimation();
    }

    // Next track function
    function nextTrack() {
        console.log('Next track called');

        // Check if we can control the player (multi-instance check)
        if (!checkInstanceControl()) {
            console.log('Another instance is controlling the music player');
            return;
        }

        // Always use sequential playback when manually navigating
        // Only the first track is shuffled
        currentTrack++;

        // If we're at the end, loop back to the beginning
        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }

        // Turn off shuffle after first track
        isShuffleOn = false;

        console.log('Switching to track index:', currentTrack);

        // Load the new track
        loadTrack(currentTrack);

        // Always play the next track automatically when skipping
        isPlaying = true;
        claimInstanceControl(); // Claim control when changing tracks
        updatePlayButton(); // Update the play button to show pause icon

        // Play the track
        musicPlayer.play()
            .catch(e => console.error('Error playing next track:', e));

        // Show the widget and animation when changing tracks
        showTraxWidget();
        showTrackChangeAnimation();
    }

    // Show track change animation
    function showTrackChangeAnimation() {
        // Add animation class
        traxWidget.classList.add('track-change-animation');

        // Remove class after animation completes to allow it to be re-applied later
        setTimeout(() => {
            traxWidget.classList.remove('track-change-animation');
        }, 5000);
    }

    // Update the volume icon based on volume level
    function updateVolumeIcon(volume) {
        if (!volumeIcon) return;

        if (volume === 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (volume < 0.5) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }

    // Event listeners
    if (playButton) playButton.addEventListener('click', togglePlay);
    if (prevButton) prevButton.addEventListener('click', prevTrack);
    if (nextButton) nextButton.addEventListener('click', nextTrack);

    // Add mouse enter/leave events for the widget to prevent auto-hiding while interacting
    if (traxWidget) {
        traxWidget.addEventListener('mouseenter', function() {
            isMouseOverWidget = true;
        });

        traxWidget.addEventListener('mouseleave', function() {
            isMouseOverWidget = false;
        });
    }

    // Mini icon click event to show the main widget
    if (traxMiniIcon) {
        traxMiniIcon.addEventListener('click', function() {
            console.log('Mini icon clicked, showing widget');
            showTraxWidget();
            // If music is not playing, try to start it (respecting instance control)
            if (!isPlaying) {
                togglePlay(); // This now includes instance control check
            }
        });
    }

    // Volume control event listener
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            const volume = this.value;
            musicPlayer.volume = volume;
            updateVolumeIcon(volume);
        });
    }

    // Add click handler for the close button
    const closeButton = document.getElementById('trax-close');
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling to the widget
            hideTraxWidget();
        });
    }

    // Update progress as audio plays
    musicPlayer?.addEventListener('timeupdate', updateProgress);

    // When track ends, play next track (using shuffle if enabled)
    musicPlayer?.addEventListener('ended', nextTrack);

    // Error handling for audio
    musicPlayer?.addEventListener('error', () => {
        console.log("Audio error occurred");
        // Just update UI to show we're not playing
        isPlaying = false;
        updatePlayButton();
        // Show error in track name
        if (trackName) trackName.textContent = "Audio unavailable";
    });

    // Function to shuffle the playlist
    function shufflePlaylist() {
        // Create an array of indices
        shuffledPlaylist = [];
        for (let i = 0; i < playlist.length; i++) {
            shuffledPlaylist.push(i);
        }

        // Shuffle the array using Fisher-Yates algorithm
        for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
        }

        // Log the shuffle results for debugging
        console.log('Playlist shuffled:', shuffledPlaylist);

        // Count occurrences of each track in first position (for debugging)
        let firstTrackCounts = {};
        for (let i = 0; i < playlist.length; i++) {
            firstTrackCounts[i] = 0;
        }
        firstTrackCounts[shuffledPlaylist[0]]++;
        console.log('First track distribution:', firstTrackCounts);

        currentShuffleIndex = 0;

        // Set the current track to the first in the shuffled list
        if (isShuffleOn && shuffledPlaylist.length > 0) {
            currentTrack = shuffledPlaylist[currentShuffleIndex];
        }
    }

    // Initialize player function
    function initPlayer() {
        console.log('Initializing EA Trax player');

        // Check if music has ever been started in this session
        const musicEverStarted = sessionStorage.getItem(MUSIC_EVER_STARTED_KEY);
        console.log('During init - Music ever started in this session:', musicEverStarted);

        // Set initial volume from slider
        musicPlayer.volume = volumeSlider.value; // Use slider value (0.2 = 20%)

        // Make sure audio element has proper attributes
        musicPlayer.autoplay = false;
        musicPlayer.controls = false;
        musicPlayer.crossOrigin = 'anonymous';
        musicPlayer.preload = 'auto';

        // Initialize shuffle mode FIRST - before loading any tracks
        // This ensures the first track played is already shuffled
        shufflePlaylist();

        // Now load the first track (which will be from the shuffled playlist)
        loadTrack(currentTrack);

        // Set initial volume slider value
        if (volumeSlider) {
            volumeSlider.value = musicPlayer.volume;
            updateVolumeIcon(musicPlayer.volume);
        }

        // Show the animation when initialized
        showTrackChangeAnimation();

        console.log('Player initialized with shuffle. First track index:', currentTrack);

        // Add manual click handler to support mobile playback
        traxWidget.addEventListener('click', function(e) {
            // Only handle clicks on specific areas, not on buttons or controls

            // Don't trigger if clicking on any button or control element
            if (e.target.closest('.trax-button') ||
                e.target.closest('.trax-buttons') ||
                e.target.closest('.trax-close-button') ||
                e.target.closest('.volume-control')) {
                return; // Do nothing when clicking on controls
            }

            // Only toggle play when clicking on the main content areas
            if (e.target === traxWidget ||
                e.target.closest('.trax-logo') ||
                e.target === trackName ||
                e.target === trackArtist ||
                e.target.closest('.trax-track-info')) {
                togglePlay();
            }
        });

        // Hide the widget by default, show only the mini icon
        hideTraxWidget();

        // Make sure the mini icon is visible
        if (traxMiniIcon) {
            traxMiniIcon.style.opacity = '1';
            traxMiniIcon.style.pointerEvents = 'auto';
            traxMiniIcon.style.visibility = 'visible';
        }

        // Add a handler to enable audio on user interaction
        const unlockAudio = function(e) {
            console.log('User interaction detected, enabling audio', e.type);

            // Set first interaction flag
            hasFirstInteractionOccurred = true;

            const musicEverStarted = sessionStorage.getItem(MUSIC_EVER_STARTED_KEY);

            if (musicEverStarted !== 'true') {
                // This is the first time music is being started in this session
                console.log('First time music is being started in this session - auto-starting');
                
                // Mark that music has been started in this session IMMEDIATELY
                sessionStorage.setItem(MUSIC_EVER_STARTED_KEY, 'true');

                // Show the widget
                showTraxWidget(true); // Auto-hide after 5 seconds

                // Claim control before starting to play
                claimInstanceControl();

                // Try to play
                if (!isPlaying) {
                    isPlaying = true;
                    updatePlayButton();
                    tryToPlayAudio();
                }
            } else {
                // Music has been started before in this session, do not auto-start in this new tab
                console.log('Music has been started in another tab in this session - not auto-starting here');
                
                if (!checkInstanceControl()) {
                    // Another instance is currently active
                    console.log('Another instance is controlling the music player');
                    if (trackName) {
                        const originalText = trackName.textContent;
                        trackName.textContent = "Playing in another tab";
                        setTimeout(() => {
                            trackName.textContent = originalText;
                        }, 3000);
                    }
                } else {
                    // No other active instance, but music has played before in this session. Allow manual play.
                    console.log('No active instance, but music played before in this session. Click to play here.');
                    if (trackName) {
                        const originalText = trackName.textContent;
                        trackName.textContent = "Click to play music here";
                        setTimeout(() => {
                            trackName.textContent = originalText;
                        }, 4000);
                    }
                }
                // Show the widget briefly to indicate readiness, but don't play
                showTraxWidget(true);
            }

            // Remove event listeners after first interaction
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('touchstart', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };

        // Add event listeners for user interaction (click only - scroll will simulate a click)
        document.addEventListener('click', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
    }

    // No need for wrappers - directly modify the original functions to include animation
    // Already added the showTrackChangeAnimation call inside the nextTrack and prevTrack functions

    // This functionality is now handled by the unlockAudio function above

    // Add window resize listener to re-check track name length
    let resizeTimeout;
    window.addEventListener('resize', function() {
        // Debounce the resize event
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (trackName && trackName.textContent) {
                checkTrackNameLength();
            }
        }, 250);
    });

    // Initialize player if all elements exist
// Initialize video section particles if on the videotvorba page
    if (window.location.pathname.includes('videotvorba.html')) {
        createVideoSectionParticles();
        initVideoPlayers(); // Initialize video player click functionality
    }
    if (traxWidget && musicPlayer) {
        console.log('Initializing Komplexaci Trax player...');
        // Initialize the player
        initPlayer();
    }

    // Function to initialize video players for click-to-play
    function initVideoPlayers() {
        const videoItems = document.querySelectorAll('.video-item');

        videoItems.forEach(item => {
            const iframe = item.querySelector('iframe');
            const videoOverlay = item.querySelector('.video-overlay');
            const dataSrc = iframe.getAttribute('data-src');

            // Set initial src to show thumbnail immediately (without autoplay)
            if (dataSrc) {
                iframe.src = dataSrc; // Set the source to show thumbnail
            }

            // Add click listener to the entire video item to trigger playback
            item.addEventListener('click', function() {
                if (dataSrc && iframe.src !== dataSrc + '?autoplay=1') { // Prevent re-playing if already playing
                    // Construct autoplay URL
                    const autoplaySrc = dataSrc + '?autoplay=1';
                    
                    // Set iframe src to trigger autoplay
                    iframe.src = autoplaySrc;
                    
                    // Ensure autoplay is allowed (though usually handled by 'allow' attribute)
                    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture;');

                    // Hide the overlay
                    if (videoOverlay) {
                        videoOverlay.style.opacity = '0';
                        videoOverlay.style.pointerEvents = 'none'; // Ensure it's not clickable after play
                    }
                }
            });

            // Intersection Observer for lazy loading (now just for animation purposes)
            const videoObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const lazyIframe = entry.target.querySelector('iframe');
                        const lazyDataSrc = lazyIframe.getAttribute('data-src');
                        if (lazyDataSrc && !lazyIframe.src) {
                            // Set the actual src when in view if not already set
                            lazyIframe.src = lazyDataSrc;
                        }
                        lazyIframe.removeAttribute('data-src'); // Remove data-src once processed
                        observer.unobserve(entry.target); // Stop observing once loaded
                    }
                });
            }, {
                rootMargin: '0px 0px -100px 0px', // Load when 100px from bottom of viewport
                threshold: 0.1
            });

            videoObserver.observe(item); // Observe the video item
        });
    }

    // Release control when page is unloaded
    window.addEventListener('beforeunload', function() {
        releaseInstanceControl();
    });

    // Also release control when page becomes hidden (tab switch)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && isPlaying) {
            // Don't pause, but release control so other tabs can take over
            releaseInstanceControl();
        }
    });
});

// Toggle advanced filters visibility
function toggleAdvancedFilters() {
    const filtersPanel = document.getElementById('filters-panel');
    const toggleBtn = document.querySelector('.toggle-filters-btn');
    const toggleArrow = toggleBtn.querySelector('.toggle-arrow');
    const activeFiltersCount = document.getElementById('active-filters-count');
    
    if (filtersPanel.style.display === 'none' || filtersPanel.style.display === '') {
        filtersPanel.style.display = 'block';
        toggleBtn.classList.add('active');
        toggleArrow.style.transform = 'rotate(180deg)';
    } else {
        filtersPanel.style.display = 'none';
        toggleBtn.classList.remove('active');
        toggleArrow.style.transform = 'rotate(0deg)';
    }
    
    // Update active filters count
    updateActiveFiltersCount();
}

// Update active filters count display
function updateActiveFiltersCount() {
    const activeFiltersCount = document.getElementById('active-filters-count');
    const selectedFilters = document.querySelectorAll('.filter-option.selected');
    const searchInput = document.querySelector('.search-input');
    
    let count = selectedFilters.length;
    if (searchInput && searchInput.value.trim()) {
        count++;
    }
    
    if (count > 0) {
        activeFiltersCount.textContent = count;
        activeFiltersCount.classList.add('active');
    } else {
        activeFiltersCount.textContent = '';
        activeFiltersCount.classList.remove('active');
    }
}

// Call updateActiveFiltersCount when filters change
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to filter options
    document.addEventListener('change', function(e) {
        if (e.target.matches('.filter-option input[type="checkbox"]')) {
            updateActiveFiltersCount();
        }
    });
    
    // Add event listener to search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', updateActiveFiltersCount);
    }
});
