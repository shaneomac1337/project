# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Start Development Server
```bash
npm start
# or
npm run dev
```
- Runs Express server on port 3000 (or PORT environment variable)
- Serves static files from the project root directory

### Dependencies
```bash
npm install
```
- Installs Express and path dependencies for the static file server

## Architecture Overview

This is a **Czech gaming clan website** for "Komplexáci" built as a static HTML/CSS/JavaScript site with an Express.js server for local development and hosting.

### Core Structure
- **Frontend**: Pure HTML/CSS/JavaScript (no frameworks)
- **Backend**: Simple Express.js static file server
- **Deployment**: Configured for Netlify (see netlify.toml)
- **Authentication**: Firebase Auth integration for future features

### Key Pages
- `index.html` - Main landing page with clan members and info
- `league-of-legends.html` - League of Legends game page with champion data
- `cs2.html` - Counter-Strike 2 page with weapons database
- `wwe-games.html` - WWE games collection page
- `videotvorba.html` - Video content page

### JavaScript Architecture
- `js/main.js` - Main site functionality, particle effects, music player ("KompG Trax")
- `js/auth.js` - Firebase authentication handling
- `js/firebase-config.js` - Firebase configuration
- `js/datadragon-api.js` - League of Legends API integration
- `js/game-auth.js` - Game-specific authentication features

### Key Features
1. **KompG Trax Music Player** - EA Trax-style music player with audio controls
2. **Interactive Member Cards** - Clickable member bios with modal overlays
3. **Particle Effects** - Animated background particles and floating gaming elements
4. **Game Databases** - CS2 weapons system and LoL champion data
5. **Firebase Auth** - User authentication system (partially implemented)

### CSS Organization
- `css/style.css` - Main stylesheet with CSS custom properties for theming
- `css/auth.css` - Authentication modal styles
- Responsive design with mobile-first approach

### Content Management
- Member data embedded in HTML with hidden bio data
- CS2 weapons data stored in JavaScript objects within HTML files
- League of Legends champion data fetched from Riot's DataDragon API
- Audio files stored in `/audio/` directory (MP3 format)

### SEO & Metadata
- Structured data (Schema.org) for games and organization
- Comprehensive meta tags and Open Graph data
- Sitemap.xml for search engine indexing

## Important Notes
- This is a Czech-language website (lang="cs")
- The clan is described as "retired" (v důchodu)
- Firebase config contains placeholder values that need real credentials
- Audio files are referenced but may need to be added to the audio/ directory
- Image files in `/img/` directory include member GIFs, game assets, and weapon images