# 🚀 Ultimate Animated Portfolio Website

A fully-animated, dark-themed portfolio website built with React, Framer Motion, and Three.js.

## ✨ Features

- **Heavily Animated Experience**: Smooth animations throughout using Framer Motion
- **3D Elements**: Interactive 3D icons and particle systems using Three.js
- **Dark Theme**: Modern, premium UI with gradient blur effects
- **Multi-page Routing**: Each section on separate routes with unique page transitions
- **Fully Responsive**: Optimized for all screen sizes
- **Interactive Particles**: Background particle system that responds to interactions
- **Contact Form**: Integrated with EmailJS for form submissions
- **Glassmorphism Effects**: Modern blur and transparency effects

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **React Router** - Client-side routing
- **EmailJS** - Email service integration
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portflolie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (Optional)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update `src/pages/Contact.jsx` with your credentials:
     ```javascript
     await emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       { ... },
       'YOUR_PUBLIC_KEY'
     )
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📄 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Navigation bar component
│   ├── Navigation.css
│   ├── SocialLinks.jsx         # Social media links component
│   ├── SocialLinks.css
│   ├── ThreeScene.jsx          # Three.js scene wrapper
│   ├── Particles.jsx           # Particle system component
│   └── FloatingIcons.jsx       # 3D floating icons component
├── pages/
│   ├── Hero.jsx                # Hero/Home page
│   ├── Hero.css
│   ├── About.jsx               # About section
│   ├── About.css
│   ├── Skills.jsx              # Skills section
│   ├── Skills.css
│   ├── Projects.jsx            # Projects showcase
│   ├── Projects.css
│   ├── Resume.jsx              # Resume/CV page
│   ├── Resume.css
│   ├── Articles.jsx            # Articles/Blog section
│   ├── Articles.css
│   ├── CodingProfiles.jsx      # Coding profiles section
│   ├── CodingProfiles.css
│   ├── Contact.jsx             # Contact form page
│   └── Contact.css
├── App.jsx                     # Main app component with routing
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎨 Sections

1. **Hero Section** - 3D animated icons, particle system, name, title, tagline, CTA buttons
2. **About Section** - Photo/avatar, biography, key highlights, skill previews
3. **Skills Section** - Animated skill icons, progress bars, hover interactions
4. **Projects Section** - Project cards with thumbnails, tech stack, GitHub/Demo links
5. **Resume Section** - Downloadable resume with experience and education timeline
6. **Articles Section** - Featured articles with tags, reading time, and author info
7. **Coding Profiles** - Links to LeetCode, HackerRank, CodeChef, GeeksForGeeks
8. **Contact Section** - Contact form with EmailJS integration and social links

## 🎭 Customization

### Update Personal Information

- **Hero Section**: Edit `src/pages/Hero.jsx` to update name, title, and tagline
- **About Section**: Update biography and highlights in `src/pages/About.jsx`
- **Projects**: Modify the projects array in `src/pages/Projects.jsx`
- **Contact**: Update contact details in `src/pages/Contact.jsx`

### Update Social Links

Edit the `socialLinks` array in `src/components/SocialLinks.jsx` to add/update your social media profiles.

### Update Skills

Modify the `skills` array in `src/pages/Skills.jsx` to reflect your skills and proficiency levels.

### Styling

All CSS files use CSS custom properties (variables) defined in `src/index.css` for easy theming:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent: #6366f1;
}
```

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### Other Platforms
The project can be deployed to any static hosting service that supports Vite builds.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⚠️ Notes

- Make sure to configure EmailJS credentials before using the contact form
- Update placeholder images and content with your actual data
- Customize colors, fonts, and animations to match your brand
- Test all links and social media profiles before deploying

---

Built with ❤️ using React, Framer Motion, and Three.js

