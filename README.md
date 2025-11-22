# 🎨 Comic Forge

> **The Best Indie Comic Book Store You've Ever Seen**

A stunning, modern single-page landing site for an independent comic book store. Built with pure HTML, CSS, and JavaScript, featuring a bold design aesthetic, smooth animations, and a fully responsive layout.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-FF4B1F?style=for-the-badge&logo=vercel&logoColor=white)](https://comicforge.vercel.app/)

![Comic Forge Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### 🎯 Core Functionality
- **📱 Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🌓 Dark/Light Theme Toggle** - Seamless theme switching with persistent state
- **🛒 Shopping Cart Integration** - Interactive cart with real-time item counter
- **📧 Contact Form** - Complete contact section with information cards
- **🎯 Smooth Navigation** - Sticky navbar with smooth scroll anchors

### 🎨 Design Features
- **Modern UI/UX** - Comic book-inspired aesthetic with bold typography
- **Gradient Backgrounds** - Dynamic color schemes using orange (#FF4B1F) and teal (#19C5C8)
- **Halftone Effects** - Comic book style dot patterns on images
- **Glassmorphism** - Frosted glass effect on navigation bar
- **Torn Paper Dividers** - Custom SVG-style section dividers
- **Sticker Elements** - Playful decorative badges
- **Parallax Scrolling** - Subtle depth effect on hero section

### 🎬 Animations & Interactions
- **Scroll Animations** - Intersection Observer API for fade-in effects
- **Hover Effects** - Dynamic card rotations and scale transforms
- **Cart Bounce** - Animated feedback when adding items
- **Theme Transitions** - Smooth color transitions between modes
- **Mobile Menu** - Animated hamburger menu for small screens

---

## 🛠️ Technologies Used

### Frontend Stack
| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive design |
| **Vanilla JavaScript** | Interactivity and DOM manipulation |

### Design System
- **Typography**
  - [Anton](https://fonts.google.com/specimen/Anton) - Display headings
  - [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) - Section titles
  - [Inter](https://fonts.google.com/specimen/Inter) - Body text
- **Color Palette**
  - Primary: Orange (#FF4B1F) & Teal (#19C5C8)
  - Background: Dark (#050608) & Charcoal (#0A0A0A)
  - Accent: Off-white (#F5F5F0)

### Key CSS Features
- **CSS Grid** - Complex layouts (hero, catalog, pricing)
- **Flexbox** - Navigation and component alignment
- **Custom Properties (Variables)** - Consistent theming
- **Clip-path** - Torn paper divider effects
- **Backdrop Filter** - Glassmorphism on navbar
- **CSS Animations** - Keyframe animations for cart bounce
- **Media Queries** - Responsive breakpoints

### JavaScript Features
- **Intersection Observer API** - Scroll-triggered animations
- **Event Listeners** - User interaction handling
- **DOM Manipulation** - Dynamic content updates
- **Theme Persistence** - Local storage for user preferences
- **Smooth Scrolling** - Polyfill for anchor navigation

---

## 📂 Project Structure

```
comicforge/
├── index.html          # Main HTML structure
├── style.css           # Complete styling (27KB)
├── script.js           # Interactive functionality (5KB)
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
No build tools or dependencies required! This is a pure HTML/CSS/JS project.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/comicforge.git
   cd comicforge
   ```

2. **Serve locally**
   
   Choose any method:
   
   **Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **VS Code Live Server:**
   - Right-click `index.html` → "Open with Live Server"

3. **Open in browser**
   ```
   http://localhost:8000
   ```

---

## 📱 Sections Overview

### 1. **Hero Section**
   - Eye-catching headline with animated collage
   - CTA button with scroll-to-catalog functionality
   - Dynamic parallax effect on scroll

### 2. **Wide Selection (Catalog)**
   - Grid layout of featured comics
   - Hover effects with rotation and scale
   - Halftone comic book aesthetic

### 3. **Merch & Collectibles**
   - Product categories with gradient backgrounds
   - Icon-based placeholder design
   - Interactive hover states

### 4. **Subscription Plans**
   - Three-tier pricing structure (Basic, Ultimate, Premium)
   - Featured card highlighting
   - Tape effect decorations

### 5. **Blog/Media Section**
   - Article cards with custom cutouts
   - "Read more" links for engagement

### 6. **Contact Section**
   - Complete contact form
   - Info cards (address, email, phone)
   - Responsive grid layout

### 7. **Footer**
   - Quick links navigation
   - Social media icons
   - Copyright information

---

## 🎨 Customization Guide

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-orange: #FF4B1F;  /* Primary accent */
    --color-teal: #19C5C8;    /* Secondary accent */
    --color-bg-dark: #050608; /* Dark theme background */
}
```

### Adding New Comics
1. Copy a `.comic-card` div from `index.html`
2. Update the title and price
3. Change the gradient class (e.g., `.card-1-variant`)

### Modifying Fonts
Replace Google Fonts links in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

---

## 📊 Performance Optimizations

- ✅ **Minimal Dependencies** - No external frameworks
- ✅ **Optimized CSS** - Single concatenated stylesheet
- ✅ **Lazy Loading Ready** - Intersection Observer for performance
- ✅ **Mobile-First** - Responsive breakpoints for all devices
- ✅ **Semantic HTML** - SEO-friendly structure
- ✅ **Accessible** - ARIA labels on interactive elements

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Safari | ✅ iOS 12+ |
| Chrome Mobile | ✅ Latest |

---

## 📝 Code Highlights

### Theme Toggle
```javascript
themeToggle.addEventListener('click', function () {
    isDark = !isDark;
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    document.body.classList.toggle('light-mode');
});
```

### Scroll Animations
```javascript
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
```

### Parallax Effect
```javascript
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    heroCollage.style.transform = `translateY(${scrolled * 0.3}px)`;
});
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Mutlu Kurt**

- Website: [comicforge.com](https://comicforge.com)
- Email: hello@comicforge.com

---

## 🙏 Acknowledgments

- **Google Fonts** - Typography
- **Comic Book Design Inspiration** - Bold, gritty aesthetic
- **Modern Web Standards** - CSS Grid, Flexbox, Intersection Observer

---

## 📸 Screenshots

### Desktop View
![Desktop Hero Section](#)

### Mobile View
![Mobile Responsive](#)

### Theme Toggle
![Dark/Light Mode](#)

---

<div align="center">

**Built with ❤️ for comic lovers**

⭐ Star this repo if you find it helpful!

</div>
