# Environment Manager Website

A modern, responsive website showcasing Environment Manager - a cross-platform desktop application for managing environment variables.

## Features

- **Modern Design**: Glassmorphism effects with vibrant gradients
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and transitions using Framer Motion
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Fast**: Optimized with Next.js Image component and static generation

## Tech Stack

- **Next.js 13.5**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Responsive Carousel**: Image carousel with lightbox
- **Lucide React**: Modern icon library

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raghurajpratapsingh28/environment-manager-website.git
cd environment-manager-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `.next` folder.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── not-found.tsx        # Custom 404 page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features section
│   ├── FeatureCard.tsx      # Individual feature card
│   ├── Screenshots.tsx      # Screenshots section
│   ├── ScreenshotCarousel.tsx # Carousel with lightbox
│   ├── Download.tsx         # Download section
│   └── Footer.tsx           # Footer component
├── public/
│   ├── screenshot1.png      # App screenshots (placeholder)
│   ├── screenshot2.png
│   ├── screenshot3.png
│   └── logo.png             # Logo (placeholder)
└── README.md
```

## Customization

### Update Download Links

Replace the placeholder GitHub release URLs in `components/Download.tsx`:

```typescript
// Update these URLs with your actual GitHub release links
const windowsUrl = "https://github.com/Raghurajpratapsingh28/Environment--Manager/releases/download/desktop/Environment.Manager.exe";
const macosUrl = "https://github.com/Raghurajpratapsingh28/Environment--Manager/releases/download/desktop/Environment.Manager-1.0.0-arm64.dmg";
```

### Replace Placeholder Images

Replace the placeholder images in the `public/` directory with actual screenshots and logo:

- `screenshot1.png` - Main application interface (800x500px)
- `screenshot2.png` - Variable editor interface (800x500px)
- `screenshot3.png` - Settings panel interface (800x500px)
- `logo.png` - Application logo (256x256px)

### Update Metadata

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
  // ... other metadata
};
```

### Customize Colors and Styling

The design system uses CSS custom properties and Tailwind classes. Main colors can be customized in `app/globals.css`:

```css
.gradient-primary {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

## Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**

2. **Connect your repository to [Vercel](https://vercel.com)**

3. **Set up Environment Variables in Vercel:**
   - Go to your Vercel project settings
   - Navigate to the "Environment Variables" section
   - Add the following environment variable:
     - **Name**: `DATABASE_URL`
     - **Value**: Your PostgreSQL database URL (e.g., `postgresql://username:password@host:port/database?schema=public`)
     - **Environment**: Production (and Preview if needed)

4. **Deploy with default settings**
   - Vercel will automatically detect the Next.js framework
   - The build process will run `prisma generate` before building the application

**Important Notes for Vercel Deployment:**
- Make sure your PostgreSQL database is accessible from Vercel's servers
- For production, consider using a managed database service like:
  - [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
  - [Supabase](https://supabase.com/)
  - [Neon](https://neon.tech/)
  - [Railway](https://railway.app/)

5. **Database Setup:**
   - After deployment, you may need to run database migrations
   - You can do this by adding a build command or using Vercel's CLI:
   ```bash
   vercel env pull .env.local
   npx prisma db push
   ```

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to [Netlify](https://netlify.com)

### Other Platforms

The website is a static Next.js application that can be deployed to any static hosting service.

## Performance Optimizations

- **Image Optimization**: Uses Next.js Image component for optimized loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load only when needed
- **Minification**: CSS and JavaScript are minified in production
- **Caching**: Static assets are cached for better performance

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email contact@Environment Manager.app or create an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons by [Lucide](https://lucide.dev/)