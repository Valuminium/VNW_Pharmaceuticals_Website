# VNW Pharmaceuticals Website

A modern, responsive website for VNW Pharmaceuticals showcasing their skin and hair care products.

## Project Structure

This website has been refactored into modular components for easier maintenance and editing:

### Files:

- `index.html` - Main HTML file with placeholders for sections
- `styles.css` - All CSS styles
- `script.js` - JavaScript for dynamic loading and interactions

### Section Components:

- `header.html` - Navigation bar
- `hero.html` - Hero section with product showcase
- `products.html` - Products grid
- `features.html` - Features section
- `about.html` - About section
- `footer.html` - Footer

## How It Works

The main `index.html` file loads each section dynamically using JavaScript fetch API. This allows you to edit individual sections without touching the main file.

## Running the Website

1. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

2. Open `http://localhost:8000` in your browser

## Editing Sections

To modify any section:
1. Open the corresponding HTML file (e.g., `hero.html` for the hero section)
2. Make your changes
3. Save and refresh the browser

All styles are in `styles.css` and JavaScript functionality is in `script.js`.

## Features

- Responsive design
- Smooth scroll animations
- Product showcase with hover effects
- Modular component structure
- Pharmaceutical-grade styling