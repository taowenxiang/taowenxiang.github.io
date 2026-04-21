# Wenxiang TAO — Portfolio Website

A modern, responsive portfolio website showcasing education, experience, projects, and skills. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: Semantic HTML and proper contrast ratios
- **SEO Friendly**: Optimized meta tags and structure

## 🚀 Live Demo

Visit the live website: [https://taowenxiang.github.io/](https://taowenxiang.github.io/)

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/taowenxiang/taowenxiang.github.io.git
cd taowenxiang.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run linter
- `npm run format` - Format with Biome

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured with GitHub Actions for automatic deployment. Simply:

1. Fork this repository (or use your own copy)
2. Update the `base` path in `vite.config.ts` if your site is not served from the repository root
3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select "GitHub Actions" as the source
4. Push changes to the `main` branch

The site will automatically deploy to `https://taowenxiang.github.io/`

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages using your preferred method (the build script outputs to `dist`).

## 🎨 Customization

### Personal Information

Update content in `src/App.tsx` (hero, sections, contact links) and meta tags in `index.html`.

### Styling

- **Colors**: Modify the color scheme in Tailwind classes
- **Fonts**: Update font families in `tailwind.config.js`
- **Layout**: Adjust spacing and components as needed

### Configuration

- **Base URL**: Update `base` in `vite.config.ts` for deployment
- **Meta Tags**: Modify SEO tags in `index.html`

## 📱 Sections

1. **Hero/About**: Introduction with contact information
2. **Education**: Academic background and achievements
3. **Experience**: Work experience and internships
4. **Projects**: Showcase of technical projects
5. **Skills**: Technical and personal skills
6. **Achievements**: Awards and recognitions
7. **Contact**: Contact information and social links

## 🔧 Performance Optimizations

- Lazy loading for images
- Optimized bundle size with Vite
- Efficient CSS with Tailwind's purging
- Smooth animations with CSS transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

Site contact links are configured in `src/App.tsx` (hero, contact section, footer).

---
