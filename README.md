# Omshree Kenjale - Portfolio Website

## Overview

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing Omshree Kenjale's skills, projects, education, and accomplishments. The portfolio features smooth animations, interactive elements, and a clean, professional design.

## Features

- **Modern UI**: Clean, minimal design with elegant typography and subtle gradients
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Interactive Elements**: 
  - Project modals with detailed information
  - Smooth hover and click animations
  - Animated transitions between sections
- **Comprehensive Sections**:
  - Hero introduction
  - About me
  - Skills with progress indicators
  - Project gallery
  - Education timeline
  - Accomplishments
  - Contact form
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## Technologies Used

- **Frontend**: 
  - React.js
  - Tailwind CSS
  - Framer Motion (for animations)
  - React Icons
- **Build Tools**:
  - Vite (or Create React App)
  - npm

## Project Structure

```
portfolio/
├── public/                # Static files
│   └── images/            # Project screenshots
├── src/
│   ├── assets/            # Assets folder
│   │   └── images/        # Image assets
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── Accomplishments.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Projects.jsx
│   ├── App.js             # Main application
│   └── main.jsx           # Entry point
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OHK08/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Deployment

To build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can deploy this folder to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Customization

To personalize this portfolio:

1. Update personal information in the respective components
2. Replace placeholder images in `public/images/` with your own
3. Modify the color scheme in `tailwind.config.js`
4. Add/remove projects in `Projects.jsx`
5. Update skills in `Skills.jsx`

## Credits

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)


For any questions or feedback, please contact [Omshree Kenjale](mailto:omshreekenjale.ok@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/omshree-kenjale-339546284/).
