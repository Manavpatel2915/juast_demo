# 🎂 Birthday Wish Website

A beautiful, interactive birthday wish website built with React, Vite, Tailwind CSS, and Framer Motion. Perfect for surprising a friend on their special day!

## ✨ Features

- 🎨 Beautiful gradient backgrounds with animated elements
- 🎵 Background music with autoplay (with manual fallback)
- ❤️ Floating heart animations
- 🎊 Confetti effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations using Framer Motion
- 🖼️ Customizable images and messages

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

Edit `src/App.jsx` to customize:

- **Friend's Name**: Change `friendName` in the `CONFIG` object
- **Birthday Message**: Update `birthdayMessage` in the `CONFIG` object
- **Image URL**: Replace `imageUrl` with your own image URL or local image path
- **Music URL**: Update `musicUrl` with your birthday song URL

```javascript
const CONFIG = {
  friendName: 'Your Friend\'s Name',
  birthdayMessage: 'Your custom message here!',
  imageUrl: 'https://your-image-url.com/image.jpg',
  musicUrl: 'https://your-music-url.com/song.mp3',
}
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to Vercel, Netlify, or any static hosting service.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run `netlify deploy --prod`
3. Follow the prompts

## 🎵 Adding Music

1. Place your music file in the `public` folder
2. Update the `musicUrl` in `src/App.jsx`:
   ```javascript
   musicUrl: '/birthday-song.mp3'
   ```

## 📱 Browser Compatibility

- Chrome ✅
- Safari ✅
- Edge ✅
- Firefox ✅

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **HTML5 Audio** - Background music

## 📝 Notes

- Some browsers may block autoplay. If music doesn't start automatically, a "Play Music" button will appear.
- For best results, use optimized images (recommended size: 800x600px)
- Music files should be in MP3 format for maximum compatibility

## 🎉 Enjoy!

Have fun surprising your friend with this beautiful birthday website! 🎂🎈🎉

