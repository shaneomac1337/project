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
    
    // Scroll event listener to update active nav link based on scroll position
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
            title: "Komplexáci Anthem",  // Default title for track1
            artist: "Komplexáci Gaming Clan", // Default artist
            file: "audio/track1.mp3"
        },
        {
            title: "Komplexáci Track 2",  // Default title for track2
            artist: "Komplexáci Gaming Clan", // Default artist
            file: "audio/track2.mp3"
        }
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
    
    // Player state
    let currentTrack = 0;
    let isPlaying = false;
    
    // Function to show the Trax widget (no auto-hide)
    function showTraxWidget() {
        console.log('Showing Trax widget');
        // Make widget visible
        if (traxWidget) {
            traxWidget.classList.add('active');
            
            // Hide the mini icon when the main widget is shown
            if (traxMiniIcon) {
                traxMiniIcon.style.opacity = '0';
                traxMiniIcon.style.pointerEvents = 'none';
                console.log('Mini icon hidden');
            }
        }
        
        // Clear any existing hide timer
        if (traxHideTimer) {
            clearTimeout(traxHideTimer);
        }
        
        // No auto-hide timer - widget stays visible until manually closed
    }
    
    // Function to hide the Trax widget and show the mini icon
    function hideTraxWidget() {
        console.log('Hiding Trax widget');
        // Hide the widget
        if (traxWidget) {
            traxWidget.classList.remove('active');
            
            // Show the mini icon when the main widget is hidden
            if (traxMiniIcon) {
                traxMiniIcon.style.opacity = '1';
                traxMiniIcon.style.pointerEvents = 'auto';
                console.log('Mini icon shown');
            }
        }
    }
    
    // Simplified function to handle track info display
    function extractMetadata(audioFile) {
        console.log('Setting track info for:', audioFile);
        
        // Just use the default values from the playlist
        if (trackName) trackName.textContent = playlist[currentTrack].title;
        if (trackArtist) trackArtist.textContent = playlist[currentTrack].artist;
        
        // Set media session metadata if available
        if ('mediaSession' in navigator) {
            try {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: playlist[currentTrack].title,
                    artist: playlist[currentTrack].artist,
                    album: "Komplexáci Gaming Clan",
                    artwork: [
                        { src: 'img/logo.png', sizes: '96x96', type: 'image/png' }
                    ]
                });
            } catch (e) {
                console.error('Error setting MediaSession metadata:', e);
            }
        }
    }
    

    
    // Initialize player
    function initPlayer() {
        // Set initial volume
        musicPlayer.volume = volumeSlider.value / 100;
        
        // Load first track
        loadTrack(currentTrack);
        
        // Initialize with visible toggle button
        setTimeout(() => {
            console.log('Initializing player controls');
        }, 1000);
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
            if (trackName) trackName.textContent = playlist[currentTrack].title;
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
        
        // Move to the previous track in the playlist
        currentTrack--;
        
        // If we're at the beginning, loop to the end of the playlist
        if (currentTrack < 0) {
            currentTrack = playlist.length - 1;
        }
        
        console.log('Switching to track index:', currentTrack);
        
        // Load and play the new track
        loadTrack(currentTrack);
        if (isPlaying) {
            musicPlayer.play()
                .catch(e => console.error('Error playing previous track:', e));
        }
        
        // Show the widget and animation when changing tracks
        showTraxWidget();
        showTrackChangeAnimation();
    }
    
    // Next track function
    function nextTrack() {
        console.log('Next track called');
        
        // Move to the next track in the playlist
        currentTrack++;
        
        // If we're at the end, loop back to the beginning
        if (currentTrack >= playlist.length) {
            currentTrack = 0;
        }
        
        console.log('Switching to track index:', currentTrack);
        
        // Load and play the new track
        loadTrack(currentTrack);
        if (isPlaying) {
            musicPlayer.play()
                .catch(e => console.error('Error playing next track:', e));
        }
        
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
    
    // When track ends, play next track
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
    
    // Initialize player function
    function initPlayer() {
        console.log('Initializing EA Trax player');
        
        // Set initial volume
        musicPlayer.volume = 0.7; // 70% volume
        
        // Make sure audio element has proper attributes
        musicPlayer.autoplay = false;
        musicPlayer.controls = false;
        musicPlayer.crossOrigin = 'anonymous';
        musicPlayer.preload = 'auto';
        
        // Load first track
        loadTrack(currentTrack);
        
        // Set initial volume slider value
        if (volumeSlider) {
            volumeSlider.value = musicPlayer.volume * 100;
            updateVolumeIcon(musicPlayer.volume);
        }
        
        // Show the animation when initialized
        showTrackChangeAnimation();
        
        // Add manual click handler to support mobile playback
        traxWidget.addEventListener('click', function(e) {
            // Only handle clicks on the main widget, not on buttons
            if (e.target === traxWidget || e.target.closest('.trax-content') || 
                e.target === trackName || e.target === trackArtist) {
                togglePlay();
            }
        });
        
        // Check if the audio file exists and can be played
        const audioPath = 'audio/track1.mp3';
        console.log('Checking audio file:', audioPath);
        
        // First check if file exists
        fetch(audioPath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log('Audio file exists, ready for playback');
                    
                    // Set up the audio for playback
                    musicPlayer.src = audioPath;
                    musicPlayer.load();
                    musicPlayer.volume = 0.7;
                    
                    // Setup for autoplay
                    console.log('Setting up autoplay...');
                    
                    // Hide the widget by default, show only the mini icon
                    hideTraxWidget();
                    
                    // Ensure the mini icon is visible and clickable
                    if (traxMiniIcon) {
                        traxMiniIcon.style.opacity = '1';
                        traxMiniIcon.style.pointerEvents = 'auto';
                    }
                    
                    // Update track info display and try to extract metadata
                    loadTrack(0); // This will also extract metadata
                    
                    // Set initial volume
                    musicPlayer.volume = 0.7;
                    
                    // Add a click handler to the entire document to enable audio
                    const unlockAudio = function() {
                        console.log('User interaction detected, enabling audio');
                        
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
                    
                    // Add event listeners for user interaction
                    document.addEventListener('click', unlockAudio);
                    document.addEventListener('touchstart', unlockAudio);
                    document.addEventListener('keydown', unlockAudio);
                    
                } else {
                    throw new Error('Audio file not found');
                }
            })
            .catch(error => {
                console.error('Audio file check failed:', error);
                // Just show the widget without playing
                setTimeout(() => {
                    showTraxWidget();
                    // Update track name to show error
                    if (trackName) trackName.textContent = "Audio unavailable";
                }, 1000);
            });
    }
    
    // No need for wrappers - directly modify the original functions to include animation
    // Already added the showTrackChangeAnimation call inside the nextTrack and prevTrack functions
    
    // Initialize player if all elements exist
    if (traxWidget && musicPlayer) {
        console.log('Initializing Komplexaci Trax player...');
        // Initialize the player
        initPlayer();
    }
});
