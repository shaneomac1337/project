# Decision Log - Design & Technical Decisions

## Decision Categories
- **DESIGN**: Visual and UX decisions
- **TECH**: Technical implementation choices
- **PERF**: Performance optimization decisions
- **BUG**: Bug fix approaches and rationales

---

## 2025-05-28 - Memory Bank Creation

### TECH-001: Memory Bank Architecture
**Decision**: Implement 5-file memory bank structure for beautification focus
**Rationale**: 
- Focused scope on visual improvements and bug fixes
- Structured approach to maintain context across sessions
- Enables tracking of design decisions and bug resolution patterns
**Impact**: Improved development workflow and context preservation
**Status**: Implemented

### DESIGN-001: Color System Standardization
**Decision**: Establish consistent CSS custom properties for color scheme
**Rationale**:
- Current inconsistencies in color usage across pages
- Need for maintainable color system
- Gaming theme requires specific color palette (purple, red, blue accents)
**Implementation**: CSS custom properties in :root
**Status**: Planned

### TECH-002: CSS Architecture Pattern
**Decision**: Use CSS custom properties and component-based styling
**Rationale**:
- Maintainable and scalable styling approach
- Consistent spacing and typography system
- Easier theme management and updates
**Impact**: Improved code maintainability
**Status**: Planned

---

## Pending Decisions

### DESIGN-002: Navigation Menu Enhancement
**Issue**: Current navigation needs visual and functional improvements
**Options**:
1. Hamburger menu for mobile with slide-out drawer
2. Collapsible menu with accordion-style sections
3. Tab-based navigation with active state indicators
**Considerations**: Mobile usability, visual hierarchy, brand consistency
**Status**: Under evaluation

### PERF-001: Image Optimization Strategy
**Issue**: Large image files causing slow loading times
**Options**:
1. WebP format with fallbacks
2. Responsive images with srcset
3. Lazy loading implementation
4. CDN integration for asset delivery
**Considerations**: Browser support, implementation complexity, performance gains
**Status**: Research needed

### BUG-001: Authentication Modal Behavior
**Issue**: Modal not closing properly after successful login
**Root Cause**: Event listener conflicts and state management
**Approach**: Refactor modal state management with proper cleanup
**Status**: Solution identified, implementation pending

---

## Design Philosophy Decisions

### Visual Hierarchy
**Decision**: Implement clear content hierarchy with consistent spacing
**Rationale**: Improves readability and user navigation
**Implementation**: Typography scale and spacing system
**Date**: 2025-05-28

### Dark Theme Approach
**Decision**: Maintain dark gaming theme with gradient accents
**Rationale**: 
- Aligns with gaming community preferences
- Reduces eye strain during extended use
- Creates immersive gaming atmosphere
**Considerations**: Accessibility contrast ratios must be maintained
**Date**: 2025-05-28

### Responsive Strategy
**Decision**: Mobile-first responsive design approach
**Rationale**:
- Growing mobile usage in gaming community
- Better performance on mobile devices
- Progressive enhancement philosophy
**Implementation**: CSS media queries with mobile-first breakpoints
**Date**: 2025-05-28

---

## Bug Fix Decision Patterns

### Authentication Issues
**Pattern**: Prioritize user experience over complex features
**Approach**: 
1. Fix critical login/logout functionality first
2. Improve error messaging and feedback
3. Ensure cross-browser compatibility
4. Add proper loading states

### Performance Issues
**Pattern**: Optimize for perceived performance
**Approach**:
1. Critical rendering path optimization
2. Progressive image loading
3. Minimize blocking resources
4. Implement proper caching strategies

### Cross-browser Compatibility
**Pattern**: Test early and often across browsers
**Approach**:
1. Use feature detection over browser detection
2. Implement graceful degradation
3. Provide fallbacks for modern features
4. Test on actual devices when possible

---

## Rejected Decisions

### REJ-001: Complex Animation Framework
**Decision**: Not to implement heavy animation library
**Rationale**: 
- Performance concerns for gaming website
- Complexity doesn't match project scope
- CSS transitions sufficient for current needs
**Alternative**: Custom CSS animations for specific elements
**Date**: 2025-05-28

### REJ-002: Complete Framework Migration
**Decision**: Not to migrate to React/Vue framework
**Rationale**:
- Current vanilla JS approach working well
- Migration would introduce unnecessary complexity
- Focus should be on beautification, not architecture changes
**Alternative**: Improve existing vanilla JS patterns
**Date**: 2025-05-28

---

## Future Decision Points

### Accessibility Improvements
**Timeline**: After visual consistency achieved
**Scope**: WCAG 2.1 AA compliance implementation
**Considerations**: Screen reader support, keyboard navigation, color contrast

### Performance Monitoring
**Timeline**: After major bug fixes completed
**Scope**: Implement performance tracking and monitoring
**Considerations**: Core Web Vitals, user experience metrics

### Content Management
**Timeline**: Long-term consideration
**Scope**: Evaluate need for content management system
**Considerations**: Clan member updates, news posting, event management

---

## Decision Review Schedule
- **Weekly**: Review active decisions and progress
- **Monthly**: Evaluate decision outcomes and lessons learned
- **Project milestones**: Comprehensive decision audit and documentation update
[2025-05-28 20:30:35] - BUG-002: Champion/Skin Card Stretching Fix
**Issue**: When filtering champions or skins to a single result, CSS grid auto-fit caused cards to stretch across full container width
**Solution**: Added max-width constraints (400px for champions, 280px for skins) and center justification to grid items
**Rationale**: Maintains consistent card proportions regardless of filter results while preserving responsive grid behavior
**Impact**: Improved visual consistency and user experience when filtering
**Status**: Fixed
[2025-05-28 20:42:51] - DESIGN-003: Always-Visible Position Filters Implementation
**Decision**: Added prominent position filter bar with champion counts for each role
**Features Implemented**:
- Always-visible filter buttons for All, Top, Jungle, Mid, ADC, Support positions
- Real-time champion count display for each position (e.g., "45 Top", "32 Mid")
- Beautiful gradient styling with hover effects and animations
- Mobile-responsive design with smaller buttons and adjusted spacing
- Integration with existing filter system
**Rationale**: 
- User requested quick access to position-based filtering without opening advanced filters
- Champion counts provide immediate feedback on data distribution
- Gaming-themed icons (⚔️🌲⭐🏹🛡️) enhance visual appeal and usability
**Technical Implementation**:
- CSS grid layout with hover animations and gradient backgrounds
- JavaScript functions for position filtering and count updates
- Integration with existing filter state management
**Impact**: Significantly improved user experience for role-based champion browsing
**Status**: Implemented
[2025-05-28 20:47:36] - DESIGN-004: Color-Coded Champion Statistics
**Decision**: Implemented intuitive color coding for champion statistics
**Color Scheme Applied**:
- **Difficulty**: Easy/Low (green) → Hard/High (red) - intuitive for users (green = good/easy, red = bad/hard)
- **Survivability**: Low (red) → High (green) - logical for survival stats (red = danger, green = safe)
**Technical Implementation**:
- Added `data-stat` attributes to distinguish between different stat types
- CSS selectors target specific combinations of `data-stat` and `data-level`
- Maintained existing damage type color coding (Physical = orange, Magic = teal)
**Rationale**: 
- Provides immediate visual feedback about champion characteristics
- Follows intuitive color psychology (green = positive, red = negative/challenging)
- Helps users quickly identify champions matching their skill level and playstyle preferences
**Status**: Implemented
[2025-05-28 20:52:47] - BUGFIX-001: Fixed Color-Coded Stats and Survivability Filter
**Issue**: Color coding wasn't working and survivability filter was broken
**Root Cause**: 
- CSS selectors expected numeric values (data-level="1") but API returns Czech text (data-level="Střední")
- Filter options used numeric values but champion data uses Czech text values
**Solution Applied**:
- Updated CSS selectors to match Czech text values:
  * Difficulty: "Nízká" (green), "Střední" (yellow), "Vysoká"/"Velmi vysoká" (red)
  * Survivability: "Nízká" (red), "Střední" (yellow), "Vysoká"/"Velmi vysoká" (green)
- Updated filter dropdown options to use Czech text values instead of numbers
- Removed .toString() conversion in filter logic to do direct string comparison
**Impact**: Color coding now works correctly and survivability filter is functional
**Status**: Fixed
[2025-05-28 20:55:00] - ENHANCEMENT-001: Visual Progress Bars for Champion Stats
**Decision**: Added progress bar indicators to difficulty and survivability stats
**Visual Design**:
- **Progress Bar Structure**: Thin horizontal bars (4px height) below stat values
- **Fill Levels**: 
  * Nízká: 25% fill
  * Střední: 50% fill  
  * Vysoká: 75% fill
  * Velmi vysoká: 100% fill
- **Color Coding**: Matches existing color scheme (green=good, yellow=medium, red=challenging)
- **Animation Effects**: Shimmer effect on bars and scale-up on card hover
**Rationale**: 
- Provides immediate visual feedback about stat levels
- Intuitive representation (more fill = higher level)
- Enhances user experience with at-a-glance stat comparison
- Maintains consistency with gaming UI conventions
**Technical Implementation**:
- HTML: Added `.champion-stat-bar` and `.champion-stat-fill` elements
- CSS: Gradient backgrounds, width-based levels, hover animations
- Responsive design with smooth transitions
**Impact**: Improved visual hierarchy and stat readability
**Status**: Implemented
[2025-05-28 20:59:01] - IMPROVEMENT-001: Enhanced Champion Card Image Presentation
**Issue**: Splash art images like Garen's were not optimally positioned, cutting off important character details
**Solution Applied**:
- **Object Position**: Set `object-position: center 25%` to focus on upper portion where character faces/details are typically located
- **Card Height**: Increased from 400px to 450px for better aspect ratio and more image real estate
- **Maintained**: Existing hover effects and transitions for smooth user experience
**Rationale**: 
- League of Legends splash arts are designed with characters prominently featured in upper portions
- 25% vertical positioning captures character faces and key visual elements better than center positioning
- Taller cards provide more space for both image and text content without cramping
**Technical Details**:
- CSS `object-position` property controls which part of the image is visible in the container
- Maintains `object-fit: cover` to prevent image distortion while improving focal point
**Impact**: Better visual presentation of champion artwork with improved character visibility
**Status**: Implemented
[2025-05-28 21:01:27] - BUGFIX-002: Fixed Champion Head Visibility Issue
**Issue**: Champion heads were completely cut off in card images (e.g., Garen's head not visible)
**Root Cause**: Object positioning was still too low even at 25% and 10% vertical positioning
**Solution Applied**: 
- Changed `object-position` from `center 25%` → `center 10%` → `center top`
- `center top` ensures the very top of splash arts are shown, capturing character heads and faces
**Rationale**: 
- Character recognition is crucial for user experience
- Heads/faces are the most important identifying features
- Better to show top portion even if some lower details are cut off
**Technical Details**:
- `object-position: center top` aligns image to show topmost portion
- Maintains aspect ratio while prioritizing character visibility
- Works across all champion splash arts regardless of composition
**Impact**: All champion cards now properly display character heads and faces
**Status**: Fixed
[2025-05-28 21:02:05] - LIMITATION-001: Champion Splash Art Positioning Challenge
**Issue**: Single object-position value cannot optimize all champion splash arts due to diverse compositions
**Attempted Solutions**:
- `center 25%` - Too low for many champions
- `center 10%` - Still cutting off some heads
- `center top` - Better but not perfect for all compositions
**Root Cause**: 
- LoL splash arts have varied character positioning (center, left, right, top, bottom)
- Some champions are full-body shots, others are close-ups
- Single CSS rule cannot accommodate 160+ unique image compositions
**Potential Future Solutions**:
- Individual object-position per champion (requires extensive manual mapping)
- Dynamic image analysis and positioning
- Alternative card layouts that work better with diverse image compositions
**Current Status**: Using `center top` as best compromise solution
**User Acceptance**: Acknowledged as acceptable limitation
[2025-05-28 21:05:27] - SOLUTION-001: Champion-Specific Image Positioning System
**Implementation**: Created targeted solution for Garen's image positioning issue
**Technical Approach**:
- Added `data-champion` attribute to all champion cards during creation
- Created CSS selector `.champion-card[data-champion="Garen"] .champion-splash img`
- Set Garen's specific positioning to `object-position: right top`
**Scalability**: 
- System now allows individual positioning rules for any champion
- Can easily add more champion-specific rules as needed
- Maintains general `center top` positioning for all other champions
**Code Structure**:
- JavaScript: `card.setAttribute('data-champion', champion.name)`
- CSS: Champion-specific selectors override general positioning
**Impact**: Garen's image should now properly show his head/face positioned from the right side
**Future Use**: Template for fixing other problematic champion images individually
**Status**: Implemented for Garen
[2025-05-28 21:07:49] - FINAL-FIXES: Position Badges and Fizz Image Positioning
**Issues Addressed**:
1. Position badges stretching when champions have multiple roles
2. Fizz image positioning similar to Garen

**Solutions Applied**:
1. **Position Badge Improvements**:
   - Reduced padding from `4px 12px` to `4px 8px` for more compact badges
   - Reduced font-size from `0.75rem` to `0.7rem`
   - Added `white-space: nowrap` to prevent text wrapping
   - Added `flex-shrink: 0` and `min-width: fit-content` for proper sizing
   - Smaller border-radius (12px vs 15px) for cleaner look

2. **Fizz Image Positioning**:
   - Added Fizz to champion-specific positioning rules
   - Set `object-position: right top` to show his character properly

**Technical Implementation**:
- Extended existing champion-specific CSS system
- Improved badge layout without breaking existing functionality
- Maintained visual consistency across all champions

**Impact**: 
- Multi-role champions now display badges properly without stretching
- Fizz image shows character details from optimal angle
- Cleaner, more professional badge appearance

**Status**: Completed
[2025-05-28 21:09:39] - FINAL-FIX: Position Badges Stacking Layout
**Issue**: Position badges (MID, JUNGLE) looked stretched and awkward when stacked vertically for multi-role champions
**Visual Problem**: Badges were too large and spaced out, creating an unbalanced appearance in the top-right corner
**Solution Applied**:
- **Container**: Reduced gap from 6px to 4px, added max-width: 80px constraint
- **Badge Size**: Reduced padding from 4px 8px to 3px 6px for more compact appearance
- **Typography**: Reduced font-size from 0.7rem to 0.65rem for better proportion
- **Border Radius**: Reduced from 12px to 10px for tighter, cleaner look
- **Layout**: Added text-align: center and line-height: 1 for consistent spacing
**Impact**: 
- Multi-role champions now have properly proportioned, compact badge stacks
- Better visual balance in champion card layout
- Maintains readability while improving aesthetics
- Consistent appearance across all champions regardless of role count
**Status**: Completed