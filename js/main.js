// Wait for DOM content to load
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
        // Toggle playing state
        isPlaying = !isPlaying;

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
            // If music is not playing, start it
            if (!isPlaying) {
                togglePlay();
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

            // Show the widget
            showTraxWidget(true); // Auto-hide after 5 seconds

            // Set first interaction flag
            hasFirstInteractionOccurred = true;

            // Try to play
            if (!isPlaying) {
                isPlaying = true;
                updatePlayButton();
                tryToPlayAudio();
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
    if (traxWidget && musicPlayer) {
        console.log('Initializing Komplexaci Trax player...');
        // Initialize the player
        initPlayer();
    }
});
