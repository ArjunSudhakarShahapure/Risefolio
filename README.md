# Risefolio - Professional Portfolio Website

A modern, responsive website for Risefolio startup built with HTML, CSS, and JavaScript.

## 🚀 Features

### Design & UI
- **Modern Design**: Clean, professional layout with blue/white color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Hover effects, scroll animations, and transitions
- **Typography**: Uses Inter font family for modern readability

### Sections
1. **Navigation**: Fixed navbar with smooth scrolling and mobile menu
2. **Hero Section**: Eye-catching banner with call-to-action button
3. **Features**: Four feature cards highlighting Risefolio benefits
4. **How It Works**: Three-step process explanation
5. **Contact Form**: Netlify-integrated form with validation
6. **Footer**: Company information and social links

### Functionality
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Form Validation**: Client-side validation with real-time feedback
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Scroll Animations**: Elements fade in as you scroll
- **Netlify Integration**: Contact form ready for Netlify deployment

## 📁 File Structure

```
risefolio-website/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy automatically

3. **Form Handling**:
   - Netlify will automatically detect the form
   - Form submissions will be available in your Netlify dashboard
   - You can set up email notifications

### Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in your browser
3. **For form testing**: Use a local server (e.g., Live Server extension in VS Code)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 Color Scheme

- **Primary Blue**: #2563eb
- **Secondary Blue**: #3b82f6
- **Dark Text**: #1e293b
- **Light Text**: #64748b
- **Background**: #f8fafc
- **White**: #ffffff

## ✨ Key Features

### Navigation
- Fixed navbar with backdrop blur
- Smooth scrolling to sections
- Mobile hamburger menu
- Active state indicators

### Hero Section
- Gradient background
- Large call-to-action button
- Parallax effect on graphic
- Responsive typography

### Features
- Hover animations on cards
- Icon integration
- Grid layout
- Shadow effects

### Contact Form
- Real-time validation
- Error messaging
- Success feedback
- Netlify integration ready

### Animations
- Scroll-triggered fade-ins
- Hover effects
- Smooth transitions
- Loading animations

## 🔧 Customization

### Colors
Edit the CSS variables in `style.css` to change the color scheme:

```css
:root {
    --primary-blue: #2563eb;
    --secondary-blue: #3b82f6;
    --dark-text: #1e293b;
    --light-text: #64748b;
}
```

### Content
- Update text content in `index.html`
- Modify contact email in footer
- Change social media links
- Update company information

### Styling
- Adjust spacing in CSS
- Modify animations
- Change fonts
- Update layout grids

## 📧 Contact Form Setup

The contact form is configured for Netlify:

```html
<form name="contact" method="POST" data-netlify="true">
```

To receive form submissions:
1. Deploy to Netlify
2. Check your Netlify dashboard for form submissions
3. Set up email notifications in Netlify settings

## 🚀 Performance

- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times
- SEO-friendly structure

## 📄 License

This project is created for Risefolio startup. All rights reserved.

---

**Built with ❤️ for Risefolio** 