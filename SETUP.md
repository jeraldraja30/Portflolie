# Quick Setup Guide

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

## 📧 EmailJS Setup (Optional - for Contact Form)

The contact form uses EmailJS to send emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

5. Update `src/pages/Contact.jsx`:
   ```javascript
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',     // Replace this
     'YOUR_TEMPLATE_ID',    // Replace this
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'      // Replace this
   )
   ```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/pages/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update title and tagline

2. **About Section** (`src/pages/About.jsx`):
   - Update biography
   - Modify highlights
   - Replace placeholder image

3. **Skills** (`src/pages/Skills.jsx`):
   - Update the `skills` array with your actual skills
   - Adjust skill levels (0-100)

4. **Projects** (`src/pages/Projects.jsx`):
   - Update the `projects` array with your actual projects
   - Add GitHub and demo URLs
   - Replace placeholder thumbnails

5. **Resume** (`src/pages/Resume.jsx`):
   - Update experience and education sections
   - Customize download button to link to your actual resume PDF

6. **Contact** (`src/pages/Contact.jsx`):
   - Update email, phone, and location
   - Configure EmailJS (see above)

### Update Social Links

Edit `src/components/SocialLinks.jsx` to add/update your social media profiles.

### Update Colors and Theme

Modify CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent: #6366f1;
  --accent-hover: #818cf8;
}
```

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

## 🔧 Troubleshooting

- **Three.js not rendering**: Make sure all dependencies are installed
- **Animations not working**: Check browser console for errors
- **EmailJS not working**: Verify your credentials in Contact.jsx
- **Styles not loading**: Ensure all CSS files are imported correctly

## 📝 Notes

- All placeholder content should be replaced with your actual information
- Images and thumbnails are placeholders - replace with your own
- Test all links and functionality before deploying
- The site is fully responsive but test on different devices

---

Happy coding! 🎉

