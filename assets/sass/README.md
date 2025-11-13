# SASS Structure

This directory contains the modular SASS files for the website.

## File Organization

- `_variables.scss` - Complete design system (colors, typography, spacing, shadows, etc.)
- `_mixins.scss` - Reusable SASS mixins for common patterns
- `_animations.scss` - Keyframe animations
- `_accessibility.scss` - Accessibility features (reduced motion, focus styles)
- `_base.scss` - Base HTML element styles and typography
- `_navigation.scss` - Header and navigation menu styles
- `_cards.scss` - Card component styles (base card, profile card)
- `_publications.scss` - Publication card styles
- `_projects.scss` - Project grid and card styles
- `_contact.scss` - Contact page styles
- `_pages.scss` - General page layout styles
- `_404.scss` - 404 error page styles
- `_fullscreen.scss` - Fullscreen homepage layout
- `main.scss` - Main stylesheet (imports all partials for default layout)
- `fullscreen-main.scss` - Fullscreen stylesheet (imports relevant partials)

## Building

Cobalt automatically compiles SASS files during the build process (supported since v0.12.2).

To build the site:

```bash
./build.sh
```

Or manually:

```bash
cobalt build
```

Cobalt will automatically compile all `.scss` files in `assets/sass/` and output them to `_site/assets/sass/` as `.css` files.

## Making Changes

1. Edit the relevant SASS file(s)
2. Run the build script: `./build.sh` or `cobalt build`
3. Test your changes locally
4. Commit the SASS source files (compiled CSS is generated automatically)

## Design System

### Colors
- **Primary**: `#5e35b1` (deep purple)
- **Primary Dark**: `#4527a0`
- **Primary Light**: `#6a1b9a`
- **Link Color**: `#7e57c2` (purple to match theme)
- **Text Primary**: `#2c3e50`
- **Text Secondary**: `#5a6268`
- **Text Tertiary**: `#495057`
- **Text Dark**: `#555`

### Typography Scale
- `$font-size-xs` through `$font-size-10xl` (0.7rem to 4.5rem)
- All sizes include pixel equivalents in comments

### Spacing Scale
- **Base**: `$spacing-xs` (0.5rem) through `$spacing-xxl` (2.5rem)
- **Fine-grained**: `$spacing-0-2` through `$spacing-0-9` for precise control

### Shadows
- `$shadow-sm`: Subtle depth
- `$shadow-md`: Medium elevation
- `$shadow-lg`: High elevation
- `$shadow-hover-sm`: Hover state for buttons
- `$shadow-hover-purple`: Hover state with brand color

### Border Radius
- `$radius-sm` (6px) through `$radius-xxl` (30px)
- `$radius-pill` (50px) for pill buttons
- `$radius-circle` (50%) for circular elements

## Accessibility Features

- **Reduced Motion**: Automatically disables animations for users with `prefers-reduced-motion`
- **Focus Visible**: 2px purple outline for keyboard navigation
- **Touch Targets**: 44x44px minimum (iOS HIG compliant)
- **Color Contrast**: WCAG AA compliant

See `_variables.scss` for the complete design system.
