# SASS Structure

This directory contains the modular SASS files for the website.

## File Organization

- `_variables.scss` - Color palette, spacing, typography, and other design tokens
- `_mixins.scss` - Reusable SASS mixins for common patterns
- `_animations.scss` - Keyframe animations
- `_base.scss` - Base HTML element styles and typography
- `_navigation.scss` - Header and navigation menu styles
- `_cards.scss` - Card component styles (base card, profile card)
- `_publications.scss` - Publication card styles
- `_projects.scss` - Project grid and card styles
- `_contact.scss` - Contact page styles
- `_pages.scss` - General page layout styles
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

## Color Palette

- **Primary**: `#5e35b1` (deep purple)
- **Primary Dark**: `#4527a0`
- **Text Primary**: `#2c3e50`
- **Text Secondary**: `#5a6268`

See `_variables.scss` for the complete design system.
