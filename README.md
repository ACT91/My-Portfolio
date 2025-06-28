# Stanley Gersom Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a Progressive Web App (PWA) with offline capabilities and installable functionality.

## 🚀 Live Demo

Visit the live portfolio: [stanleygersom.vercel.app](https://stanleygersom.vercel.app)

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Progressive Web App (PWA)**: Installable with offline support
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS
- **Interactive Components**: Smooth animations and transitions
- **Contact Integration**: EmailJS for contact form functionality
- **Google Maps Integration**: Interactive location display
- **Performance Optimized**: Vercel Speed Insights integration
- **SEO Friendly**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, DaisyUI
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Icons**: React Icons, FontAwesome, Lucide React
- **Maps**: Google Maps API
- **Email**: EmailJS
- **PWA**: Service Worker, Web App Manifest

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ACT91/My-Portfolio.git
cd my_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and add your environment variables:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

4. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

## 📱 PWA Features

- **Installable**: Users can install the app on their devices
- **Offline Support**: Service worker caches essential resources
- **App-like Experience**: Standalone display mode
- **Custom Install Button**: Animated install prompt

## 🎨 Customization

### Colors
- Primary: `#200058`
- Background: `#ffffff`
- Theme colors can be modified in `tailwind.config.js` and `manifest.json`

### Content
- Update personal information in `constants/MyDetails.ts`
- Modify project data in the respective component files
- Replace images in the `public/images/` directory

## 📁 Project Structure

```
my_portfolio/
├── components/
│   └── index/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── MainContent.tsx
├── constants/
│   └── MyDetails.ts
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── EducationTimeline.tsx
│   └── Projects.tsx
├── public/
│   ├── images/
│   │   └── placeholder.txt
│   ├── manifest.json
│   ├── service-worker.js
│   └── Stanley Gersom (ACT91) _ Portfolio_files/
│       ├── ACT91-icon.png
│       ├── ACT91.jpg
│       ├── IMG20250320_065938.jpeg
│       └── ...
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── InstallPWA.tsx
│   ├── InstallPWAToast.tsx
│   ├── main.tsx
│   ├── ThemeProvider.tsx
│   ├── version.ts
│   ├── vite-env.d.ts
│   └── assets/
├── styles/
│   ├── About.css
│   ├── App.css
│   ├── Footer.css
│   ├── Header.css
│   └── InstallPWA.css
├── .env
├── .gitignore
├── .vercelignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Stanley Gersom (ACT91)**
- Portfolio: [stanleygersom.vercel.app](https://stanleygersom.vercel.app)
- GitHub: [@ACT91](https://github.com/ACT91)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ACT91/My-Portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
