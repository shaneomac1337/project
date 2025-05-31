# System Patterns - Design & Development Standards

## CSS Architecture Patterns

### Color System
```css
:root {
    --primary-color: #6e4ff6;      /* Purple - Primary brand */
    --secondary-color: #ff4757;    /* Red - Accent/danger */
    --accent-color: #00d2ff;       /* Blue - Links/info */
    --success-color: #2ed573;      /* Green - Success states */
    --warning-color: #ffa502;      /* Orange - Warnings */
    --dark-bg: #1a1a1a;          /* Main dark background */
    --card-bg: #2d2d2d;          /* Card backgrounds */
    --text-primary: #ffffff;       /* Primary text */
    --text-secondary: #b3b3b3;     /* Secondary text */
    --border-color: #404040;       /* Borders and dividers */
}
```

### Typography Scale
```css
/* Heading Hierarchy */
h1: 2.5rem (40px) - Page titles
h2: 2rem (32px) - Section headers
h3: 1.5rem (24px) - Subsection headers
h4: 1.25rem (20px) - Card titles
h5: 1.125rem (18px) - Small headers
h6: 1rem (16px) - Labels

/* Body Text */
body: 1rem (16px) - Base text
small: 0.875rem (14px) - Helper text
```

### Spacing System
```css
/* Consistent spacing scale */
--space-xs: 0.25rem (4px)
--space-sm: 0.5rem (8px)
--space-md: 1rem (16px)
--space-lg: 1.5rem (24px)
--space-xl: 2rem (32px)
--space-2xl: 3rem (48px)
--space-3xl: 4rem (64px)
```

### Component Patterns

#### Button Styles
```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.btn-secondary {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}
```

#### Card Components
```css
.card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: var(--space-lg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}
```

#### Modal Patterns
```css
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
```

## JavaScript Patterns

### Module Structure
```javascript
// Standard module pattern
const ModuleName = (function() {
    // Private variables
    let privateVar = null;
    
    // Private methods
    function privateMethod() {
        // Implementation
    }
    
    // Public API
    return {
        init: function() {
            // Initialization logic
        },
        publicMethod: function() {
            // Public functionality
        }
    };
})();
```

### Event Handling Pattern
```javascript
// Consistent event delegation
document.addEventListener('DOMContentLoaded', function() {
    // DOM ready logic
});

// Event delegation for dynamic content
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-class')) {
        // Handle button click
    }
});
```

### Error Handling Pattern
```javascript
// Consistent error handling
function handleError(error, context = '') {
    console.error(`Error in ${context}:`, error);
    showNotification('An error occurred. Please try again.', 'error');
}

// Async function pattern
async function asyncFunction() {
    try {
        const result = await someAsyncOperation();
        return result;
    } catch (error) {
        handleError(error, 'asyncFunction');
        throw error;
    }
}
```

## Responsive Design Patterns

### Breakpoint System
```css
/* Mobile First Approach */
/* Base styles: 320px+ */

@media (min-width: 768px) {
    /* Tablet styles */
}

@media (min-width: 1024px) {
    /* Desktop styles */
}

@media (min-width: 1440px) {
    /* Large desktop styles */
}
```

### Grid Patterns
```css
.grid {
    display: grid;
    gap: var(--space-lg);
}

.grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## Bug Fixing Methodologies

### Debugging Workflow
1. **Reproduce**: Consistently reproduce the bug
2. **Isolate**: Identify the specific component/function
3. **Analyze**: Use browser dev tools to investigate
4. **Fix**: Implement minimal, targeted solution
5. **Test**: Verify fix across browsers and devices
6. **Document**: Record the issue and solution

### Common Bug Categories

#### CSS Issues
- **Layout Problems**: Use CSS Grid/Flexbox debugging
- **Responsive Issues**: Test at multiple breakpoints
- **Cross-browser**: Check vendor prefixes and fallbacks

#### JavaScript Issues
- **Event Handling**: Check event delegation and timing
- **Async Operations**: Verify promise handling and error catching
- **DOM Manipulation**: Ensure elements exist before manipulation

#### Performance Issues
- **Image Optimization**: Use appropriate formats and sizes
- **Code Splitting**: Minimize initial bundle size
- **Caching**: Implement proper cache strategies

### Testing Patterns

#### Manual Testing Checklist
- [ ] Functionality works as expected
- [ ] Visual appearance matches design
- [ ] Responsive behavior correct
- [ ] Cross-browser compatibility
- [ ] Accessibility requirements met
- [ ] Performance within targets

#### Browser Testing Strategy
1. **Primary**: Chrome (latest) - Main development browser
2. **Secondary**: Firefox, Safari, Edge (latest)
3. **Mobile**: Chrome Mobile, Safari Mobile
4. **Legacy**: Test on older versions if needed

## Code Quality Standards

### File Organization
- Keep files under 500 lines
- Use meaningful file and function names
- Group related functionality together
- Maintain consistent indentation (2 spaces)

### Documentation Standards
```javascript
/**
 * Function description
 * @param {type} paramName - Parameter description
 * @returns {type} Return value description
 */
function functionName(paramName) {
    // Implementation
}
```

### Performance Guidelines
- Minimize DOM queries
- Use event delegation
- Optimize images and assets
- Implement lazy loading where appropriate
- Cache frequently accessed elements
**[2025-05-31] PROJECT COMPLETION - SYSTEM PATTERNS FINALIZED**
All design patterns, coding standards, and architectural decisions have been successfully implemented in the production-ready Komplexáci Gaming website. The system patterns documented below represent the final, tested implementation standards.

**Final Implementation Status:**
- ✅ CSS Architecture Patterns - Fully implemented
- ✅ JavaScript Patterns - All functional and tested  
- ✅ Responsive Design Patterns - Cross-device compatibility achieved
- ✅ Bug Fixing Methodologies - Successfully applied throughout development
- ✅ Code Quality Standards - Maintained across all components

**Ready for Maintenance Phase** - System patterns can be referenced for future updates or enhancements.