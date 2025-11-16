# How to Add Foram's Photo and Music

## Step 1: Add Foram's Photo

1. Copy Foram's image file
2. Rename it to `foram-photo.jpg` (or keep the original name and update `src/App.jsx`)
3. Place it in the `public` folder

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

**Example:**
- Copy your image file
- Paste it into: `public/foram-photo.jpg`

## Step 2: Add Birthday Music

1. Copy your birthday music file
2. Rename it to `birthday-song.mp3` (or keep the original name and update `src/App.jsx`)
3. Place it in the `public` folder

**Supported formats:** `.mp3`, `.wav`, `.ogg`

**Example:**
- Copy your music file
- Paste it into: `public/birthday-song.mp3`

## Alternative: Use Different File Names

If you want to use different file names:

1. Add your files to the `public` folder with any names (e.g., `foram.jpg`, `song.mp3`)
2. Update `src/App.jsx`:
   ```javascript
   imageUrl: '/foram.jpg',  // Your actual filename
   musicUrl: '/song.mp3',   // Your actual filename
   ```

## Quick Checklist

- [ ] Foram's photo added to `public/` folder
- [ ] Music file added to `public/` folder
- [ ] File names match what's in `src/App.jsx` (or update the code)
- [ ] Run `npm run dev` to test

## Testing

After adding the files, the website will automatically use them. Just refresh your browser!

